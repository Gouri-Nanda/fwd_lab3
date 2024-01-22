function calculateBMI(){
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if(isNaN(weight)||isNaN(height)||weight<=0||height<=0||age<2||age>120){
        alert('Please enter valid values.')
        return;
    }

    const bmi = (weight/((height/100)**2)).toFixed(2);

    const message = getBMIMessage(bmi);

    const resultElement = document.getElementById('result');
    const bmiValueElement = document.getElementById('bmi-value');
    const bmiSliderElement = document.getElementById('bmi-slider');
    const bmiMessageElement = document.getElementById('bmi-message');

    bmiValueElement.textContent = bmi;
    
    // Show the result and slider after the calculation
    resultElement.style.display = 'block';
    bmiSliderElement.style.display = 'block';

    // Update the slider value
    bmiSliderElement.value = bmi;

    // Update the BMI message
    bmiMessageElement.textContent = message;
}


function getBMIMessage(bmi){
    let message;
    if (bmi<18.5) {
        message = "Your BMI falls below the healthy range. It might be helpful to consult with a healthcare professional to discuss healthy weight gain strategies."
    } else if (bmi>=18.5 && bmi<24.9) {
        message = "Your BMI seems to be in a healthy range! Maintaining this with a nutritious diet and physical activity is great for your overall well-being."
    } else if (bmi >= 24.9 && bmi<29.9){
        message = "Your BMI suggests you're carrying slightly more weight than is ideal for optimal health. Consider incorporating some gradual lifestyle changes like increasing physical activity or making small adjustments to your diet."
    } else {
        message = "Your BMI indicates a significantly higher weight than is recommended for good health. Consulting with a healthcare professional is highly recommended to develop a personalized plan for managing your weight and improving your overall health."
    }
    return message;


}


function toggleDarkMode() {
    const body = document.body;
    const calculator = document.querySelector('.calculator');
    calculator.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    
}