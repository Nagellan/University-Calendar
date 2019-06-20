<template>
	<main>
		<groups-title 
      :groupNames="presentGroupsNames"
    />

		<day
			v-for="day in presentDaysNames"
			:key="day"
			:dayName="day"
			:timeSlots="getTimeSlots(day)"
			:groupNames="presentGroupsNames"
		/>
	</main>
</template>

<script>
import Vue from "vue";

Vue.component("groups-title", {
	render(h) {
		return h("table", { attrs: { id: "groups-title", cellspacing: 0 } }, [
			h("tr", { class: "row" }, [
				h("td", { class: "time-cell" }),
				...this.groupNames.map(group => h("td", { class: "cell" }, group))
			])
		]);
	},
	props: ["groupNames"]
});

Vue.component("day", {
	render(h) {
		return h("div", { class: "day" }, [
			h("div", [
        h("div", { class: "day-title", attrs: { colspan: this.groupNames.length + 1 } }, [
					h("div", { class: "day-name" }, [ this.dayName ]),
					h("div", { class: "day-title-separator" })
				])
			]),
			h("table", { class: "day-schedule", attrs: { cellspacing: "0" } },
				this.timeSlots.map(timeSlot =>
					h("tr", { class: "row" }, [
						h("td", { class: "time-cell" }, [
							timeSlot.startTime,
							h("br"),
							timeSlot.endTime
						]),
            timeSlot.events.length  // if there is at least 1 event or group
            && timeSlot.events
              .map(event => event.groups)
              .reduce((prev, groups) => prev.concat(groups)).length
							? this.groupNames.map(groupName => {
                  let properEvent = timeSlot.events.filter(event =>
                    event.groups.includes(groupName)
                  )[0];

									return properEvent  // if proper event exists
										? !properEvent.groups.indexOf(groupName)  // if this is a proper group
											? h("td", { 
                          class: "cell", 
                          attrs: { colspan: properEvent.groups.length } 
                        }, [ properEvent.name ])
											: ""
										: h("td", { class: "cell" });
							  })
							: h("td", {
									class: "cell",
									attrs: { colspan: this.groupNames.length }
							  })
					])
				)
			)
		]);
	},
	props: ["dayName", "timeSlots", "groupNames"]
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
				.filter(course => course.isActive)
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
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main-style.css";
</style>