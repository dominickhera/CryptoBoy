const request = require('axios');

export function getCryptoRankings() {
        request
        .get('https://api.coinmarketcap.com/v2/ticker/?sort=id', {crossdomain: true})
        .then(function (response) {
            console.log(response.data.data);
            var cryptoData = {};
            var cryptoInfo = [];
            let listLength = response.data.length;
            console.log("length of list is " + listLength);
            // var shitWorkAround = [1,2,52,328,512,825,1027,1765,1831,2010];
            cryptoData.cryptoInfo = cryptoInfo;
            var i;
            for(i = 1; i < listLength; i++) {
            // for(object in response.data.data) {
                // console.log(object);
                var name = response.data.data[i].name;
                var symbol = response.data.data[i].symbol;
                var rank = response.data.data[i].rank;
                var price = response.data.data[i].quotes.USD.price;
                var percent_change_1hr = response.data.data[i].quotes.USD.percent_change_1h;
                var percent_change_7d = response.data.data[i].quotes.USD.percent_change_7d;
                var percent_change_24hr = response.data.data[i].quotes.USD.percent_change_24h;
                
                var detailedCryptoInfo = {
                    "name": name,
                    "symbol": symbol,
                    "rank": rank,
                    "price": price,
                    "percent_change_1h": percent_change_1hr,
                    "percent_change_7d": percent_change_7d,
                    "percent_change_24h": percent_change_24hr
                }
                cryptoData.cryptoInfo.push(detailedCryptoInfo);
            }
            console.log(cryptoData);
            localStorage.setItem("cryptoData", JSON.stringify(cryptoData));
        })
        .catch(function (error) {
            console.log(error);
        })
  }

 export function renderArrayItem(crypto, i) {
    const {name, symbol, price, rank, percent_change_1h, percent_change_24h, percent_change_7d } = crypto;
    console.log(crypto);
    return (
        { title: {name} , url: 'https://google.com'}
    );
  }

  export function getSearchResults() {
    // return [
        // { title: 'Dropbox', url: 'https://dropbox.com' },
        // { title: 'GitHub', url: 'https://google.com' },
        // { title: 'Facebook', url: 'https://facebook.com' },
    //   ];
    return [(JSON.parse(localStorage.getItem("cryptoData")).cryptoInfo).map(this._renderTableRow)];
  }