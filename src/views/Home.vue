<template>
  <div id="home">
    <Header />
    <div id="main-container">
      <ToolBar />
      <Main v-if="scheduleStatus == 0"/>
      <RoomMain v-if="scheduleStatus == 1"/>
      <PersonalMain v-if="scheduleStatus == 2"/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import ToolBar from "../components/ToolBar";
import Main from "../components/Main";
import RoomMain from "../components/RoomMain";
import PersonalMain from "../components/PersonalMain";

export default {
  name: "home",
  components: {
    Header,
    ToolBar,
    Main,
    RoomMain,
    PersonalMain
  },
  computed: {
    scheduleStatus: function() {
      return this.$store.getters.getScheduleStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/home-style.css";
</style>
