<template>
	<transition name="day">
		<div class="day" v-if="isActive">
			<div class="day-title">
				<div class="day-name">{{ this.dayName }}</div>
				<div class="day-title-separator"></div>
			</div>

			<div class="day-schedule">
				<div class="row">
					<div class="time-cell">
						10:30<br>12:00
					</div>

					<div class="cells-wrapper">
						<div class="cell">
							<div class="left-col">
								<div class="room">108</div>
								<div class="type">lecture</div>
							</div>

							<div class="right-col">
								<div class="name">Discrete Math & Logic</div>
								<div class="organizer">Nikolay Shilov</div>
							</div>
						</div>

						<div class="cell">
							<div class="left-col">
								<div class="room">108</div>
								<div class="type">lecture</div>
							</div>

							<div class="right-col">
								<div class="name">Discrete Math & Logic</div>
								<div class="organizer">Nikolay Shilov</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="time-cell">
						10:30<br>12:00
					</div>

					<div class="cells-wrapper">
						<div class="cell">
							<div class="left-col">
								<div class="room">108</div>
								<div class="type">lecture</div>
							</div>

							<div class="right-col">
								<div class="name">Discrete Math & Logic</div>
								<div class="organizer">Nikolay Shilov</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
  data() {
		return {
			schedule: this.$store.getters.getSchedule
		};
  },
  props: ['dayName', 'isActive']
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main-style.css";
</style>