<template>
  <div id="home">
    <Header />
    <div id="main-container">
      <ToolBar />
      <Main id="fullscreen" />
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

<style lang="scss" scoped>
@import "../assets/css/home-style.css";
</style>
