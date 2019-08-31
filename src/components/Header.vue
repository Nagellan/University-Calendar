<template>
  <header>
    <div class="left-nav-bar">
      <button class="menu-button" v-on:click="changeStatusToolBar()">
        <img class="menu-icon" src="..\assets\images\menu_icon.svg" />
      </button>
      <img class="logo" src="..\assets\images\IU_logo.png" />
    </div>

    <div class="right-nav-bar">
      <div class="schedule-type" @click="activate()">
        {{ this.scheduleTypes[scheduleStatus] }}
        <span class="room-number" v-if="scheduleStatus == 1"> {{ activeRoom }} </span>
        <div class="sch-drop-down" :class="{ active: this.dropDownIsActive }">
          <div
            v-for="(schType, index) in scheduleTypes"
            :key="schType"
            @click="switchSchType(index)"
          >
            <template v-if="index != scheduleStatus">
              {{ schType }}
            </template>
          </div>
        </div>
      </div>

      <div class="buttons">
        <button class="time-button" v-if="scheduleStatus == 1">
          <img class="time-icon" src="..\assets\images\clock_icon.svg" />
        </button>

        <button class="full-screen-button" @click="openFullscreen">
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
      statusToolBar: this.$store.getters.getToolBarStatus,
      scheduleStatus: this.$store.getters.getScheduleStatus,
      scheduleTypes: this.$store.getters.getScheduleTypes,
      dropDownIsActive: false
    };
  },
  methods: {
    openFullscreen() {
      var elem = document.getElementById("fullscreen");
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    },
    switchSchType(schStatus) {
      this.$store.dispatch("setScheduleStatus", schStatus);
      this.scheduleStatus = schStatus;
    },
    changeStatusToolBar() {
      this.$store.dispatch("setToolBarStatus", !this.statusToolBar);
		},
		activate() {
			this.dropDownIsActive = !this.dropDownIsActive;
		}
  },
  computed: {
		activeRoom: function() {
			return this.$store.getters.getActiveRoom;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/css/header-style.css";
</style>
