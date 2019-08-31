<template>
	<main>
		<div class="cells-title">
			<div class="row">
				<div class="time-cell"></div>
				<template v-for="group in groups">
					<transition
						name="cell"
						:key="group.name"
					>
						<div
							class="cell"
							:key="group.name"
							v-if="group.isActive"
						>
								{{ group.name }}
						</div>
					</transition>
				</template>
			</div>
		</div>

		<day
			v-for="day in this.daysStatuses"
			:key="day.name"
			:day="day"
			:groups="groups"
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