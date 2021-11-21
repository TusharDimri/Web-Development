function bmiCalculator (weight, height) {
    let BMI = weight / (height * height);
    let interpretation = ``;
    if (BMI < 18.5){
        interpretation = `Your BMI is ${BMI}, so you are underweight.`;
    } 
    else if (BMI >= 18.5 && BMI <= 24.9){
        interpretation = `Your BMI is ${BMI}, so you have a normal weight.`;
    }
    else if(BMI > 24.9){
        interpretation = `Your BMI is ${BMI}, so you are overweight.`;
    }
    return interpretation;
}

console.log(bmiCalculator(70, 2));