const inflationRates = {
    2000: 20.2,
    2001: 18.6,
    2002: 15.1,
    2003: 13.6,
    2004: 11.7,
    2005: 10.9,
    2006: 9.7,
    2007: 9.0,
    2008: 14.1,
    2009: 13.3,
    2010: 6.1,
    2011: 6.1,
    2012: 6.6,
    2013: 6.5,
    2014: 11.4,
    2015: 12.9,
    2016: 5.4,
    2017: 3.7,
    2018: 2.9,
    2019: 3.0,
    2020: 3.4,
    2021: 8.4,
    2022: 14.5,
    2023: 6.4,
    2024: 9.5,
};

document.getElementById('calculate').addEventListener('click', () => {
    const startYear = parseInt(document.getElementById('startYear').value);
    const endYear = parseInt(document.getElementById('endYear').value);
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        alert("Пожалуйста, введите корректную сумму");
        return;
    }

    let totalInflation = 0;

    for (let year = startYear; year < endYear; year++) {
        totalInflation += inflationRates[year] / 100;
    }

    const finalAmount = amount * (1 + totalInflation);
    document.getElementById('result').textContent = finalAmount.toFixed(2);
});


let yearsVisible = false;

function togle(){

    

    if(!yearsVisible){
        document.getElementById("h").style.display = "block"

    }

    yearsVisible = !yearsVisible;
    document.getElementById('toggleYears').textContent = yearsVisible ? 'Скрыть годы' : 'Показать все годы';

}
