/*
let x = 0;
do{
    window.alert("With sore eyes, and tattered hands,")
    window.alert("I code this poem as something grand.")
    window.alert("Though in response, visitors may retort,")
    window.alert("Domain Expansion, Infinite Alert");
}while(x == 0)
*/

// Username Enter
let username;

document.getElementById("mySubmit").onclick = function()
{
    username = document.getElementById("myText").value;
    if(Boolean(username) == false)
    {
        document.getElementById("H1Element").textContent = `Hey there, you didn't input anything`;
    }
    else{
    document.getElementById("H1Element").textContent = `Hey there, ${username}`;
    }
}
////////////////

// Circle Diameter
    const PI = 3.14159;
    let radius;
    let circumference;

    document.getElementById("myRad").onclick = function()
    {
        radius = Number(document.getElementById("Rad").value);

       circumference = 2 * PI * radius; 

       document.getElementById("circum").textContent = `Diameter: ${circumference}cm`;
    }
///////////////

// Counter Program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
///////////////

// Random Number Generator
const rngButton = document.getElementById("rngButton");
const rndNum = document.getElementById("rndNum");
let num;

rngButton.onclick = function(){
    num = Math.floor(Math.random() * 10000) + 1;
    rndNum.textContent = num;
}
///////////////