<template>
  <main>
    <groups-title 
      :groupNames="presentGroupsNames"
    />

    <day
      v-for="day in presentDaysNames"
      :key="day"
      :dayName="day"
      :events="getEvents(day)"
    />
  </main>
</template>

<script>
import Vue from "vue";

Vue.component('groups-title', {
  render(h) {
    return h('table', {attrs: {id: 'groups-title', cellspacing: 0}}, [
      h('tr', {class: "row"}, [
        h('td', {class: "time-cell"}),
        ...this.groupNames.map((group) => h('td', {class: 'cell'}, group))
      ])
    ]);
  },
  props: [
    'groupNames'
  ]
});

Vue.component('day', {
  render (h) {
    return h('table', {class: "day", attrs: {cellspacing: "0"}}, [
      h('tr', [
        h('td', {class: "day-title", attrs: {colspan: "99"}}, [
          this.dayName,
          h('div', {class: "day-title-separator"})
        ])
      ]),
      h('tr', {class: "row"}, [
        h('td', {class: "time-cell"}),
        h('td', {class: "cell"}, [ this.dayName ])
      ])
    ]);
  },
  props: [
    'dayName',
    'events'
  ]
});

export default {
  methods: {
    getEvents(dayName) {
      return this.schedule
              .filter((day) => day.name == dayName)
              .map((day) => day.timeSlots);
    }
  },
  computed: {
    presentDaysNames: function () {
      return this.daysStatuses
              .filter((day) => day.isActive)
              .map((day) => day.name);
    },
    presentGroupsNames: function () {
      return this.courses
              .filter((course) => course.isActive)
              .map((course) => course.groups
                                .filter((group) => group.isActive)
                                .map((group) => course.name + '-' + group.name))
              .reduce((prev, group) => prev.concat(group));
    }
  },
  data() {
    return {
      daysStatuses: this.$store.getters.getDaysStatuses,
      courses: this.$store.getters.getCourses,
      schedule: this.$store.getters.getSchedule
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main-style.css";
</style>