<template>
	<div class="col s12 m8 offset-m2 offset-s0 form">
		<h4 class="form-title center-align">Contacts</h4>
		<div class="input-field adress">
			<i class="material-icons prefix">location_on</i>
			<label for="adress">Adress</label>
			<input type="text" id="adress">
		</div>
		<div class="input-field phone">
			<i class="material-icons prefix">phone_iphone</i>
			<label for="phone">Phone</label>
			<input type="number" id="phone">
		</div>
		<div class="input-field borned-day">
			<i class="material-icons prefix">mail</i>
			<label for="email">Mail</label>
			<input type="email" id="email">
		</div>
		<div class="input-field borned-city">
			<i class="material-icons prefix">web</i>
			<label for="git">Github</label>
			<input type="url" id="git">
		</div>
		<div class="input-field avatar">
			<i class="material-icons prefix">web_asset</i>
			<label for="web">Website</label>
			<input type="url" id="web">
		</div>
		<div class="next right-align">
			<div class="col m6 left-align"><a class="btn waves-effect waves-light" @click.prevent="prevInput"><i class="material-icons left">arrow_back</i>Prev</a></div>
			<div class="col m6 right-align" @click.prevent="submitForm"><router-link to="/select" class="btn waves-effect waves-light vue-green"><i class="material-icons right">arrow_forward</i>Submit</router-link></div>
		</div>

	
	</div>
</template>

<script>
import Service from '../service.js';
	export default{
		methods: {
			submitForm(){
				this.$emit("subm");
			},
			prevInput() {
				this.$emit('prev');
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