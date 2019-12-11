<template>
	<main id="academic-main">
		<div class="cells-title">
			<div class="row">
				<div class="time-cell"></div>

				<div class="title-cells-wrapper">
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
		</div>

		<div class="days-wrapper">
			<day
				v-for="day in this.daysStatuses"
				:key="day.name"
				:day="day"
				:groups="groups"
			/>
		</div>
	</main>
</template>

<script>
import Vue from "vue";
import day from "./additional components/day";

export default {
	computed: {
		groups: function() {
			return this.$store.getters.getCourses
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
		};
	},
	components: {
		day
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/css/academic-main-style.css";
</style>