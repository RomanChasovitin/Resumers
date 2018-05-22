<template>
	<div class="col s12 m8 offset-m2 offset-s0 form">
		<h4 class="form-title center-align">Personal Info</h4>
		<div class="input-field firstname">
			<i class="material-icons prefix">account_circle</i>
			<label for="firstname">First Name</label>
			<input type="text" id="firstname">
		</div>
		<div class="input-field lastname">
			<i class="material-icons prefix">insert_comment</i>
			<label for="lastname">Last Name</label>
			<input type="text" id="lastname">
		</div>
		<div class="input-field sex">
			<i class="material-icons prefix">face</i>
		    <select id="sex">
		      <option value="" disabled selected>Choose your Sex</option>
		      <option value="1" data-icon="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-male-icon.png">Male</option>
		      <option value="2" data-icon="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-female-icon.png">Female</option>
			</select>
		</div>
		<div class="input-field borned-day">
			<i class="material-icons prefix">date_range</i>
			<label for="born-day">Date of Birthday</label>
			<input type="text" class="datepicker" id="born-day">
		</div>
		<div class="input-field borned-city">
			<i class="material-icons prefix">location_city</i>
			<label for="born-city">City of Birthday</label>
			<input type="text" id="born-city">
		</div>
		<div class="input-field avatar">
			<i class="material-icons prefix">local_see</i>
			<label for="avatar">Avatar Url</label>
			<input type="text" id="avatar">
		</div>
		<div class="next right-align">
			<a class="btn waves-effect waves-light" @click.prevent="nextInput"><i class="material-icons right">arrow_forward</i>Next</a>
		</div>
		
	
	</div>
</template>

<script>
import Service from '../service.js';
	export default{
		methods: {
			nextInput(){
				Service.input.personal.firstname = document.querySelector('#firstname').value;
				Service.input.personal.lastname = document.querySelector('#lastname').value;
				Service.input.personal.sex = this.sexFunc();
				Service.input.personal.dateOfBDay = document.querySelector('#born-day').value;
				Service.input.personal.cityOfBDay = document.querySelector('#born-city').value;
				Service.input.personal.avatar = this.avatarFunc();
				console.log(Service.input.personal);
				this.$emit("next");

			},
			sexFunc(){
				let sex = document.querySelector('#sex').value;
				if( sex == 1 || sex == ''){
					return 'Male';
				}else{
					return 'Female';
				}
			},
			avatarFunc(){
				let url = document.querySelector('#avatar').value;
				if( url == '' ){
					return 'https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
				}else{
					return url;
				}
			}
		},
		mounted() {
			var elems_select = document.querySelectorAll('select');
    		var instances_select = M.FormSelect.init(elems_select);
    		var elems_datepicker = document.querySelectorAll('.datepicker');
    		var instances_datepicker = M.Datepicker.init(elems_datepicker);
		}
	}
</script>

<style scoped lang="scss">
	
</style>