<template>
	<main id="room-main">
		<div class="cells-title row">
			<div class="time-cell"></div>
			<div class="title-cells-wrapper">
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

		<div class="week-wrapper">
			<div
				class="row"
				v-for="timeSlot in activeRoomSchedule"
				:key="timeSlot.startTime"
			>
				<div class="time-cell">
					{{ timeSlot.startTime }}<br>{{ timeSlot.endTime }}
				</div>

				<div class="cells-wrapper">
					<template v-for="day in daysStatuses">
						<transition
							name="cell"
							:key="timeSlot.startTime + '-' + day.name"
						>
							<div
								class="cell"
								:key="day.name"
								v-if="day.isActive"
							>
							<template v-if="getEventData(timeSlot.events, day.name, 'name') != ''">
								<div class="name-row"> {{ getEventData(timeSlot.events, day.name, "name") }} </div>

								<div class="bottom-row">
										<div class="type-course">
											<div class="type"> {{ getEventData(timeSlot.events, day.name, "type") }} </div>
											<div class="course"> {{ getEventData(timeSlot.events, day.name, "course") }} </div>
										</div>

										<div class="organizer"> {{ getEventData(timeSlot.events, day.name, "organizer") }} </div>
								</div>
							</template>
							</div>
						</transition>
					</template>
				</div>
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
	},
	methods: {
		getEventData: function(events, dayName, dataType) {
			let event = events.filter(event => event.day == dayName)[0];		
			return event === undefined ? "" : event[dataType];
		}
	},
	computed: {
		activeRoomSchedule: function() {
			let activeRoom = this.$store.getters.getActiveRoom;
			return this.$store.getters.getRoomSchedule
				.filter(slot => slot.room == activeRoom)
				.map(slot => slot.timeSlots)[0] ||
				[];
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/css/room-main-style.css";
@import "../assets/css/academic-main-style.css";
</style>