<template>
  <div class="hello">

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
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
