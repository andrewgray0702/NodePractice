const fetch = require('node-fetch');

let  callType = process.argv[2];

switch(callType.toLowerCase()){
    case 'xrate':
        fetchXrate(process.argv[3], process.argv[4]);
        break;
    case 'stock':
        fetchStock(process.argv[3]);
        break;
    default:
    console.log('Invalid Option');
}

async function fetchStock(symbol){
    let stockResponse = await fetch('https://www.alphavantage.co/query?' + 'function=GLOBAL_QUOTE' + '&' + 'symbol=' + symbol + '&' + 'apikey=' + 'FUIS7CN9TNKWRXIW')
    let json = await stockResponse.json();
    console.log(json);
}
async function fetchXrate(fromCurrency, toCurrency){
    let xrateResponse = await fetch('https://www.alphavantage.co/query?' + 'function=CURRENCY_EXCHANGE_RATE' + '&' + 'from_currency=' + fromCurrency + '&' + 'to_currency=' + toCurrency + '&' + 'apikey=' + 'FUIS7CN9TNKWRXIW');
    let json = await xrateResponse.json();
    console.log(json);
}