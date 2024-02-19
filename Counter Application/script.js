document.getElementById("increment").addEventListener('click',incrementCounter);
document.getElementById("decrement").addEventListener('click',decrementCounter);
document.getElementById("reset").addEventListener('click',resetCounter);
let counterDisplay = document.getElementById("ans");
let counterValue = 0;

function updateCounterDisplay(){
    counterDisplay.textContent=counterValue;
}

function incrementCounter(){
    counterValue++;
    updateCounterDisplay();

}

function decrementCounter(){
    counterValue--;
    updateCounterDisplay();
    
}

function resetCounter(){
    counterValue=0;
    updateCounterDisplay();

}