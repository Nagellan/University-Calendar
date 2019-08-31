<template>
	<main>
		<div class="cells-title">
			<div class="row">
				<div class="time-cell"></div>
				<template v-for="day in daysStatuses">
					<transition
						name="cell"
						:key="day.name"
					>
						<div
							class="cell"
							:key="day.name"
							v-if="day.isActive"
						>
								{{ day.name }}
						</div>
					</transition>
				</template>
			</div>
		</div>


	</main>
</template>

<script>
import Vue from "vue";

export default {
	data() {
		return {
			daysStatuses: this.$store.getters.getDaysStatuses,
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/css/room-main-style.css";
@import "../assets/css/main-style.css";
</style>