function calculateDemeritPoints() {
    // Prompt for the speed from user
    let speed = prompt("Enter car speed (km/h):");
    
        // Convert input to number
        speed = parseFloat(speed);
        
        // Check if input is a valid number
        if (isNaN(speed)) {
            console.log("Error: Please enter a valid number");
            return;
        }
                
        // Speed limit constant
        const SPEED_LIMIT = 70;
        const KM_PER_DEMERIT = 5;
        
        // Check if speed is within limit
        if (speed <= SPEED_LIMIT) {
            console.log("Ok");
        } else {
            // Calculate demerit points
            let demeritPoints = Math.floor((speed - SPEED_LIMIT) / KM_PER_DEMERIT);
            console.log(`Points: ${demeritPoints}`);
        }
        
}

// Call the function to run the program
calculateDemeritPoints();