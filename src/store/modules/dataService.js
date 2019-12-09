import axios from "axios";

const AXIOS = axios.create({
  baseURL: "http://10.90.136.15/",
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
});

const weekday = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const keyArray = [
  ["09:00", 0],
  ["10:35", 1],
  ["12:10", 2],
  ["14:10", 3],
  ["15:45", 4],
  ["17:20", 5],
  ["18:55", 6],
  ["10:30", 0],
  ["12:05", 1],
  ["13:40", 2],
  ["15:40", 3],
  ["17:15", 4],
  ["18:50", 5],
  ["20:25", 6]
];

const state = {
  daysStatuses: [
    {
      name: "Monday",
      isActive: true
    },
    {
      name: "Tuesday",
      isActive: true
    },
    {
      name: "Wednesday",
      isActive: true
    },
    {
      name: "Thursday",
      isActive: false
    },
    {
      name: "Friday",
      isActive: false
    },
    {
      name: "Saturday",
      isActive: false
    },
    {
      name: "Sunday",
      isActive: false
    }
  ],
  statusToolBar: true,
  roomActive: 106,
  scheduleStatus: 0,
  scheduleTypes: ["Academic Schedule", "Room Schedule"],
  courses: [],
  floors: [
    {
      floor: 1,
      isActive: true,
      rooms: [101, 102, 103, 104, 105, 106, 107, 108]
    },
    {
      floor: 2,
      isActive: true,
      rooms: [201, 202, 203, 204, 205, 206, 207, 208]
    },
    {
      floor: 3,
      isActive: true,
      rooms: [
        300,
        301,
        302,
        303,
        304,
        305,
        306,
        307,
        308,
        309,
        310,
        311,
        312,
        313,
        314,
        315,
        316,
        317,
        318,
        319,
        320,
        321
      ]
    }
  ],
  schedule: [],
  roomSchedule: []
};

const getters = {
  getDaysStatuses: state => {
    return state.daysStatuses;
  },
  getActiveRoom: state => {
    return state.roomActive;
  },
  getScheduleStatus: state => {
    return state.scheduleStatus;
  },
  getScheduleTypes: state => {
    return state.scheduleTypes;
  },
  getCourses: state => {
    return state.courses;
  },
  getFloors: state => {
    return state.floors;
  },
  getSchedule: state => {
    return state.schedule;
  },
  getToolBarStatus: state => {
    return state.statusToolBar;
  },
  getRoomSchedule: state => {
    return state.roomSchedule;
  }
};

const mutations = {
  setDaysStatuses: (state, payload) => {
    state.daysStatuses = payload;
  },
  setActiveRoom: (state, payload) => {
    state.roomActive = payload;
  },
  setCourses: (state, payload) => {
    state.courses = payload;
  },
  setToolBarStatus: state => {
    state.statusToolBar = !state.statusToolBar;
  },
  setScheduleStatus: (state, payload) => {
    state.scheduleStatus = payload;
  },
  setInitialRoomSchedule: (state, payload) => {
    let roomSchedule = [];
    let events = [];
    let timeMap = new Map(keyArray);
    let myMap = new Map();
    let cnt = -1;
    for (let i = 0; i < payload.length; i++)
      if (!myMap.has(payload[i].room)) {
        cnt++;

        let strDate = payload[i].startTime.split(" ")[0].split(".");
        let date = new Date(strDate[2], strDate[1] - 1, strDate[0]);

        myMap.set(payload[i].room, cnt);
        events.push([[payload[i].room], [], [], [], [], [], [], []]);
        events[cnt][timeMap.get(payload[i].startTime.split(" ")[1]) + 1].push({
          type: payload[i].type,
          day: weekday[date.getDay() - 1],
          name: payload[i].name,
          organizer: payload[i].organizer,
          course: payload[i].course
        });
      } else {
        let strDate = payload[i].startTime.split(" ")[0].split(".");
        let date = new Date(strDate[2], strDate[1] - 1, strDate[0]);
        events[myMap.get(payload[i].room)][
          timeMap.get(payload[i].startTime.split(" ")[1]) + 1
        ].push({
          type: payload[i].type,
          day: weekday[date.getDay() - 1],
          name: payload[i].name,
          organizer: payload[i].organizer,
          course: payload[i].course
        });
      }

    for (let i = 0; i <= cnt; i++) {
      let timeSlots = [];
      for (let j = 1; j <= 7; j++)
        timeSlots.push({
          startTime: keyArray[j - 1][0],
          endTime: keyArray[j + 6][0],
          events: events[i][j]
        });
      roomSchedule.push({
        room: events[i][0][0],
        timeSlots: timeSlots
      });
    }

    state.roomSchedule = roomSchedule;
  },
  setInitialSchedule: (state, payload) => {
    let myMap = new Map(keyArray);
    let schedule = [];
    let arrayTime = [];

    for (let i = 0; i < 7; i++) arrayTime.push([[], [], [], [], [], [], []]);

    for (let i = 0; i < payload.length; i++) {
      let strDate = payload[i].startTime.split(" ");
      strDate[0] = strDate[0].split(".");
      let date = new Date(strDate[0][2], strDate[0][1] - 1, strDate[0][0]);
      arrayTime[date.getDay() - 1][myMap.get(strDate[1])].push({
        type: payload[i].type,
        room: payload[i].room,
        name: payload[i].name,
        organizer: payload[i].organizer,
        groups: payload[i].groups
      });
    }
    for (let i = 0; i < 7; i++) {
      let timeSlots = [];
      for (let j = 0; j < 7; j++)
        if (arrayTime[i][j].length !== 0)
          timeSlots.push({
            startTime: keyArray[j][0],
            endTime: keyArray[j + 7][0],
            events: arrayTime[i][j]
          });
      schedule.push({
        name: weekday[i],
        timeSlots: timeSlots
      });
    }
    state.schedule = schedule;
  },
  setInitialCourses(state, payload) {
    let courses = [];

    for (let i = 0; i < payload.length; i++) {
      let groups = [];
      for (let j = 0; j < payload[i].groups.length; j++)
        groups.push({
          name: payload[i].groups[j],
          isActive: i === 0
        });

      courses.push({
        name: payload[i].name,
        isActive: true,
        groups: groups
      });
    }

    state.courses = courses;
  }
};

const actions = {
  setDaysStatuses: async (context, payload) => {
    context.commit("setDaysStatuses", payload);
  },
  setActiveRoom: (context, payload) => {
    context.commit("setActiveRoom", payload);
  },
  setCourses: (context, payload) => {
    context.commit("setCourses", payload);
  },
  setToolBarStatus: context => {
    context.commit("setToolBarStatus");
  },
  setScheduleStatus: (context, payload) => {
    context.commit("setScheduleStatus", payload);
  },
  setInitialValue: async context => {
    await AXIOS.get("api/course/").then(response => {
      context.commit("setInitialCourses", response.data);
    });
    await AXIOS.get("api/schedule/").then(response => {
      context.commit("setInitialSchedule", response.data);
      context.commit("setInitialRoomSchedule", response.data);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
