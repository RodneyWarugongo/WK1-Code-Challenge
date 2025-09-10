function calculateNetSalary() {
    // Prompt for basic salary and benefits
    let basicSalary = prompt("Enter basic salary (KES):");
    let benefits = prompt("Enter benefits (KES):");
    
    try {
        // Convert inputs to numbers
        basicSalary = parseFloat(basicSalary);
        benefits = parseFloat(benefits);
        
        // Validate inputs
        if (isNaN(basicSalary) || isNaN(benefits)) {
            console.log("Error: Please enter valid numbers for salary and benefits");
            return;
        }
        if (basicSalary < 0 || benefits < 0) {
            console.log("Error: Salary and benefits cannot be negative");
            return;
        }
        
        // Calculate gross salary
        let grossSalary = basicSalary + benefits;
        
        // Calculate PAYE (simplified tax rates)
        let payee = 0;
        if (grossSalary <= 24000) {
            payee = grossSalary * 0.10; // 10% tax
        } else if (grossSalary <= 32333) {
            payee = 2400 + (grossSalary - 24000) * 0.25; // 25% for amount above 24,000
        } else {
            payee = 2400 + 2083.25 + (grossSalary - 32333) * 0.30; // 30% for amount above 32,333
        }
        
        // Calculate NHIF deductions (simplified bands)
        let nhifDeductions;
        if (grossSalary >= 100000) {
            nhifDeductions = 1700;
        } else if (grossSalary >= 80000) {
            nhifDeductions = 1400;
        } else if (grossSalary >= 60000) {
            nhifDeductions = 1100;
        } else if (grossSalary >= 45000) {
            nhifDeductions = 1000;
        } else if (grossSalary >= 30000) {
            nhifDeductions = 850;
        } else {
            nhifDeductions = 600;
        }
        
        // Calculate NSSF deductions (fixed rate)
        let nssfDeductions = 2160;
        
        // Calculate net salary
        let netSalary = grossSalary - (payee + nhifDeductions + nssfDeductions);
        
        // Output results
        console.log(`Gross Salary: KES ${grossSalary.toFixed(2)}`);
        console.log(`PAYE (Tax): KES ${payee.toFixed(2)}`);
        console.log(`NHIF Deductions: KES ${nhifDeductions.toFixed(2)}`);
        console.log(`NSSF Deductions: KES ${nssfDeductions.toFixed(2)}`);
        console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);
        
    } catch (error) {
        console.log("Error: An unexpected error occurred");
    }
}

// Call the function to run the program
calculateNetSalary();