const btc = "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true";
const eth = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true";
const usdt = "https://api.coingecko.com/api/v3/coins/tether?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true";

const ulb = document.getElementById('btc');
const ule = document.getElementById('eth');
const ulu = document.getElementById('usdt');

const valor = btc["market_data"]["current_price"]["brl"] 

function buscar(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario){
    
}