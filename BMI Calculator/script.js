document.getElementById("bmiform").addEventListener('submit',function(e){

    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if(gender && age && heightFeet && heightInches && weight){
        const heightInMetres = ((heightFeet * 12) + heightInches) * 0.0254; // height in metres
        const bmi = weight / (heightInMetres * heightInMetres);
        const resultElement = document.getElementById('result');

        let category = '';
        if(bmi < 18.5){
            category = "UNDER WEIGHT";
        }
        else if(bmi>=18.5 && bmi<24.9){
            category = "NORMAL WEIGHT";
        }
        else if(bmi>=25 && bmi<29.9){
            category = "OVER WEIGHT"
        }
        else{
            category = "OBESE"
        }

        let resultMessage = 'Your BMI : '+ bmi.toFixed(2) + '<br>';
        resultMessage += 'Category : ' + category;

        resultElement.innerHTML = resultMessage;


    }
});