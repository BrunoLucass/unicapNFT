const btc = "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true";
const eth = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true";
const usdt = "https://api.coingecko.com/api/v3/coins/tether?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true";

function buscar(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(cripto){
    linha = document.createElement("tr");
    tdId = document.createElement("td")

    tdId.innerHTML = "R$: " + cripto.market_data.current_price.brl

    linha.appendChild(tdId);
    return linha;
}

function main(){
    // Pega o preço do bitcoin
    data = buscar(btc)
    bitcoin = JSON.parse(data);
    let tabela = document.getElementById("btc");
    let linha = criaLinha(bitcoin);
    tabela.appendChild(linha);

    // Pega o preço do eth
    data = buscar(eth)
    ethereum = JSON.parse(data);

    let tabela1 = document.getElementById("eth");
    let linha1 = criaLinha(ethereum);
    tabela1.appendChild(linha1);

    // Pega o preço do eth
    data = buscar(usdt)
    theter = JSON.parse(data);
    let tabela2 = document.getElementById("usdt");
    let linha2 = criaLinha(theter);
    tabela2.appendChild(linha2);
    //
}

main()