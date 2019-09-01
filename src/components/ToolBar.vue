<template>
<transition name="toolbar">
  <aside v-if="statusToolBar === true">
    <div>
    <div class="item label">Days</div>
    <Days />
    <div v-if="scheduleStatus === 1" class="item label">Rooms</div>
    <div
      v-if="scheduleStatus === 1"
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
          >{{ roomItem }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="scheduleStatus === 0" class="item label">Courses</div>
    <div
      v-if="scheduleStatus === 0"
      class="list"
      v-for="(item, index) in courseStatus"
    >
      <div class="dropdown" v-bind:class="{ active: item.isActive }">
        <div class="label-container" v-on:click="changeActiveCourses(index)">
          <div class="label2">{{ item.name }}</div>
          <div class="triangle" v-bind:class="{ active: item.isActive }"></div>
        </div>
        <div
          v-for="(groupItem, groupIndex) in item.groups"
        >
          <div style="display: flex; flex-direction: row">
            <input
              type="checkbox"
              class="option-input checkbox"
              v-model="groupItem.isActive"
              v-on:click="changeActiveGroups(index, groupIndex)"
            />
            <div class="group-label">Group {{ groupItem.name }}</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </aside>
</transition>
</template>

<script>
import Days from "./additional components/Days";

export default {
  data() {
    return {
      floors: this.$store.getters.getFloors,
      roomActive: this.$store.getters.getActiveRoom
    };
  },
  methods: {
    changeActiveCourses(index) {
      let course = this.$store.getters.getCourses;
      course.splice(index, 1, {
        name: course[index].name,
        isActive: !course[index].isActive,
        groups: course[index].groups
      });
      this.$store.dispatch("setCourses", course);
    },
    changeActiveGroups(index, groupIndex) {
      let course = this.$store.getters.getCourses;
      course[index].groups.splice(groupIndex, 1, {
        name: course[index].groups[groupIndex].name,
        isActive: !course[index].groups[groupIndex].isActive
      });
      this.$store.dispatch("setCourses", course);
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
    },
    scheduleStatus: function() {
      return this.$store.getters.getScheduleStatus;
    },
    courseStatus: function() {
      return this.$store.getters.getCourses;
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
