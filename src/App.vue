<template>
  <div id="app">


    <table class="table table-hover">
      <thead>
        <tr>
          <td>Rank</td>
          <td>Name</td>
          <td>Symbol</td>
          <td>Price (USD)</td>
          <td>1H</td>
          <td>1D</td>
          <td>1W</td>
          <td>Markey Cap (USD)</td>
        </tr>
        <tbody>
            <tr v-for="coin in coins">
              <td>{{ coin.rank }}</td>
              <td><img v-bind:src="getCoinImage(coin.symbol)"> {{ coin.name }}</td>
              <td>{{ coin.symbol }}</td>
              <td>{{ coin.price_usd | currency }}</td>
              <td v-bind:style="getColor(coin.percent_change_1h)">
                <span v-if="coin.percent_change_1h > 0">+</span>{{ coin.percent_change_1h }}%
              </td>
              <td v-bind:style="getColor(coin.percent_change_24h)">
                <span v-if="coin.percent_change_24h > 0">+</span>{{ coin.percent_change_24h }}%
              </td>
              <td v-bind:style="getColor(coin.percent_change_7d)">
                <span v-if="coin.percent_change_7d > 0">+</span>{{ coin.percent_change_7d }}%
              </td>
              <td>{{ coin.market_cap_usd | currency }}</td>
            </tr>
        </tbody>
      </thead>
    </table>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

// The API we're using for grabbing metadata about each cryptocurrency
// (including logo images). The service can be found at:
// https://www.cryptocompare.com/api/
let CRYPTOCOMPARE_API_URI = "https://www.cryptocompare.com";

// The API we're using for grabbing cryptocurrency prices.  The service can be
// found at: https://coinmarketcap.com/api/
let COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";

// The amount of milliseconds (ms) after which we should update our currency
// charts.
let UPDATE_INTERVAL = 60 * 1000;

export default {
  name: "app",
  components: {
    HelloWorld
  },

  data: {
    coins: [],
    coinData: {},
  },

  methods: {

    /**
     * Load up all cryptocurrency data.  This data is used to find what logos
     * each currency has, so we can display things in a friendly way.
     */
    getCoinData: function() {
        let self = this;

        axios.get(CRYPTOCOMPARE_API_URI + "/api/data/coinlist")
          .then((resp) => {
            this.coinData = resp.data.Data;
            this.getCoins();
          })
          .catch((err) => {
            this.getCoins();
            console.error(err);
          });
    },

    /**
     * Get the top 10 cryptocurrencies by value.  This data is refreshed each 5
     * minutes by the backing API service.
     */
    getCoins: function() {
        let self = this;

        axios.get(COINMARKETCAP_API_URI + "/v1/ticker/?limit=10")
          .then((resp) => {
            this.coins = resp.data;
          })
          .catch((err) => {
            console.error(err);
          });      
    },

    /**
     * Given a cryptocurrency ticket symbol, return the currency's logo
     * image.
     */
    getCoinImage: function(symbol) {
        return CRYPTOCOMPARE_API_URI + this.coinData[symbol].ImageUrl;      
    }
  },

  created: function() {
    this.getCoinData();
  }

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
