<template>
	<div class="col s12 m8 offset-m2 offset-s0 form">
		<h4 class="form-title center-align">About Info</h4>
		<div class="input-field about-me">
			<i class="material-icons prefix">account_circle</i>
			<textarea id="textarea" class="materialize-textarea"></textarea>
          	<label for="textarea">About me...</label>
		</div>
		<div class="input-field inspiration">
			<i class="material-icons prefix">library_books</i>
		    <select multiple>
		      <option value="" disabled selected>Inspiration</option>
		      <option value="1" data-icon="https://i.pinimg.com/originals/7d/da/38/7dda385ed3724fea700d45a0349d9e77.png">Books</option>
		      <option value="2" data-icon="http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Clapper-icon.png">Movies</option>
		      <option value="3" data-icon="http://www.myiconfinder.com/uploads/iconsets/256-256-5e2a8fe966bf6f56fc29234d1e5817b8.png">Games</option>
			</select>
		</div>
		<div class="input-field inspiration">
			<i class="material-icons prefix">accessible</i>
		    <label for="hobby">My Hobbies</label>
		    <input type="text" id="hobby">
		</div>
		
		<div class="next row">
			<div class="col m6 left-align"><a class="btn waves-effect waves-light" @click.prevent="prevInput"><i class="material-icons left">arrow_back</i>Prev</a></div>
			<div class="col m6 right-align"><a class="btn waves-effect waves-light" @click.prevent="nextInput"><i class="material-icons right">arrow_forward</i>Next</a></div>
			
			
		</div>
		
	
	</div>
</template>

<script>
	export default{
		mounted() {
			var elems = document.querySelectorAll('select');
    		var instances = M.FormSelect.init(elems);
		},
		methods: {
			nextInput() {
				this.$emit('next');
			},
			prevInput() {
				this.$emit('prev');
			}
		}
	}
</script>

<style scoped lang="scss">

</style>