/*
A simple node application which can be executed from within the docker or can be executed directly from command prompt
This application takes CRYPTO_CURRENCY as a parameter name and calls CoinMarketCap API to get market cap of that currency in USD.
CoinMarketCap API Url is configured in .env file.
*/
var request = require("request");
require('dotenv').config();

var requestedCurrency = process.env.CRYPTO_CURRENCY;

if(requestedCurrency == 'unknown')
{
	console.log('Please provide CRYPTO_CURRENCY name..');
	console.log('If running directly from command as npm start or node app.js, please update .env file with correct CRYPTO_CURRENCY name');
	console.log('If running from docker pass CRYPTO_CURRENCY name as..');
	console.log('docker run -e CRYPTO_CURRENCY=<<currency_name>> node-docker e.g, "docker run -e CRYPTO_CURRENCY=bitcoin node-docker"');
}
else
{
	var options = { method: 'GET',
	  url: process.env.COIN_MARKET_CAP_API};

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);

	  var objArray = JSON.parse(body)
	  var curObject = objArray.filter(function (currency) {
	    return currency.id.toLowerCase() == requestedCurrency.toLowerCase();
		});
	if(curObject.length > 1 || curObject.length < 1)
		console.log('Currency code "' + requestedCurrency + '" not found');
	else
	{
		console.log('Crypto Currency Name : ' + curObject[0].name);
		console.log('Crypto Currency Symbol : ' + curObject[0].symbol);
		console.log('Crypto Currency Market Cap(USD) : ' + curObject[0].market_cap_usd);
	}
	});
}
