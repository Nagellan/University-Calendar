<template>
  <aside>
    <div class="item label">Days</div>
    <Days />
    <div class="item label">Rooms</div>
    <div class="list">
      <div class="dropdown" v-bind:class="{ active: firstActive }">
        <div class="label-container" v-on:click="firstActive = !firstActive">
          <div class="labelv2">100s</div>
          <div class="triangle" v-bind:class="{ active: firstActive }"></div>
        </div>
        <div class="room-container">
          <div
            v-for="num in roomNumber[0]"
            v-bind:class="{ activeRoom: roomActive === num }"
            v-on:click="roomActive = num"
          >
            {{ num }}
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="dropdown" v-bind:class="{ active: secondActive }">
        <div class="label-container" v-on:click="secondActive = !secondActive">
          <div class="labelv2">200s</div>
          <div class="triangle" v-bind:class="{ active: secondActive }"></div>
        </div>
        <div class="room-container">
          <div
            v-for="num in roomNumber[1]"
            v-bind:class="{ activeRoom: roomActive === num }"
            v-on:click="roomActive = num"
          >
            {{ num }}
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="dropdown" v-bind:class="{ active: thirdActive }">
        <div class="label-container" v-on:click="thirdActive = !thirdActive">
          <div class="labelv2">300s</div>
          <div class="triangle" v-bind:class="{ active: thirdActive }"></div>
        </div>
        <div class="room-container">
          <div
            v-for="num in roomNumber[2]"
            v-bind:class="{ activeRoom: roomActive === num }"
            v-on:click="roomActive = num"
          >
            {{ num }}
          </div>
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
      firstActive: true,
      secondActive: true,
      thirdActive: true,
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
      roomActive: 320
    };
  },
  components: {
    Days
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/toolbar-style.css";
</style>
