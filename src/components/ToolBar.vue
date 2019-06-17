<template>
  <aside>
    <div class="item label">Days</div>
    <Days />
    <div v-if="scheduleStatus === 'Room'" class="item label">Rooms</div>
    <div
      v-if="scheduleStatus === 'Room'"
      class="list"
      v-for="(floor, index) in activeFloor.floors"
    >
      <div class="dropdown" v-bind:class="{ active: floor[1] }">
        <div class="label-container" v-on:click="changeActiveFloor(index)">
          <div class="label2">{{ floor[0] }}</div>
          <div class="triangle" v-bind:class="{ active: floor[1] }"></div>
        </div>
        <div class="room-container">
          <div
            v-for="num in activeFloor.rooms[index]"
            v-bind:class="{ activeRoom: roomActive === num }"
            v-on:click="changeActiveRoom(num)"
          >
            {{ num }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="scheduleStatus === 'Academic'" class="item label">Courses</div>
    <div
      v-if="scheduleStatus === 'Academic'"
      class="list"
      v-for="(course, index) in activeCourse.courses"
    >
      <div class="dropdown" v-bind:class="{ active: course[1] }">
        <div class="label-container" v-on:click="changeActiveCourses(index)">
          <div class="label2">{{ course[0] }}</div>
          <div class="triangle" v-bind:class="{ active: course[1] }"></div>
        </div>
        <div
          v-for="(num, groupIndex) in activeCourse.groups[index]"
          v-on:click="changeActiveGroups(index, groupIndex)"
        >
          <label style="display: flex; flex-direction: row">
            <input
              type="checkbox"
              class="option-input checkbox"
              v-model="num[1]"
            />
            <div class="group-label">{{ num[0] }}</div>
          </label>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import Days from "./additional components/Days";

export default {
  data() {
    return {
      activeCourse: this.$store.getters.getActiveCourse,
      activeFloor: this.$store.getters.getActiveFloor,
      roomActive: this.$store.getters.getActiveRoom,
      scheduleStatus: this.$store.getters.getScheduleStatus
    };
  },
  methods: {
    changeActiveRoom(num) {
      this.roomActive = num;
      this.$store.dispatch("setActiveRoom", num);
    },
    changeActiveCourses(index) {
      this.activeCourse.courses.splice(index, 1, [
        this.activeCourse.courses[index][0],
        !this.activeCourse.courses[index][1]
      ]);
    },
    changeActiveGroups(index, groupIndex) {
      this.activeCourse.groups[index].splice(groupIndex, 1, [
        this.activeCourse.groups[index][groupIndex][0],
        !this.activeCourse.groups[index][groupIndex][1]
      ]);
      this.$store.dispatch("setActiveGroups", this.activeCourse.groups);
    },
    changeActiveFloor(index) {
      this.activeFloor.floors.splice(index, 1, [
        this.activeFloor.floors[index][0],
        !this.activeFloor.floors[index][1]
      ]);
    }
  },
  components: {
    Days
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/toolbar-style.css";
</style>
