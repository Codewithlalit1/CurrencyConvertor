// Taking date as input
let date;
document.getElementById("dateInput").addEventListener("change", function() {
    date = this.value;
    console.log(this.value);
  });
  console.log(date);
// completed date as input

// completing api
let baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@";
var URL = baseURL + date + "/v1/currencies/";
// completed api set-up

// Adding all option to the select input
const select1 = document.getElementById("countryselect"); 
for(let currcode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currcode;
    newOption.value = currcode;
    select1.append(newOption);
}

const select2 = document.getElementById("convertedCountry");
for(let currcode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currcode;
    newOption.value = currcode;
    select2.append(newOption);
}
// All options are added to select input


// setting country from select
var cntry1 = document.getElementById("countryselect"); 
var cntryValue1 = cntry1.value;
console.log(cntryValue1);

var cntry2 = document.getElementById("convertedCountry");
var cntryValue2 = cntry2.value;
console.log(cntryValue2);
// completed country selection

// converting to Lowercase to use country code in api 
var demo = cntryValue1.toLowerCase();
console.log(demo);
var demo2 = cntryValue2.toLowerCase();
console.log(demo2);


var res = document.getElementById("output");

// code to change the flag every time 
let imgselect1 = document.getElementById("image1");
cntry1.addEventListener("change",()=>{
    const selectedCurrency1 = cntry1.value;
    let basesyn1 = "https://flagsapi.com/";
    let country1 = countryList[selectedCurrency1];
    console.log(country1);
    imgselect1.src=basesyn1+country1+"/flat/64.png";
})

cntry2.addEventListener("change",()=>{
    const selectedCurrency2 = cntry2.value;
    let imgselect2 = document.getElementById("image2");
    let basesyn2 = "https://flagsapi.com/";
    let country2 = countryList[selectedCurrency2];
    imgselect2.src=basesyn2+country2+"/flat/64.png";
})
// flag change code completed.

// function to generate conversion after every button click
const getConvertedCurr = async()=>{
    cntryValue1 = cntry1.value;
    cntryValue2 = cntry2.value;
    console.log(cntryValue1);
    console.log(cntryValue2);
    demo = cntryValue1.toLowerCase();
    demo2 = cntryValue2.toLowerCase();
    URL = baseURL+date+"/v1/currencies/"+demo+".json";
    
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
    let result = data[demo][demo2];
    var inp = document.getElementById("curr").value;
    inp = parseFloat(inp);
    console.log(inp);
    res.value = result*inp;
    console.log(data[demo][demo2]);
}

// setting up button functionality
var btn = document.getElementById("submit");
btn.addEventListener("click",getConvertedCurr);
