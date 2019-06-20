<template>
  <div class="weekDays-selector">
    <input
      type="checkbox"
      id="weekday-mon"
      class="weekday"
      v-model="dayStatus[0].isActive"
      v-on:click="changeStatus(0)"
    />
    <label for="weekday-mon">M</label>
    <input
      type="checkbox"
      id="weekday-tue"
      class="weekday"
      v-model="dayStatus[1].isActive"
      v-on:click="changeStatus(1)"
    />
    <label for="weekday-tue">T</label>
    <input
      type="checkbox"
      id="weekday-wed"
      class="weekday"
      v-model="dayStatus[2].isActive"
      v-on:click="changeStatus(2)"
    />
    <label for="weekday-wed">W</label>
    <input
      type="checkbox"
      id="weekday-thu"
      class="weekday"
      v-model="dayStatus[3].isActive"
      v-on:click="changeStatus(3)"
    />
    <label for="weekday-thu">T</label>
    <input
      type="checkbox"
      id="weekday-fri"
      class="weekday"
      v-model="dayStatus[4].isActive"
      v-on:click="changeStatus(4)"
    />
    <label for="weekday-fri">F</label>
    <input
      type="checkbox"
      id="weekday-sat"
      class="weekday"
      v-model="dayStatus[5].isActive"
      v-on:click="changeStatus(5)"
    />
    <label for="weekday-sat">S</label>
    <input
      type="checkbox"
      id="weekday-sun"
      class="weekday"
      v-model="dayStatus[6].isActive"
      v-on:click="changeStatus(6)"
    />
    <label for="weekday-sun">S</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dayStatus: this.$store.getters.getDaysStatuses
    };
  },
  methods: {
    changeStatus(num) {
      this.dayStatus[num].isActive = !this.dayStatus[num].isActive;
      this.$store.dispatch("setDayStatus", this.dayStatus);
    }
  }
};
</script>

<style>
@import "../../assets/css/toolbar-style.css";
</style>
