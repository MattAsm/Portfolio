window.alert("Please listen to that button 🙏");
/////////////////Check Box Logic
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked)
    {
        subResult.textContent = `You are subscribed! 👍`;
    }
    else{
        subResult.textContent = `You are not subscribed!`;
    }

    if(visaBtn.checked)
    {
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked)
        {
            paymentResult.textContent = `You are paying with MasterCard`;
        }
    else if(payPalBtn.checked)
        {
            paymentResult.textContent = `You are paying with PayPal`;
        }
    else{
        paymentResult.textContent = `You must select a payment option!`;
    }
}
///////////////////////////////////////

////////////////////Ternary Operator Test
//let message = x >= 100 ? "You choose a number over 99" : "You choose a number smaller then 100";

////////////////////Method Chaining: Very Cool👍

//let username = window.prompt("Please enter your username");

//username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

//console.log(username);

const temptingButton = document.getElementById("temptingButton");
let x = 0;
temptingButton.onclick = function(){   
do{
    window.alert("With sore eyes, and tattered hands,")
    window.alert("I code this poem as something grand.")
    window.alert("Though in response, visitors may retort,")
    window.alert("Domain Expansion: Infinite Alert");
}while(x == 0)
}