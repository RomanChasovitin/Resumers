<template>
	<div class="input">
		<div class="container center-align blue-color">
			<h2 class="green-color">DATA</h2>
		</div>
		<div class="container">
			<div class="row">
				
					<transition name="input" mode="out-in">
						<input-person v-if="state == 'person'" @next="goNext('about')"></input-person>
						<input-about v-else-if="state == 'about'"  @prev="goPrev('person')" @next="goNext('contacts')"></input-about>
						<!-- <input-skills v-else-if="state == 'skills'" @next="goNext('contacts')"></input-skills> -->
						<input-contacts v-else-if="state == 'contacts'" @prev="goPrev('about')"></input-contacts>
					</transition>	
					<!-- <input-edu v-else-if="state == 'edu'"></input-edu> -->
					
				
			</div>
			
		</div>
		
	</div>
</template>

<script>
import person from './input_person.vue';
import contacts from './input_contacts.vue';
import skills from './input_skills.vue';
import edu from './input_education.vue';
import about from './input_about.vue';
import Service from '../service.js';

	export default{
		data(){
			return{
				resumeData: {
					firstname: "",
					lastname: "",
					born: ""
				},
				state: 'person',

			}
		},
		mounted() {
			var elems = document.querySelectorAll('select');
    		var instances = M.FormSelect.init(elems);
		},
		methods: {
			goNext(id) {
				this.state = id;
			},
			goPrev(id){
				this.state = id;
			}
		},
		components: {
			'input-person': person,
			'input-contacts' : contacts,
			'input-skills' : skills,
			'input-edu' : edu,
			'input-about' : about
		}
	}
</script>

<style lang="scss">
	@import '../assets/scss/vars.scss';
	body
	.form{
		input, label, textarea{
			color: $light;
			
		}
		i{
			color: #fff;
		}
	}
	h2{
		margin: 0;
		padding: 30px 0;
	}
	.input{
		height: 100vh;
		background-image: url(https://images.unsplash.com/photo-1520931674431-de5b4b2cc562?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf892a06a8141d8d0823c4b4c6cce613&auto=format&fit=crop&w=1050&q=80);
		background-size: cover;
		position: relative;
		z-index: 1;
		&:before{
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			/* background-color: rgba(38, 50, 56, .7); */
			background-color: rgba(66, 66, 66, .75);
			z-index: -1;
		}
	}
	.form-title{
		color: $light;
	}

	.input-enter-active, .input-leave-active {
	  transition: opacity 1s;
	}
	.input-enter{
		opacity: 0;
	} 
	.input-leave{
		opacity: 0;
	}
</style>