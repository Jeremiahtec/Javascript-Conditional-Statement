//1
function weigh(){
    var weighInput = weighinput.value;
    console.log(weighInput);
    if(weighInput == ""){
        alert("Please enter your weight.");
        return;
    }else if(weighInput < 20){
        showweight.innerHTML = weighInput + " kg" + " is too low.(Underweight)";
    }else if(weighInput >= 20 <= 30){
        showweight.innerHTML = weighInput + " kg" + " Allowed";
    }else if(weighInput > 30){
        showweight.innerHTML = weighInput + " kg" + " is too high.(Overweight)";
    }
}

//2 
function calcBMI(){
    var weightOfBody = weightinput.value;
    var heightOfBody = heightinput.value;
    var bodyMassIndex = weightOfBody / (heightOfBody * heightOfBody);
    if(weightOfBody == "" && heightOfBody == ""){
        alert("Please enter your weight and height.");
        return;
    }else if(bodyMassIndex < 18.5){
        BMIanswer.innerHTML = "Your BMI is " + bodyMassIndex + " therefore you are UNDERWEIGHT";
    }else if(bodyMassIndex >= 18.5 <= 24.9){
        BMIanswer.innerHTML = "Your BMI is " + bodyMassIndex + " therefore you are NORMAL WEIGHT";
    }else if(bodyMassIndex >= 25.0 <= 29.9){
        BMIanswer.innerHTML = "Your BMI is " + bodyMassIndex + " therefore you are OVERWEIGHT";
    }else if(bodyMassIndex > 30.0){
        BMIanswer.innerHTML = "Your BMI is " + bodyMassIndex + " therefore you are OBESE";
    }
}

//3 
function checkCorrectAnswer(){
    var correctAnswer = correctInput.value.toLowerCase();
    var studentAnswer = studentInput.value.toLowerCase();

    if(correctAnswer == "" && studentAnswer == ""){
        alert('Heyy blind man!')
    }else if(correctAnswer === studentAnswer){
        showResult.innerHTML = "Student answer is correct"
    }else {
        showResult.innerHTML = "NAhhh the person got it wrong"
    }
}

//4 
function tempCheck(){
    var usertemp = tempInput.value;
    if(usertemp == ""){
        alert('Please enter a valid temperature')
    }else if(usertemp <= 19){
        tempShow.innerHTML = usertemp + 'oc' + ' is COLD';
    }else if(usertemp <= 28){
        tempShow.innerHTML = usertemp + 'oc' + ' is WARM';
    }else if(usertemp >= 29){
        tempShow.innerHTML = usertemp + 'oc' + ' is HOT';
    }
}

//5
function toLower(){
    var item = itemBox.value;
    if(item == ""){
        alert('Please enter an item');
    }else if(item == item.toLowerCase()){
        alert('The item is already in lowercase');
    }else if(item != item.toLowerCase()){
        showItem.innerHTML = "Item: " + item.toLowerCase();
        alert('Converting to lowercase')
    }
}
