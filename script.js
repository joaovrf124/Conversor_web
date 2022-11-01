
const button = document.querySelector("button")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.9
const bitcoin = 120498

const convertValue = (()=> {
    const inputReal = document.getElementById("input-real").value
    const currencyValueText = document.getElementById("currency-value") 
    const realValueText = document.getElementById("real-value-text")
    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(inputReal);
    if (select.value === "US$ Dólar americano") {
    valor_convertido = inputReal / dolar
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD'}).format(valor_convertido);
    } if (select.value === "€ Euro") {
        valor_convertido = inputReal / euro
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency',currency: 'EUR'}).format(valor_convertido);
    }
    if (select.value === "Bitcoin") {
        valor_convertido = inputReal / bitcoin 
        currencyValueText.innerHTML = valor_convertido.toFixed(2)
    }
})

const changeCurrency = (()=> {
    
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")
    if (select.value === "€ Euro") {
        
        currencyName.innerText = "Euro"
        currencyImg.src = "assets/Design sem nome 1.png" 
    } if(select.value === "US$ Dólar americano") {
        currencyName.innerText = "Dolar"
        currencyImg.src = "assets/estados-unidos (1) 1.png" 
    }
    if (select.value === "Bitcoin") {
        currencyName.innerText = "Bitcoin"
        currencyImg.src = "assets/bitcoin.png" 
    }

    convertValue();

})

button.addEventListener("click", convertValue)
select.addEventListener("change", changeCurrency)
