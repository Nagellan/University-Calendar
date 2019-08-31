<template>
	<transition name="day">
		<div class="day" v-if="this.day.isActive">
			<div class="day-title">
				<div class="day-name">{{ this.day.name }}</div>
				<div class="day-title-separator"></div>
			</div>

			<div class="day-schedule">
				<div
					class="row"
					v-for="timeSlot in todaySchedule"
					:key="timeSlot.startTime"
				>
					<div class="time-cell">
						{{ timeSlot.startTime }}<br>{{ timeSlot.endTime }}
					</div>

					<div class="cells-wrapper">
						<template v-for="group in groups">
							<transition
								name="cell"
								:key="timeSlot.startTime + '-' + group.name"
							>
								<div
									class="cell"
									:key="group.name"
									v-if="group.isActive"
								>
									<div class="left-col">
										<div class="room"> {{ getEventData(timeSlot.events, group.name, "room") }} </div>
										<div class="type"> {{ getEventData(timeSlot.events, group.name, "type") }} </div>
									</div>

									<div class="right-col">
										<div class="name"> {{ getEventData(timeSlot.events, group.name, "name") }} </div>
										<div class="organizer"> {{ getEventData(timeSlot.events, group.name, "organizer") }} </div>
									</div>
								</div>
							</transition>
						</template>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	methods: {
		getEventData: function(events, groupName, dataType) {
			let event = events.filter(event => event.groups.includes(groupName))[0];		
			return event === undefined ? "" : event[dataType];
		}
	},
	computed: {
		todaySchedule: function() {
			return this.schedule
				.filter(day => day.name == this.day.name)
				.map(day => day.timeSlots)[0] || [];
		}
	},
  data() {
		return {
			schedule: this.$store.getters.getSchedule
		};
  },
  props: ['day', 'groups']
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/academic-main-style.css";
</style>