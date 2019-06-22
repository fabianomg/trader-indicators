const poloniex = require("./lib/poloniex");

module.exports = {
  returnChartData(coinPair, time, period) {
    let result = poloniex.returnChartData(coinPair, time, period);

    return result;
  }
};
