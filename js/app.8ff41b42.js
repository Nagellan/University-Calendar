(function(t){function e(e){for(var a,n,c=e[0],o=e[1],u=e[2],d=0,v=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(v.length)v.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,c=1;c<s.length;c++){var o=s[c];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/University-Calendar/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1854:function(t,e,s){t.exports=s.p+"img/menu_icon.70de8160.svg"},"453a":function(t,e,s){"use strict";var a=s("8636"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Home")],1)},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("Header"),s("div",{attrs:{id:"main-container"}},[s("ToolBar"),0==t.scheduleStatus?s("AcademicMain",{staticClass:"fullscreen"}):t._e(),1==t.scheduleStatus?s("RoomMain",{staticClass:"fullscreen"}):t._e()],1)],1)},c=[],o=(s("7f7f"),s("6762"),s("2fdb"),s("c5f6"),s("ee1d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"left-nav-bar"},[a("button",{staticClass:"menu-button",on:{click:function(e){return t.changeStatusToolBar()}}},[a("img",{staticClass:"menu-icon",attrs:{src:s("1854")}})]),a("img",{staticClass:"logo",attrs:{src:s("5acd")}})]),a("div",{staticClass:"right-nav-bar"},[a("div",{staticClass:"schedule-type",on:{click:function(e){return t.activate()}}},[t._v("\n      "+t._s(this.scheduleTypes[t.scheduleStatus])+"\n      "),1==t.scheduleStatus?a("span",{staticClass:"room-number"},[t._v(" "+t._s(t.activeRoom)+" ")]):t._e(),a("div",{staticClass:"sch-drop-down",class:{active:this.dropDownIsActive}},t._l(t.scheduleTypes,(function(e,s){return a("div",{key:e,on:{click:function(e){return t.switchSchType(s)}}},[s!=t.scheduleStatus?[t._v("\n            "+t._s(e)+"\n          ")]:t._e()],2)})),0)]),a("div",{staticClass:"buttons"},[a("button",{staticClass:"full-screen-button",on:{click:t.openFullscreen}},[a("img",{staticClass:"full-screen-icon",attrs:{src:s("6561")}})]),t._m(0)])])])}),u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"profile-button"},[a("a",{attrs:{href:"https://my.university.innopolis.ru/",target:"_blank"}},[a("img",{staticClass:"profile-icon",attrs:{src:s("ab67")}})])])}],l=(s("ac6a"),s("ac4d"),s("8a81"),s("5df3"),s("1c4c"),s("6b54"),s("386d"),s("a481"),s("3b2b"),s("4917"),s("d4ec")),d=s("bee2"),v=function(){function t(){Object(l["a"])(this,t)}return Object(d["a"])(t,[{key:"getCookie",value:function(t){var e=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0}},{key:"setCookie",value:function(t,e){document.cookie=t+"="+e}},{key:"deleteCookie",value:function(t){this.setCookie(t,"",{"max-age":-1})}}]),t}(),m=new v;function f(t,e){var s;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(s=h(t))||e&&t&&"number"===typeof t.length){s&&(t=s);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n=!0,c=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return n=t.done,t},e:function(t){c=!0,r=t},f:function(){try{n||null==s.return||s.return()}finally{if(c)throw r}}}}function h(t,e){if(t){if("string"===typeof t)return y(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,a=new Array(e);s<e;s++)a[s]=t[s];return a}var p={data:function(){return{scheduleStatus:this.$store.getters.getScheduleStatus,scheduleTypes:this.$store.getters.getScheduleTypes,dropDownIsActive:!1}},methods:{openFullscreen:function(){var t,e=document.getElementsByClassName("fullscreen"),s=f(e);try{for(s.s();!(t=s.n()).done;){var a=t.value;a.requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen()}}catch(i){s.e(i)}finally{s.f()}},switchSchType:function(t){this.$store.dispatch("setScheduleStatus",t),this.scheduleStatus=t,m.setCookie("scheduleStatus",t);var e=new URL(window.location.href);e.searchParams.set("schedule",t?"Room":"Academic"),window.history.replaceState("","",e.search)},changeStatusToolBar:function(){this.$store.dispatch("setToolBarStatus",!this.toolbarStatus),m.setCookie("toolbarStatus",this.toolbarStatus)},activate:function(){this.dropDownIsActive=!this.dropDownIsActive}},computed:{activeRoom:function(){return this.$store.getters.getActiveRoom},toolbarStatus:function(){return this.$store.getters.getToolBarStatus}}},S=p,g=(s("82e2"),s("2877")),A=Object(g["a"])(S,o,u,!1,null,"2a1fe8ca",null),_=A.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"toolbar"}},[!0===t.statusToolBar?s("aside",[s("div",{staticClass:"logo"}),s("div",{staticClass:"toolbar-scroll"},[s("div",{staticClass:"item label"},[t._v("Days")]),s("Days"),1===t.scheduleStatus?s("div",{staticClass:"item label"},[t._v("Rooms")]):t._e(),t._l(t.floors,(function(e,a){return 1===t.scheduleStatus?s("div",{staticClass:"list"},[s("div",{staticClass:"dropdown",class:{active:e.isActive}},[s("div",{staticClass:"label-container",on:{click:function(e){return t.changeActiveFloor(a)}}},[s("div",{staticClass:"label2"},[t._v(t._s(e.floor)+"00s")]),s("div",{staticClass:"triangle",class:{active:e.isActive}})]),s("div",{staticClass:"room-container"},t._l(e.rooms,(function(e){return s("div",{class:{activeRoom:t.roomActive===e},on:{click:function(s){return t.changeActiveRoom(e)}}},[t._v(t._s(e))])})),0)])]):t._e()})),0===t.scheduleStatus?s("div",{staticClass:"item label"},[t._v("Courses")]):t._e(),t._l(t.courseStatus,(function(e,a){return 0===t.scheduleStatus?s("div",{staticClass:"list"},[s("div",{staticClass:"dropdown",class:{active:e.isActive}},[s("div",{staticClass:"label-container",on:{click:function(e){return t.changeActiveCourses(a)}}},[s("div",{staticClass:"label2"},[t._v(t._s(e.name))]),s("div",{staticClass:"triangle",class:{active:e.isActive}})]),t._l(e.groups,(function(e,i){return s("div",[s("div",{staticStyle:{display:"flex","flex-direction":"row"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.isActive,expression:"groupItem.isActive"}],staticClass:"option-input checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isActive)?t._i(e.isActive,null)>-1:e.isActive},on:{click:function(e){return t.changeActiveGroups(a,i)},change:function(s){var a=e.isActive,i=s.target,r=!!i.checked;if(Array.isArray(a)){var n=null,c=t._i(a,n);i.checked?c<0&&t.$set(e,"isActive",a.concat([n])):c>-1&&t.$set(e,"isActive",a.slice(0,c).concat(a.slice(c+1)))}else t.$set(e,"isActive",r)}}}),s("div",{staticClass:"group-label"},[t._v("Group "+t._s(e.name))])])])}))],2)]):t._e()}))],2),s("div",{staticClass:"fullscreen-btn",on:{click:t.openFullscreen}},[t._v("Go to fullscreen")])]):t._e()])},w=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weekDays-selector"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.dayStatus[0].isActive,expression:"dayStatus[0].isActive"}],staticClass:"weekday",attrs:{type:"checkbox",id:"weekday-mon"},domProps:{checked:Array.isArray(t.dayStatus[0].isActive)?t._i(t.dayStatus[0].isActive,null)>-1:t.dayStatus[0].isActive},on:{click:function(e){return t.changeStatus(0)},change:function(e){var s=t.dayStatus[0].isActive,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&t.$set(t.dayStatus[0],"isActive",s.concat([r])):n>-1&&t.$set(t.dayStatus[0],"isActive",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.dayStatus[0],"isActive",i)}}}),s("label",{attrs:{for:"weekday-mon"}},[t._v("M")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dayStatus[1].isActive,expression:"dayStatus[1].isActive"}],staticClass:"weekday",attrs:{type:"checkbox",id:"weekday-tue"},domProps:{checked:Array.isArray(t.dayStatus[1].isActive)?t._i(t.dayStatus[1].isActive,null)>-1:t.dayStatus[1].isActive},on:{click:function(e){return t.changeStatus(1)},change:function(e){var s=t.dayStatus[1].isActive,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&t.$set(t.dayStatus[1],"isActive",s.concat([r])):n>-1&&t.$set(t.dayStatus[1],"isActive",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.dayStatus[1],"isActive",i)}}}),s("label",{attrs:{for:"weekday-tue"}},[t._v("T")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dayStatus[2].isActive,expression:"dayStatus[2].isActive"}],staticClass:"weekday",attrs:{type:"checkbox",id:"weekday-wed"},domProps:{checked:Array.isArray(t.dayStatus[2].isActive)?t._i(t.dayStatus[2].isActive,null)>-1:t.dayStatus[2].isActive},on:{click:function(e){return t.changeStatus(2)},change:function(e){var s=t.dayStatus[2].isActive,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&t.$set(t.dayStatus[2],"isActive",s.concat([r])):n>-1&&t.$set(t.dayStatus[2],"isActive",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.dayStatus[2],"isActive",i)}}}),s("label",{attrs:{for:"weekday-wed"}},[t._v("W")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dayStatus[3].isActive,expression:"dayStatus[3].isActive"}],staticClass:"weekday",attrs:{type:"checkbox",id:"weekday-thu"},domProps:{checked:Array.isArray(t.dayStatus[3].isActive)?t._i(t.dayStatus[3].isActive,null)>-1:t.dayStatus[3].isActive},on:{click:function(e){return t.changeStatus(3)},change:function(e){var s=t.dayStatus[3].isActive,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&t.$set(t.dayStatus[3],"isActive",s.concat([r])):n>-1&&t.$set(t.dayStatus[3],"isActive",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.dayStatus[3],"isActive",i)}}}),s("label",{attrs:{for:"weekday-thu"}},[t._v("T")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dayStatus[4].isActive,expression:"dayStatus[4].isActive"}],staticClass:"weekday",attrs:{type:"checkbox",id:"weekday-fri"},domProps:{checked:Array.isArray(t.dayStatus[4].isActive)?t._i(t.dayStatus[4].isActive,null)>-1:t.dayStatus[4].isActive},on:{click:function(e){return t.changeStatus(4)},change:function(e){var s=t.dayStatus[4].isActive,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&t.$set(t.dayStatus[4],"isActive",s.concat([r])):n>-1&&t.$set(t.dayStatus[4],"isActive",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.dayStatus[4],"isActive",i)}}}),s("label",{attrs:{for:"weekday-fri"}},[t._v("F")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dayStatus[5].isActive,expression:"dayStatus[5].isActive"}],staticClass:"weekday",attrs:{type:"checkbox",id:"weekday-sat"},domProps:{checked:Array.isArray(t.dayStatus[5].isActive)?t._i(t.dayStatus[5].isActive,null)>-1:t.dayStatus[5].isActive},on:{click:function(e){return t.changeStatus(5)},change:function(e){var s=t.dayStatus[5].isActive,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&t.$set(t.dayStatus[5],"isActive",s.concat([r])):n>-1&&t.$set(t.dayStatus[5],"isActive",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.dayStatus[5],"isActive",i)}}}),s("label",{attrs:{for:"weekday-sat"}},[t._v("S")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dayStatus[6].isActive,expression:"dayStatus[6].isActive"}],staticClass:"weekday",attrs:{type:"checkbox",id:"weekday-sun"},domProps:{checked:Array.isArray(t.dayStatus[6].isActive)?t._i(t.dayStatus[6].isActive,null)>-1:t.dayStatus[6].isActive},on:{click:function(e){return t.changeStatus(6)},change:function(e){var s=t.dayStatus[6].isActive,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&t.$set(t.dayStatus[6],"isActive",s.concat([r])):n>-1&&t.$set(t.dayStatus[6],"isActive",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.dayStatus[6],"isActive",i)}}}),s("label",{attrs:{for:"weekday-sun"}},[t._v("S")])])},k=[],$={data:function(){return{dayStatus:this.$store.getters.getDaysStatuses}},methods:{changeStatus:function(t){var e=new URL(window.location.href);this.dayStatus[t].isActive=!this.dayStatus[t].isActive,this.$store.dispatch("setDaysStatuses",this.dayStatus),m.setCookie("daysStatuses",JSON.stringify(this.dayStatus));var s=this.dayStatus.reduce((function(t,e){return e.isActive?t+e.name.slice(0,3):t}),"");e.searchParams.set("week",s),window.history.replaceState("","",e.search)}}},T=$,R=(s("d8de"),Object(g["a"])(T,C,k,!1,null,null,null)),x=R.exports;function D(t,e){var s;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(s=O(t))||e&&t&&"number"===typeof t.length){s&&(t=s);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n=!0,c=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return n=t.done,t},e:function(t){c=!0,r=t},f:function(){try{n||null==s.return||s.return()}finally{if(c)throw r}}}}function O(t,e){if(t){if("string"===typeof t)return F(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?F(t,e):void 0}}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,a=new Array(e);s<e;s++)a[s]=t[s];return a}var j={data:function(){return{floors:this.$store.getters.getFloors,roomActive:this.$store.getters.getActiveRoom}},methods:{changeActiveCourses:function(t){var e=this.$store.getters.getCourses;e.splice(t,1,{name:e[t].name,isActive:!e[t].isActive,groups:e[t].groups}),this.$store.dispatch("setCourses",e),m.setCookie("courses",JSON.stringify(e))},changeActiveGroups:function(t,e){var s=this.$store.getters.getCourses;s[t].groups.splice(e,1,{name:s[t].groups[e].name,isActive:!s[t].groups[e].isActive}),this.$store.dispatch("setCourses",s),m.setCookie("courses",JSON.stringify(s))},changeActiveRoom:function(t){this.roomActive=t,this.$store.dispatch("setActiveRoom",t),m.setCookie("roomActive",t);var e=new URL(window.location.href);e.searchParams.set("room",t),window.history.replaceState("","",e.search)},changeActiveFloor:function(t){this.floors.splice(t,1,{floor:this.floors[t].floor,isActive:!this.floors[t].isActive,rooms:this.floors[t].rooms}),m.setCookie("floors",JSON.stringify(this.floors))},openFullscreen:function(){var t,e=document.getElementsByClassName("fullscreen"),s=D(e);try{for(s.s();!(t=s.n()).done;){var a=t.value;a.requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen()}}catch(i){s.e(i)}finally{s.f()}}},computed:{statusToolBar:function(){return this.$store.getters.getToolBarStatus},scheduleStatus:function(){return this.$store.getters.getScheduleStatus},courseStatus:function(){return this.$store.getters.getCourses}},components:{Days:x}},E=j,N=(s("6461"),Object(g["a"])(E,b,w,!1,null,"41fd04f7",null)),P=N.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{attrs:{id:"academic-main"}},[s("div",{staticClass:"cells-title"},[s("div",{staticClass:"row"},[s("div",{staticClass:"time-cell"}),s("div",{staticClass:"title-cells-wrapper"},[t._l(t.groups,(function(e){return[s("transition",{key:e.name,attrs:{name:"cell"}},[e.isActive?s("div",{key:e.name,staticClass:"cell"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t")]):t._e()])]}))],2)])]),s("div",{staticClass:"days-wrapper"},t._l(this.daysStatuses,(function(e){return s("day",{key:e.name,attrs:{day:e,groups:t.groups}})})),1)])},B=[],M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"day"}},[this.day.isActive?s("div",{staticClass:"day"},[s("div",{staticClass:"day-title"},[s("div",{staticClass:"day-name"},[t._v(t._s(this.day.name))]),s("div",{staticClass:"day-title-separator"})]),s("div",{staticClass:"day-schedule"},t._l(t.todaySchedule,(function(e){return s("div",{key:e.startTime,staticClass:"row"},[s("div",{staticClass:"time-cell"},[t._v("\n\t\t\t\t\t"+t._s(e.startTime)),s("br"),t._v(t._s(e.endTime)+"\n\t\t\t\t")]),s("div",{staticClass:"cells-wrapper"},[t._l(t.groups,(function(a){return[s("transition",{key:e.startTime+"-"+a.name,attrs:{name:"cell"}},[a.isActive?s("div",{key:a.name,staticClass:"cell"},[s("div",{staticClass:"left-col"},[s("div",{staticClass:"room"},[t._v(" "+t._s(t.getEventData(e.events,a.name,"room"))+" ")]),s("div",{staticClass:"type"},[t._v(" "+t._s(t.getEventData(e.events,a.name,"type"))+" ")])]),s("div",{staticClass:"right-col"},[s("div",{staticClass:"name"},[t._v(" "+t._s(t.getEventData(e.events,a.name,"name"))+" ")]),s("div",{staticClass:"organizer"},[t._v(" "+t._s(t.getEventData(e.events,a.name,"organizer"))+" ")])])]):t._e()])]}))],2)])})),0)]):t._e()])},q=[],z={methods:{getEventData:function(t,e,s){var a=t.filter((function(t){return t.groups.includes(e)}))[0];return void 0===a?"":a[s]}},computed:{todaySchedule:function(){var t=this;return this.$store.getters.getSchedule.filter((function(e){return e.name==t.day.name})).map((function(t){return t.timeSlots}))[0]||[]}},props:["day","groups"]},U=z,J=(s("cdaa"),Object(g["a"])(U,M,q,!1,null,"8656ee80",null)),H=J.exports,L={computed:{groups:function(){return!this.$store.getters.getCourses[0]||this.$store.getters.getCourses.map((function(t){return t.groups.map((function(e){return{name:t.name+"-"+e.name,isActive:e.isActive}}))})).reduce((function(t,e){return t.concat(e)}))}},data:function(){return{daysStatuses:this.$store.getters.getDaysStatuses}},components:{day:H}},G=L,W=(s("ac33"),Object(g["a"])(G,I,B,!1,null,"7653bed0",null)),V=W.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{attrs:{id:"room-main"}},[s("div",{staticClass:"cells-title row"},[s("div",{staticClass:"time-cell"}),s("div",{staticClass:"title-cells-wrapper"},[t._l(t.daysStatuses,(function(e){return[s("transition",{key:e.name,attrs:{name:"cell"}},[e.isActive?s("div",{key:e.name,staticClass:"cell"},[t._v("\n\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")]):t._e()])]}))],2)]),s("div",{staticClass:"week-wrapper"},t._l(t.activeRoomSchedule,(function(e){return s("div",{key:e.startTime,staticClass:"row"},[s("div",{staticClass:"time-cell"},[t._v("\n\t\t\t\t"+t._s(e.startTime)),s("br"),t._v(t._s(e.endTime)+"\n\t\t\t")]),s("div",{staticClass:"cells-wrapper"},[t._l(t.daysStatuses,(function(a){return[s("transition",{key:e.startTime+"-"+a.name,attrs:{name:"cell"}},[a.isActive?s("div",{key:a.name,staticClass:"cell",style:[t.isNow(a.name,e.startTime,e.endTime)?{boxShadow:"rgba(141, 59, 229, 0.4) 0px 0px 2vh 0px","border-radius":"1.2vh"}:{}]},[""!=t.getEventData(e.events,a.name,"name")?[s("div",{staticClass:"name-row"},[t._v(" "+t._s(t.getEventData(e.events,a.name,"name"))+" ")]),s("div",{staticClass:"bottom-row"},[s("div",{staticClass:"type-course"},[s("div",{staticClass:"type"},[t._v(" "+t._s(t.getEventData(e.events,a.name,"type"))+" ")]),s("div",{staticClass:"course"},[t._v(" "+t._s(t.getEventData(e.events,a.name,"course"))+" ")])]),s("div",{staticClass:"organizer"},[t._v(" "+t._s(t.getEventData(e.events,a.name,"organizer"))+" ")])])]:t._e()],2):t._e()])]}))],2)])})),0)])},Q=[],X={data:function(){return{daysStatuses:this.$store.getters.getDaysStatuses}},methods:{getEventData:function(t,e,s){var a=t.filter((function(t){return t.day==e}))[0];return void 0===a?"":a[s]},isNow:function(t,e,s){var a=new Date,i=a.getHours()+":"+a.getMinutes();return a.getDay()==this.daysStatuses.map((function(t){return t.name})).indexOf(t)+1&&i>=e&&i<=s}},computed:{activeRoomSchedule:function(){var t=this.$store.getters.getActiveRoom;return this.$store.getters.getRoomSchedule.filter((function(e){return e.room==t})).map((function(t){return t.timeSlots}))[0]||[]}}},Y=X,Z=(s("7270"),Object(g["a"])(Y,K,Q,!1,null,"3a51f29c",null)),tt=Z.exports,et={name:"home",components:{Header:_,ToolBar:P,AcademicMain:V,RoomMain:tt},beforeCreate:function(){var t=new URL(window.location.href);this.$store.dispatch("setInitialValue");var e=t.searchParams.get("schedule");if(!e||"Room"!=e&&"Academic"!=e){var s=m.getCookie("scheduleStatus");s&&this.$store.dispatch("setScheduleStatus",+s)}else this.$store.dispatch("setScheduleStatus","Room"==e?1:0);var a=+t.searchParams.get("room");if(a&&!Number.isNaN(a))this.$store.dispatch("setActiveRoom",a);else{var i=m.getCookie("roomActive");i&&this.$store.dispatch("setActiveRoom",+i)}if(t.searchParams.get("week")){var r=t.searchParams.get("week"),n=[{name:"Monday",isActive:!1},{name:"Tuesday",isActive:!1},{name:"Wednesday",isActive:!1},{name:"Thursday",isActive:!1},{name:"Friday",isActive:!1},{name:"Saturday",isActive:!1},{name:"Sunday",isActive:!1}];n.forEach((function(t){r.includes(t.name.slice(0,3))&&(t.isActive=!0)})),this.$store.dispatch("setDaysStatuses",n)}else{var c=m.getCookie("daysStatuses");c&&this.$store.dispatch("setDaysStatuses",JSON.parse(c))}var o=m.getCookie("floors");o&&this.$store.dispatch("setFloors",JSON.parse(o));var u=m.getCookie("toolbarStatus");void 0!==u&&this.$store.dispatch("setToolBarStatus","true"==u)},computed:{scheduleStatus:function(){return this.$store.getters.getScheduleStatus}}},st=et,at=(s("453a"),Object(g["a"])(st,n,c,!1,null,"141e3dcf",null)),it=at.exports,rt={components:{Home:it}},nt=rt,ct=(s("5c0b"),Object(g["a"])(nt,i,r,!1,null,null,null)),ot=ct.exports,ut=s("8c4f");a["a"].use(ut["a"]);var lt=new ut["a"]({mode:"history",base:"/University-Calendar/",routes:[{path:"/",name:"home",component:it}]}),dt=s("2f62"),vt=(s("96cf"),s("1da1")),mt=(s("28a5"),s("f400"),s("bc3a")),ft=s.n(mt),ht=ft.a.create({baseURL:"https://schedule.innopolis.university/",headers:{"Content-Type":"application/json; charset=UTF-8"}}),yt=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],pt=[["09:00",0],["10:35",1],["12:10",2],["14:10",3],["15:45",4],["17:20",5],["18:55",6],["10:30",0],["12:05",1],["13:40",2],["15:40",3],["17:15",4],["18:50",5],["20:25",6]],St={daysStatuses:[{name:"Monday",isActive:!0},{name:"Tuesday",isActive:!0},{name:"Wednesday",isActive:!0},{name:"Thursday",isActive:!1},{name:"Friday",isActive:!1},{name:"Saturday",isActive:!1},{name:"Sunday",isActive:!1}],statusToolBar:!0,roomActive:106,scheduleStatus:0,scheduleTypes:["Academic Schedule","Room Schedule"],courses:[],floors:[{floor:1,isActive:!0,rooms:[101,102,103,104,105,106,107,108,111]},{floor:2,isActive:!0,rooms:[201,202,203,204,205,206,207,208]},{floor:3,isActive:!0,rooms:[300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321]},{floor:4,isActive:!0,rooms:[421,422,425,452]}],schedule:[],roomSchedule:[]},gt={getDaysStatuses:function(t){return t.daysStatuses},getActiveRoom:function(t){return t.roomActive},getScheduleStatus:function(t){return t.scheduleStatus},getScheduleTypes:function(t){return t.scheduleTypes},getCourses:function(t){return t.courses},getFloors:function(t){return t.floors},getSchedule:function(t){return t.schedule},getToolBarStatus:function(t){return t.statusToolBar},getRoomSchedule:function(t){return t.roomSchedule}},At={setDaysStatuses:function(t,e){t.daysStatuses=e},setActiveRoom:function(t,e){t.roomActive=e},setCourses:function(t,e){t.courses=e},setToolBarStatus:function(t,e){t.statusToolBar=e},setScheduleStatus:function(t,e){t.scheduleStatus=e},setInitialRoomSchedule:function(t,e){for(var s=[],a=[],i=new Map(pt),r=new Map,n=-1,c=0;c<e.length;c++)if(r.has(e[c].room)){var o=e[c].startTime.split(" ")[0].split("."),u=new Date(o[2],o[1]-1,o[0]);a[r.get(e[c].room)][i.get(e[c].startTime.split(" ")[1])+1].push({type:e[c].type,day:yt[u.getDay()-1],name:e[c].name,organizer:e[c].organizer,course:e[c].course})}else{n++;var l=e[c].startTime.split(" ")[0].split("."),d=new Date(l[2],l[1]-1,l[0]);r.set(e[c].room,n),a.push([[e[c].room],[],[],[],[],[],[],[]]),a[n][i.get(e[c].startTime.split(" ")[1])+1].push({type:e[c].type,day:yt[d.getDay()-1],name:e[c].name,organizer:e[c].organizer,course:e[c].course})}for(var v=0;v<=n;v++){for(var m=[],f=1;f<=7;f++)m.push({startTime:pt[f-1][0],endTime:pt[f+6][0],events:a[v][f]});s.push({room:a[v][0][0],timeSlots:m})}t.roomSchedule=s},setInitialSchedule:function(t,e){for(var s=new Map(pt),a=[],i=[],r=0;r<7;r++)i.push([[],[],[],[],[],[],[]]);for(var n=0;n<e.length;n++){var c=e[n].startTime.split(" ");c[0]=c[0].split(".");var o=new Date(c[0][2],c[0][1]-1,c[0][0]);i[o.getDay()-1][s.get(c[1])].push({type:e[n].type,room:e[n].room,name:e[n].name,organizer:e[n].organizer,groups:e[n].groups})}for(var u=0;u<7;u++){for(var l=[],d=0;d<7;d++)0!==i[u][d].length&&l.push({startTime:pt[d][0],endTime:pt[d+7][0],events:i[u][d]});a.push({name:yt[u],timeSlots:l})}t.schedule=a},setInitialCourses:function(t,e){var s=[];if(m.getCookie("courses"))s=JSON.parse(m.getCookie("courses"));else for(var a=0;a<e.length;a++){for(var i=[],r=0;r<e[a].groups.length;r++)i.push({name:e[a].groups[r],isActive:0===a});s.push({name:e[a].name,isActive:!0,groups:i})}t.courses=s},setFloors:function(t,e){t.floors=e}},_t={setDaysStatuses:function(){var t=Object(vt["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("setDaysStatuses",s);case 1:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),setActiveRoom:function(t,e){t.commit("setActiveRoom",e)},setCourses:function(t,e){t.commit("setCourses",e)},setToolBarStatus:function(t,e){t.commit("setToolBarStatus",e)},setScheduleStatus:function(t,e){t.commit("setScheduleStatus",e)},setFloors:function(t,e){t.commit("setFloors",e)},setInitialValue:function(){var t=Object(vt["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ht.get("api/course/").then((function(t){e.commit("setInitialCourses",t.data)}));case 2:return t.next=4,ht.get("api/schedule/").then((function(t){e.commit("setInitialSchedule",t.data),e.commit("setInitialRoomSchedule",t.data)}));case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},bt={state:St,getters:gt,mutations:At,actions:_t};a["a"].use(dt["a"]);var wt=new dt["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{dataService:bt}});a["a"].config.productionTip=!1,new a["a"]({router:lt,store:wt,render:function(t){return t(ot)}}).$mount("#app")},"5acd":function(t,e,s){t.exports=s.p+"img/IU_logo.af4ae3ee.png"},"5c0b":function(t,e,s){"use strict";var a=s("e332"),i=s.n(a);i.a},"5e63":function(t,e,s){},6461:function(t,e,s){"use strict";var a=s("5e63"),i=s.n(a);i.a},6561:function(t,e,s){t.exports=s.p+"img/fullscreen_icon.ad97878b.png"},7270:function(t,e,s){"use strict";var a=s("a47e"),i=s.n(a);i.a},"82e2":function(t,e,s){"use strict";var a=s("e848"),i=s.n(a);i.a},8636:function(t,e,s){},"8e16":function(t,e,s){},a47e:function(t,e,s){},aacf:function(t,e,s){},ab67:function(t,e,s){t.exports=s.p+"img/user_icon.341a21d8.png"},ac33:function(t,e,s){"use strict";var a=s("be16"),i=s.n(a);i.a},be16:function(t,e,s){},cdaa:function(t,e,s){"use strict";var a=s("aacf"),i=s.n(a);i.a},d8de:function(t,e,s){"use strict";var a=s("8e16"),i=s.n(a);i.a},e332:function(t,e,s){},e848:function(t,e,s){}});
//# sourceMappingURL=app.8ff41b42.js.map