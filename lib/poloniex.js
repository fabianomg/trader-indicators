const fetch = require("node-fetch");
const moment = require("moment");
const url_public = "https://poloniex.com/public?command=";

var period = {
  "5m": 300,
  "15m": 900,
  "30m": 1800,
  "2h": 7200,
  "4h": 14400,
  "1d": 86400
};
var time = {
  "5m": 5,
  "10m": 10,
  "15m": 15,
  "20m": 20,
  "25m": 25,
  "30m": 30,
  "35m": 35,
  "40m": 40,
  "45m": 45,
  "50m": 50,
  "55m": 55,
  "1h": 60,
  "2h": 120,
  "3h": 180,
  "4m": 240,
  "5m": 300,
  "12h": 720,
  "1d": 1440,
  "2d": 2880,
  "3d": 4320,
  "15d": 21600,
  "1m": 43200
};

/*
currencyPair	The currency pair of the market being requested.
period	Candlestick period in seconds. Valid values are 300, 900, 1800, 7200, 14400, and 86400.
start	The start of the window in seconds since the unix epoch.
end	The end of the window in seconds since the unix epoch
*/
module.exports = {
  async returnChartData(currencyPair, time1, period1) {
    let start = moment()
      .subtract(time[time1], "minutes")
      .unix();
    let end = moment.utc().unix();
    let url =
      url_public +
      "returnChartData&currencyPair=" +
      currencyPair.toUpperCase() +
      "&start=" +
      start +
      "&end=" +
      end +
      "&period=" +
      period[period1];
    let result = await fetch(url)
      .then(res => res.json())
      .then(json => console.log(json));

    return result;
  }
};
