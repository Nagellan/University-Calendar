<template>
  <div id="home">
    <Header />
    <div id="main-container">
      <ToolBar />
      <AcademicMain v-if="scheduleStatus == 0"/>
      <RoomMain v-if="scheduleStatus == 1"/>
      <PersonalMain v-if="scheduleStatus == 2"/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import ToolBar from "../components/ToolBar";
import AcademicMain from "../components/AcademicMain";
import RoomMain from "../components/RoomMain";
import PersonalMain from "../components/PersonalMain";

export default {
  name: "home",
  components: {
    Header,
    ToolBar,
    AcademicMain,
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
