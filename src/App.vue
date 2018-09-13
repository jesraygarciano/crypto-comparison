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
