const request = require('axios');

export function getCryptoRankings() {

        request
        .get('https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=rank', {crossdomain: true})
        .then(function (response) {
            console.log(JSON.parse(response));
        })
        .catch(function (error) {
            console.log(error);
        })
        
//         .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
//         .set('Access-Control-Allow-Origin', '*')
//         // .set('Connection', 'closed')s
//         .set('Content-Type', 'application/json')
//         .end((err, res) => {
//            var parser = new DOMParser();
//            console.log(res);
//         //    var parsedObj = parser.parseFromString(res.text, "text/json");
//         //    var busCount = parseInt(parsedObj.getElementsByTagName("data").length, 10);
//            var cryptoData = {};
//            var cryptoInfo = [];
//         //    var coordinates = {};
//         //    busInfo.coordinates = coordinates;
//            cryptoData.cryptoInfo = cryptoInfo;

//            var i;
//             // for(i = 0; i < 10; i++) {
//             // //   var busNumber = parsedObj.getElementsByTagName("Bus")[i].childNodes[0].textContent;
//             //   var cryptoName = parsedObj.getElementsByTagName("name")[i].childNodes[1].textContent;
//             //   var cryptoSymbol = parsedObj.getElementsByTagName("symbol")[i].childNodes[2].textContent;
//             // //   var cryptoPrice = parsedObj.getElementsByTagName("Bus")[i].childNodes[7].textContent;
//             // //   var busDestination = parsedObj.getElementsByTagName("Bus")[i].childNodes[4].textContent;
//             // //   var busDirection = parsedObj.getElementsByTagName("Bus")[i].childNodes[3].textContent;
//             // //   var busCoordinates = [
//             //     // Number(busLattitude),
//             //     // Number(busLongitude)
//             // //   ]
//             //   var detailedCryptoInfo = {
//             //     "name": cryptoName,
//             //     "symbol": cryptoSymbol
//             //     // "direction": busDirection,
//             //     // "coordinates": busCoordinates
//             //   }
//             //   cryptoData.cryptoInfo.push(detailedCryptoInfo);
//             // }

//             // localStorage.setItem("cryptoData", JSON.stringify(cryptoData));
//         });
  }