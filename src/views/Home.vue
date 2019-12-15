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
    let url = new URL(window.location.href);

    this.$store.dispatch("setInitialValue");

    // set schedule status from cookies
    let scheduleStatus = Cookies.getCookie("scheduleStatus");
    if (scheduleStatus)
      this.$store.dispatch("setScheduleStatus", +scheduleStatus);

    // set active room from cookies
    let roomActive = Cookies.getCookie("roomActive");
    if (roomActive)
      this.$store.dispatch("setActiveRoom", +roomActive);
    
    // set checked days
    if (url.searchParams.get("week")) {
      // from url parameters
      let weekdays = url.searchParams.get("week");
      let daysStatuses = [
        { "name":"Monday",    "isActive":false },
        { "name":"Tuesday",   "isActive":false },
        { "name":"Wednesday", "isActive":false },
        { "name":"Thursday",  "isActive":false },
        { "name":"Friday",    "isActive":false },
        { "name":"Saturday",  "isActive":false },
        { "name":"Sunday",    "isActive":false }
      ];
      daysStatuses.forEach((day) => {
        if (weekdays.includes(day.name.slice(0, 3)))
          day.isActive = true;
      });
      this.$store.dispatch("setDaysStatuses", daysStatuses);
    } else {
      // from cookies, otherwise, if they're specified
      let daysStatuses = Cookies.getCookie("daysStatuses");
      if (daysStatuses)
        this.$store.dispatch("setDaysStatuses", JSON.parse(daysStatuses));
    }

    // set active floors from cookies
    let floors = Cookies.getCookie("floors");
    if (floors)
      this.$store.dispatch("setFloors", JSON.parse(floors));

    // set toolbar state from cookies
    let toolbarStatus = Cookies.getCookie("toolbarStatus");
    if (toolbarStatus !== undefined)
      this.$store.dispatch("setToolBarStatus", toolbarStatus == "true");
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
