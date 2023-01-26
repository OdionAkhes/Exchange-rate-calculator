const currencyE1_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyE1_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");





function calculate() {
    const currency_one = currencyE1_one.value
    const currency_two = currencyE1_two.value

    let myApiKey = "716e636d6a189a4fe7e20e4c";

    fetch(`https://v6.exchangerate-api.com/v6/${myApiKey}/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            const rate = data.conversion_rates[currency_two];
            rateEl.innerText = `1 ${currency_one}= ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        })
    
}

currencyE1_one.addEventListener("change", calculate)
amountEl_one.addEventListener("input", calculate)
currencyE1_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate)


swap.addEventListener("click", function () {
    // const temp = currency_one;
    // currency_one = currency_two;
    // currency_two = temp;


    const temp = currencyE1_one.value
    currencyE1_one.value = currencyE1_two.value;
    currencyE1_two.value = temp;

    calculate();
})
calculate();