const submitBtn = document.getElementById("submitBtn");
const answer = document.getElementById("answer");

function convert(){
    let tempNum = Number(document.getElementById("temp").value);
    let convertFrom = document.getElementById("selection1").value;
    let convertTo = document.getElementById("selection2").value;
    
    switch(convertFrom)
    {
        case "C":
            answer.textContent = convertTo == "Cel" ? "It's already in Celsius" 
            : convertTo == "Fah" ? CelToFah(tempNum).toFixed(1) + "°F" 
            : convertTo == "Kel" ? CelToKel(tempNum).toFixed(1) + "K"
            : "This shouldn't be possible, stop messing with my code ;-;";
            break;

        case "F":
            answer.textContent = convertTo == "Fah" ? "It's already in Fahrenheit" 
            : convertTo == "Cel" ? FahToCel(tempNum).toFixed(1) + "°C"
            : convertTo == "Kel" ? FahToKel(tempNum).toFixed(1) + "K"
            : "This shouldn't be possible, stop messing with my code ;-;";
            break;

        case "K":
            answer.textContent = convertTo == "Kel" ? "It's already in Kelvins" 
            : convertTo == "Cel" ? KelToCel(tempNum).toFixed(1) + "°C"
            : convertTo == "Fah" ? KelToFah(tempNum).toFixed(1) + "°F"
            : "This shouldn't be possible, stop messing with my code ;-;";
            break;    
        default:
            answer.textContent = "This shouldn't be possible, stop messing with my code ;-;";
            break;
    }
}

function CelToFah(x)
{
return (x * 9/5) + 32;
}

function FahToCel(x)
{
    return (x - 32) * 5/9;
}

function CelToKel(x)
{
    return x + 273.15;
}

function KelToCel(x)
{
return x - 273.15;
}

function FahToKel(x)
{
return (x - 32) * 5/9 + 273.15;
}

function KelToFah(x)
{
 return (x - 273.15) * 9/5 + 32;
}

/////////////////////////////////////////////
