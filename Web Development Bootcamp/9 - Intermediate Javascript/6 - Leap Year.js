function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.
        if (year % 4 === 0){
            if(year % 100 === 0){
                if(year % 400 === 0){
                    console.log("Leap year.");
                }
                else{
                    consle.log("Not leap year.");
                }
            }
            else{
                console.log("Leap year.");
            }
        }
        else{
            console.log("Not leap year.");
        }
    
    /**************Don't change the code below****************/    
    
}

isLeap(2000);
isLeap(2400);
isLeap(1989);