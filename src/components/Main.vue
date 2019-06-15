<template>
  <main>
    <groups-title />
    <day
      v-for= "day in weekSchedule"
      :key="day.name" 
      :dayTitle="day.name"
    />
  </main>
</template>

<script>
import Vue from "vue";

Vue.component('groups-title', {
  render () {
    return (
      <div id="groups-title">Groups title</div>
    )
  }
});

Vue.component('day', {
  render () {
    return (
      <div class="day"> { this.dayTitle } </div>
    )
  },
  props: [
    'dayTitle'
  ]
});

export default {
  data() {
    return {
     weekSchedule: [
      {
        name: "Monday",
        groups: [
          {
            name: "BS1-1",
            timeSlots: [
              {
                startTime: "9:00",
                endTime: "10:30",
                event: {
                  type: "Lecture",
                  room: 108,
                  name: "Discrete Math and Logic",
                  organizer: "Nikolay Shilov"
                }
              },
              {
                startTime: "10:35",
                endTime: "12:05",
                event: {
                  type: "Tutorial",
                  room: 107,
                  name: "Philosophy",
                  organizer: "Joseph Brown"
                }
              },
              {
                startTime: "14:10",
                endTime: "15:40",
                event: {
                  type: "Lab",
                  room: 314,
                  name: "Discrete Math and Logic",
                  organizer: "Rustam Gafarov"
                }
              }
            ]
          },
          {
            name: "BS1-2",
            timeSlots: [
              {
                startTime: "9:00",
                endTime: "10:30",
                event: {
                  type: "Lecture",
                  room: 108,
                  name: "Discrete Math and Logic",
                  organizer: "Nikolay Shilov"
                }
              },
              {
                startTime: "10:35",
                endTime: "12:05",
                event: {
                  type: "Tutorial",
                  room: 107,
                  name: "Philosophy",
                  organizer: "Joseph Brown"
                }
              },
              {
                startTime: "15:45",
                endTime: "17:15",
                event: {
                  type: "Lab",
                  room: 316,
                  name: "Discrete Math and Logic",
                  organizer: "Alexey Karachev"
                }
              }
            ]
          }
        ]
      },
      {
        name: "Tuesday",
        groups: [
          {
            name: "BS1-1",
            timeSlots: [
              {
                startTime: "9:00",
                endTime: "10:30",
                event: {
                  type: "Lecture",
                  room: 108,
                  name: "Discrete Math and Logic",
                  organizer: "Nikolay Shilov"
                }
              },
              {
                startTime: "10:35",
                endTime: "12:05",
                event: {
                  type: "Tutorial",
                  room: 107,
                  name: "Philosophy",
                  organizer: "Joseph Brown"
                }
              },
              {
                startTime: "14:10",
                endTime: "15:40",
                event: {
                  type: "Lab",
                  room: 314,
                  name: "Discrete Math and Logic",
                  organizer: "Rustam Gafarov"
                }
              }
            ]
          },
          {
            name: "BS1-2",
            timeSlots: [
              {
                startTime: "9:00",
                endTime: "10:30",
                event: {
                  type: "Lecture",
                  room: 108,
                  name: "Discrete Math and Logic",
                  organizer: "Nikolay Shilov"
                }
              },
              {
                startTime: "10:35",
                endTime: "12:05",
                event: {
                  type: "Tutorial",
                  room: 107,
                  name: "Philosophy",
                  organizer: "Joseph Brown"
                }
              },
              {
                startTime: "15:45",
                endTime: "17:15",
                event: {
                  type: "Lab",
                  room: 316,
                  name: "Discrete Math and Logic",
                  organizer: "Alexey Karachev"
                }
              }
            ]
          }
        ]
      }
     ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main-style.css";
</style>