<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home";

export default {
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import "./assets/css/font.css";

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-family: "Elektra";
}
</style>
