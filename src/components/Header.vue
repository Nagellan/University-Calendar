<template>
  <header>
  
			<div class="left-nav-bar">
				<div class="menu-circle"></div>
				<img class="menu" src="menu_icon.png" />
				<img class="logo" src="D:\AcademicSchedule\NavBar\image\IU_logo_RGB_2.png" /> 
			</div>
			
			<div class="right-nav-bar">
				<script src="change_schedule.js"></script>
				<div class="academic-schedule">
					<p class="nav-button">Academic Schedule</p>
					<img src="D:\AcademicSchedule\NavBar\image\more_button.png">				
				</div>
				<div class="room-schedule">
					<p class="nav-button">Room Schedule</p>
					<img class="up" src="D:\AcademicSchedule\NavBar\image\more_button.png">				
				</div>
				
				<div class="buttons">
					<div class="full-screen-circle"></div>
					<img class="full-screen" src="D:\AcademicSchedule\NavBar\image\full_screen_button-2.jpg" />
					<div class="profile"><a href="https://my.university.innopolis.ru/" target="_blank">
						<div class="profile-circle"></div>
						<img class="profile" src="D:\AcademicSchedule\NavBar\image\profile-icon.png"/>
					</a></div>
				</div>
			</div>

  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/header-style.css";
</style>
