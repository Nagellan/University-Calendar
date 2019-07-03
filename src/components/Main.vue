<template>
	<main>
		<div id="groups-title">
			<div class="row">
				<div class="time-cell"></div>
				<div
					class="cell"
					v-for="group in groups"
					:key="group.name"
					:style="[group.isActive ? {'flex-grow': 1} : {'border': 0}]"
				>
					{{ group.name }}
				</div>
			</div>
		</div>

		<day
			v-for="day in this.daysStatuses"
			:key="day.name"
			:dayName="day.name"
			:style="[day.isActive ? {'max-height': '100vh'} : '']"
		/>
	</main>
</template>

<script>
import Vue from "vue";
import day from "./additional components/day";

export default {
	computed: {
		groups: function() {
			return this.courses
				.map(course =>
					course.groups
						.map(group => {
							return {
								name: course.name + "-" + group.name,
								isActive: group.isActive
							};
						})
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