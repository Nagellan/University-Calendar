<template>
	<main>
		<groups-title 
      :groupNames="presentGroupsNames"
    />

		<day
			v-for="day in presentDaysNames"
			:key="day"
			:dayName="day"
		/>
	</main>
</template>

<script>
import Vue from "vue";
import day from "./additional components/day";

Vue.component("groups-title", {
	render(h) {
		return h("div", { attrs: {
				id: "groups-title"
			} }, [
			h("div", { class: "row" }, [
				h("div", { class: "time-cell" }),
				...this.groupNames.map(group => 
					h("div", { class: "cell" }, group)
				)
			])
		]);
	},
	props: ["groupNames"]
});

export default {
	methods: {
		getTimeSlots(dayName) {
			return this.schedule
				.filter(day => day.name == dayName)
				.map(day => day.timeSlots)[0];
		}
	},
	computed: {
		presentDaysNames: function() {
			return this.daysStatuses.filter(day => day.isActive).map(day => day.name);
		},
		presentGroupsNames: function() {
			return this.courses
				.map(course =>
					course.groups
						.filter(group => group.isActive)
						.map(group => course.name + "-" + group.name)
				)
				.reduce((prev, group) => prev.concat(group));
		}
	},
	data() {
		return {
			daysStatuses: this.$store.getters.getDaysStatuses,
			courses: this.$store.getters.getCourses,
			schedule: this.$store.getters.getSchedule
		};
	},
	components: {
		day
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main-style.css";
</style>