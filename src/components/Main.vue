<template>
  <main>
    <groups-title 
      :groupsList="presentGroups"
    />

    <day
      v-for="day in presentDaysStatus"
      :key="day"
      :dayName="day"
    />
  </main>
</template>

<script>
import Vue from "vue";

Vue.component('groups-title', {
  render(h) {
    return h('table', {attrs: {id: 'groups-title'}}, [
      h('tr', 
        this.groupsList.map((group) => h('td', group))
      )
    ]);
  },
  props: [
    'groupsList'
  ]
});

Vue.component('day', {
  render () {
    return (
      <table class="day">
        <tr>
          <td> { this.dayName } </td>
        </tr>
      </table>
    )
  },
  props: [
    'dayName'
  ]
});

export default {
  computed: {
    presentDaysStatus: function () {
      let daysArray = [];

      for (let dayNum in this.daysStatus)
        if (this.daysStatus[dayNum])
          daysArray.push(this.weekDays[dayNum]);

      return daysArray;
    },
    presentGroups: function () {
      let groupsArray = [];

      groupsArray = this.weekSchedule
        .map((day) => day.groups.map((group) => group.name))            // get array of groups lists for each day
        .reduce((prev, day) => prev.concat(day))                        // merge arrays inside the main array
        .filter((group, index, self) => self.indexOf(group) == index);  // remove duplicate groups

      return groupsArray;
    }
  },
  data() {
    return {
      daysStatus: this.$store.getters.getDayStatus,
      weekDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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