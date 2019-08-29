<template>
  <aside v-if="statusToolBar === true">
    <div class="item label">Days</div>
    <Days />
    <div v-if="scheduleStatus === 'Room'" class="item label">Rooms</div>
    <div
      v-if="scheduleStatus === 'Room'"
      class="list"
      v-for="(item, index) in floors"
    >
      <div class="dropdown" v-bind:class="{ active: item.isActive }">
        <div class="label-container" v-on:click="changeActiveFloor(index)">
          <div class="label2">{{ item.floor }}00s</div>
          <div class="triangle" v-bind:class="{ active: item.isActive }"></div>
        </div>

        <div class="room-container">
          <div
            v-for="roomItem in item.rooms"
            v-bind:class="{ activeRoom: roomActive === roomItem }"
            v-on:click="changeActiveRoom(roomItem)"
          >
            {{ roomItem }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="scheduleStatus === 'Academic'" class="item label">Courses</div>
    <div
      v-if="scheduleStatus === 'Academic'"
      class="list"
      v-for="(item, index) in courses"
    >
      <div class="dropdown" v-bind:class="{ active: item.isActive }">
        <div class="label-container" v-on:click="changeActiveCourses(index)">
          <div class="label2">{{ item.name }}</div>
          <div class="triangle" v-bind:class="{ active: item.isActive }"></div>
        </div>
        <div
          v-for="(groupItem, groupIndex) in item.groups"
          v-on:click="changeActiveGroups(index, groupIndex)"
        >
          <label style="display: flex; flex-direction: row">
            <input
              type="checkbox"
              class="option-input checkbox"
              v-model="groupItem.isActive"
            />
            <div class="group-label">Group {{ groupItem.name }}</div>
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
      courses: this.$store.getters.getCourses,
      floors: this.$store.getters.getFloors,
      roomActive: this.$store.getters.getActiveRoom,
      scheduleStatus: this.$store.getters.getScheduleStatus
    };
  },
  methods: {
    changeActiveCourses(index) {
      this.courses.splice(index, 1, {
        name: this.courses[index].name,
        isActive: !this.courses[index].isActive,
        groups: this.courses[index].groups
      });
      this.$store.dispatch("setCourses", this.courses);
    },
    changeActiveGroups(index, groupIndex) {
      this.courses[index].groups.splice(groupIndex, 1, {
        name: this.courses[index].groups[groupIndex].name,
        isActive: !this.courses[index].groups[groupIndex].isActive
      });
      this.$store.dispatch("setCourses", this.courses);
    },
    changeActiveRoom(num) {
      this.roomActive = num;
      this.$store.dispatch("setActiveRoom", num);
    },
    changeActiveFloor(index) {
      this.floors.splice(index, 1, {
        floor: this.floors[index].floor,
        isActive: !this.floors[index].isActive,
        rooms: this.floors[index].rooms
      });
    }
  },
  computed: {
    statusToolBar: function() {
      return this.$store.getters.getToolBarStatus;
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
