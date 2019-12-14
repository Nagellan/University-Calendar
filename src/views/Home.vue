<template>
  <div id="home">
    <Header />
    <div id="main-container">
      <ToolBar />
      <AcademicMain v-if="scheduleStatus == 0" class="fullscreen" />
      <RoomMain v-if="scheduleStatus == 1" class="fullscreen" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import ToolBar from "../components/ToolBar";
import AcademicMain from "../components/AcademicMain";
import RoomMain from "../components/RoomMain";
import Cookies from "../cookies";

export default {
  name: "home",
  components: {
    Header,
    ToolBar,
    AcademicMain,
    RoomMain,
  },
  beforeCreate() {
    this.$store.dispatch("setInitialValue");
    // set schedule status from cookies
    let scheduleStatus = Cookies.getCookie("scheduleStatus");
    if (scheduleStatus)
      this.$store.dispatch("setScheduleStatus", +scheduleStatus);
    // set active room from cookies
    let roomActive = Cookies.getCookie("roomActive");
    if (roomActive)
      this.$store.dispatch("setActiveRoom", +roomActive);
    // TODO: set checked days
    let daysStatuses = Cookies.getCookie("daysStatuses");
    if (daysStatuses)
      this.$store.dispatch("setDaysStatuses", JSON.parse(daysStatuses));
    // TODO: set chosen groups
    // TODO: set active courses
    // TODO: set active floors
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
