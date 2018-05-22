<template>
	<div class="col s12 m4 form">
		<h6 class="center-align">Personal Info</h6>
		<div class="input-field firstname">
			<i class="material-icons prefix">account_circle</i>
			<label for="firstname">First Name</label>
			<input type="text" id="firstname">
		</div>
		<div class="input-field lastname">
			<i class="material-icons prefix">account_circle</i>
			<label for="lastname">Last Name</label>
			<input type="text" id="lastname">
		</div>
		<div class="input-field sex">
		     <p>
		      <label>
		        <input class="with-gap" name="group1" type="radio" checked />
		        <span>Male</span>
		      </label>
		    </p>
		    <p>
		      <label>
		        <input class="with-gap" name="group1" type="radio" />
		        <span>Female</span>
		      </label>
		    </p>
		</div>
		<div class="input-field borned">

			<p>
				<i class="material-icons">person</i>
				<label>Born</label>
			</p>
			<input type="date" id="born">
		</div>
		<div class="input-field avatar">
			<i class="material-icons">local_see</i>
			<label for="avatar"></label>
			<input type="file" id="avatar">
		</div>
	
	</div>
</template>

<script>
	
</script>

<style scoped lang="scss">
	
</style>