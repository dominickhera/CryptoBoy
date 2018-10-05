const request = require('axios');

export function getCryptoRankings() {
        request
        .get('https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=rank', {crossdomain: true})
        .then(function (response) {
            console.log(response.data.data);
            var cryptoData = {};
            var cryptoInfo = [];
            var shitWorkAround = [1,2,52,328,512,825,1027,1765,1831,2010];
            cryptoData.cryptoInfo = cryptoInfo;
            var i;
            for(i = 0; i < 10; i++) {
            // for(object in response.data.data) {
                // console.log(object);
                var name = response.data.data[shitWorkAround[i]].name;
                var symbol = response.data.data[shitWorkAround[i]].symbol;
                var rank = response.data.data[shitWorkAround[i]].rank;
                var price = response.data.data[shitWorkAround[i]].quotes.USD.price;
                var percent_change_1hr = response.data.data[shitWorkAround[i]].quotes.USD.percent_change_1hr;
                var percent_change_7d = response.data.data[shitWorkAround[i]].quotes.USD.percent_change_7d;
                var percent_change_24hr = response.data.data[shitWorkAround[i]].quotes.USD.percent_change_24hr;
                
                var detailedCryptoInfo = {
                    "name": name,
                    "symbol": symbol,
                    "rank": rank,
                    "price": price,
                    "percent_change_1hr": percent_change_1hr,
                    "percent_change_7d": percent_change_7d,
                    "percent_change_24hr": percent_change_24hr
                }
                cryptoData.cryptoInfo.push(detailedCryptoInfo);
            }
            localStorage.setItem("cryptoData", JSON.stringify(cryptoData));
        })
        .catch(function (error) {
            console.log(error);
        })
  }