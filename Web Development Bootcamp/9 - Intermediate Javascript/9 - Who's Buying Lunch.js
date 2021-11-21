function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        let num = names.length;
        
        let rand = Math.ceil(Math.random() * num);
        
        let nm = names[rand - 1];
        
        return `${nm} is going to buy lunch today!`;
    /******Don't change the code below*******/    
}


names = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe'];

console.log(whosPaying(names));
