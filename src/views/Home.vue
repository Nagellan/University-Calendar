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
.home,
.nav,
.aside,
.main {
  margin: 0;
}

.home {
  width: 100vm;
  height: 100vh;
}

.nav {
  display: flex;
  width: 100vm;
  height: 78px;
  border-bottom: 2px solid #92ba1f;
}

.main-container {
  display: flex;
  height: calc(100vh - 80px);
}

.aside {
  flex: 1;
  border-right: 1px solid #dadce0;
}

.main {
  flex: 5;
}
</style>
