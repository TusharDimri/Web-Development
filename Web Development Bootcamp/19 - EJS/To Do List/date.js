// console.log(module);
// module.exports.getDate = getDate;
// module.exports.getDay = getDay;
/* 
Note:
module.exports => exports
*/

exports.getDate = function() {  // module.exports
    const today = new Date();
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
     
    return today.toLocaleDateString("en-US", options);;
}

exports.getDay = function (){ // module.exports
    const today = new Date();
    
    const options = {
        day: "numeric",
    };
    
    return today.toLocaleDateString("en-US", options);;
}

console.log(module.exports)