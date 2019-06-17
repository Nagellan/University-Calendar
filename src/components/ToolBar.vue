<template>
  <aside>
    <div class="item label">Days</div>
    <Days />
    <div v-if="scheduleStatus === 'Room'" class="item label">Rooms</div>
    <div
      v-if="scheduleStatus === 'Room'"
      class="list"
      v-for="(floor, index) in floorActive"
    >
      <div class="dropdown" v-bind:class="{ active: floor[1] }">
        <div
          class="label-container"
          v-on:click="
            floorActive.splice(index, 1, [
              floorActive[index][0],
              !floorActive[index][1]
            ])
          "
        >
          <div class="labelv2">{{ floor[0] }}</div>
          <div class="triangle" v-bind:class="{ active: floor[1] }"></div>
        </div>
        <div class="room-container">
          <div
            v-for="num in roomNumber[index]"
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
      v-for="(course, index) in courseActive"
    >
      <div class="dropdown" v-bind:class="{ active: course[1] }">
        <div
          class="label-container"
          v-on:click="
            courseActive.splice(index, 1, [
              courseActive[index][0],
              !courseActive[index][1]
            ])
          "
        >
          <div class="labelv2">{{ course[0] }}</div>
          <div class="triangle" v-bind:class="{ active: course[1] }"></div>
        </div>
        <div
          v-for="num in groupNumber[index]"
          v-on:click="changeActiveRoom(num)"
        >
          <label style="display: flex; flex-direction: row">
            <input type="checkbox" class="option-input checkbox" checked />
            <div class="group">{{ num }}</div>
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
      courseActive: [
        ["BS1", true],
        ["BS2", true],
        ["BS3", true],
        ["BS4", true],
        ["MS1", true],
        ["MS2", true]
      ],
      floorActive: [["100s", true], ["200s", true], ["300s", true]],
      groupNumber: [
        ["Group 1", "Group 2", "Group 3", "Group 4"],
        ["Group 1", "Group 2", "Group 3", "Group 4"],
        ["Group 1", "Group 2", "Group 3", "Group 4"],
        ["Group 1", "Group 2", "Group 3", "Group 4"],
        ["Group 1", "Group 2", "Group 3", "Group 4"],
        ["Group 1", "Group 2", "Group 3", "Group 4"]
      ],
      roomNumber: [
        [101, 102, 103, 104, 105, 106, 107, 108],
        [201, 202, 203, 204, 205, 206, 207, 208],
        [
          300,
          301,
          302,
          303,
          304,
          305,
          306,
          307,
          308,
          309,
          310,
          311,
          312,
          313,
          314,
          315,
          316,
          317,
          318,
          319,
          320,
          321
        ]
      ],
      roomActive: this.$store.getters.getActiveRoom,
      scheduleStatus: this.$store.getters.getScheduleStatus
    };
  },
  methods: {
    changeActiveRoom(num) {
      this.roomActive = num;
      this.$store.dispatch("setActiveRoom", num);
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
