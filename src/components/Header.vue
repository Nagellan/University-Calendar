<template>
  <header>
    <div class="left-nav-bar">
      <button class="menu-button" v-on:click="changeStatusToolBar()">
        <img class="menu-icon" src="..\assets\images\menu_icon.svg" />
      </button>
      <img class="logo" src="..\assets\images\IU_logo.png" />
    </div>

    <div class="right-nav-bar">
      <div class="academic-schedule">
        Academic Schedule
      </div>

      <div class="buttons">
        <button class="time-button">
          <img class="time-icon" src="..\assets\images\clock_icon.svg" />
        </button>

        <button class="full-screen-button">
          <img
            class="full-screen-icon"
            src="..\assets\images\fullscreen_icon.png"
          />
        </button>

        <button class="profile-button">
          <a href="https://my.university.innopolis.ru/" target="_blank">
            <img class="profile-icon" src="..\assets\images\user_icon.png" />
          </a>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      statusToolBar: this.$store.getters.getToolBarStatus
    };
  },
  methods: {
    changeStatusToolBar() {
      this.$store.dispatch("setToolBarStatus", !this.statusToolBar);
      this.statusToolBar = !this.statusToolBar;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/header-style.css";
</style>
