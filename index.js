const poloniex = require("./lib/poloniex");

module.exports = {
  returnChartData(coinPair, time, period) {
    if (coinPair != "help") {
      var result = poloniex.returnChartData(coinPair, time, period);
    } else {
      result = {
        peiod: {
          "5m": "5 minutos",
          "15m": "15 minutos",
          "30m": "30 minutos",
          "2h": "2 horas",
          "4h": "4 horas",
          "1d": "1 dia"
        },
        time: {
          "5m": "5 minutos",
          "10m": "10 minutos",
          "15m": "15 minutos",
          "20m": "20 minutos",
          "25m": "25 minutos",
          "30m": "30 minutos",
          "35m": "35 minutos",
          "40m": "40 minutos",
          "45m": "45 minutos",
          "50m": "50 minutos",
          "55m": "55 minutos",
          "1h": "1 hora",
          "2h": "2 horas",
          "3h": "3 horas",
          "4h": "4 horas",
          "5h": "5 horas",
          "12h": "12 horas",
          "1d": "1 dia",
          "2d": "2 dia",
          "3d": "3 dia",
          "15d": "15 dia",
          "1m": "1 mes"
        }
      };
    }

    return result;
  }
};
