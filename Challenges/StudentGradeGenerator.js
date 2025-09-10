function calculategrade() {
    //Request input of grade from the user
    let marks = prompt("Enter student marks between 0 to 100")
     // Convert input to number
        marks = parseFloat(marks);
        
        // Check if input is a valid number
        if (isNaN(marks)) {
            console.log("please enter a valid number");
            return;
        }
        
        // Validate input range
        if (marks < 0 || marks > 100) {
            console.log("Marks must be between 0 and 100");
            return;
        }
        
        // Determine grade
        let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 49) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }
        
        console.log(`Grade: ${grade}`);
        

// Call the function to run the program
calculateGrade();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}