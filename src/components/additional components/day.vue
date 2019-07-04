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
					v-for="timeSlot in currentDaySchedule"
					:key="timeSlot.startTime"
				>
					<div class="time-cell">
						{{ timeSlot.startTime }}
						<br>
						{{ timeSlot.endTime }}
					</div>

					<div class="cells-wrapper">
						<template v-for="group in groups">
							<transition
								name="group"
								:key="timeSlot.startTime + '-' + group.name"
							>
								<div
									class="cell"
									:key="group.name"
									v-if="group.isActive"
								>
									<template v-if="eventExists(timeSlot.events, group.name)">
										<div class="left-col">
											<div class="room"> {{ getEventRoom(timeSlot.events, group.name) }} </div>
											<div class="type"> {{ getEventType(timeSlot.events, group.name) }} </div>
										</div>

										<div class="right-col">
											<div class="name"> {{ getEventName(timeSlot.events, group.name) }} </div>
											<div class="organizer"> {{ getEventOrganizer(timeSlot.events, group.name) }} </div>
										</div>
									</template>
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
		eventExists(events, groupName) {
			let event = events.filter(event => event.groups.includes(groupName))[0];
			return event !== undefined;
		},
		getEventRoom(events, groupName) {
			let event = events.filter(event => event.groups.includes(groupName))[0];
			return event.room;
		},
		getEventType(events, groupName) {
			let event = events.filter(event => event.groups.includes(groupName))[0];
			return event.type;
		},
		getEventName(events, groupName) {
			let event = events.filter(event => event.groups.includes(groupName))[0];
			return event.name;
		},
		getEventOrganizer(events, groupName) {
			let event = events.filter(event => event.groups.includes(groupName))[0];
			return event.organizer;
		}
	},
	computed: {
		currentDaySchedule: function() {			
			return this.schedule
				.filter(day => day.name == this.day.name)
				.map(day => day.timeSlots)[0];
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
@import "../../assets/css/main-style.css";
</style>