<template>
  <div class="home">
    <div class="nav">
      <Header />
    </div>
    <div class="main-container">
      <div class="aside">
        <ToolBar />
      </div>

      <div class="main">
        <Main />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import ToolBar from "../components/ToolBar";
import Main from "../components/Main";

export default {
  name: "home",
  components: {
    Header,
    ToolBar,
    Main
  }
};
</script>

<style lang="scss">
@import "../assets/css/home-style.css";
</style>
