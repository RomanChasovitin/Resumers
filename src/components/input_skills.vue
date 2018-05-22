<template>
	<div class="col s12 m8 offset-m2 offset-s0 form">
		<h4 class="form-title center-align">Skills</h4>
		<div class="input-field specialty">
			<i class="material-icons">skill</i>
			<label for="specialty">Specialty</label>
			<input type="text" id="specialty">
		</div>
		<div class="row">
			<div class="col m6 s12">
				<div class="input-field skill-1">
			<i class="material-icons">skill</i>
			<label for="skill-1">Enter your Skill</label>
			<input type="text" id="skill-1">
 			<p class="range-field">
		    	<input type="range" id="skill-1-range" min="0" max="100" />
		    </p>
		</div>
			</div>
			<div class="col m6 s12">
				<div class="input-field skill-1">
			<i class="material-icons">skill</i>
			<label for="skill-1">Enter your Skill</label>
			<input type="text" id="skill-1">
 			<p class="range-field">
		    	<input type="range" id="skill-1-range" min="0" max="100" />
		    </p>
		</div>
			</div>
		</div>
		<div class="row">
			<div class="col m6 s12">
				<div class="input-field skill-1">
			<i class="material-icons">skill</i>
			<label for="skill-1">Enter your Skill</label>
			<input type="text" id="skill-1">
 			<p class="range-field">
		    	<input type="range" id="skill-1-range" min="0" max="100" />
		    </p>
		</div>
			</div>
			<div class="col m6 s12">
				<div class="input-field skill-1">
			<i class="material-icons">skill</i>
			<label for="skill-1">Enter your Skill</label>
			<input type="text" id="skill-1">
 			<p class="range-field">
		    	<input type="range" id="skill-1-range" min="0" max="100" />
		    </p>
		</div>
			</div>
		</div>

	<div class="next right-align">
			<a class="btn waves-effect waves-light" @click.prevent="nextInput"><i class="material-icons right">arrow_forward</i>Next</a>
		</div>
	</div>
</template>

<script>
export default{
	mounted() {
			var elems_select = document.querySelectorAll('select');
    		var instances_select = M.FormSelect.init(elems_select);
    		var elems_datepicker = document.querySelectorAll('.datepicker');
    		var instances_datepicker = M.Datepicker.init(elems_datepicker);
    		
	},
	methods: {
		nextInput(){
			this.$emit("next");
		}
	},

}	
</script>

<style scoped lang="scss">
	
</style>