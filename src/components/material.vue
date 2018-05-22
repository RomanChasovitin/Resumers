<template>
	<div class="result-material">
		<div class="row">
			<div class="col m2">
				<div class="avatar" v-bind:style="avatarObj">
					
				</div>
				<div class="contact">
					<li><i></i><span>{{ input.personal.firstname }}</span></li>
					<li><i></i><span></span></li>
					<li><i></i><span></span></li>
					<li><i></i><span></span></li>
					<li><i></i><span></span></li>
					<li><i></i><span></span></li>
				</div>
			</div>
			<div class="col m5"></div>
		</div>
	</div>
</template>

<script>
	import Service from '../service.js';
	export default{
		data(){
			return{
				input: Service.input,
				avatarObj: {}
			}
		},
		mounted(){
			this.avatarObj = {
				backgroundImage: `url(${this.input.personal.avatar})`
			}
			console.log(this.input.personal);
		}
	}
</script>

<style lang="scss" scoped>
	.result-material{
		width: 100%;
		height: 100vh;
		background-color: #212121;
	}
	.col{
		padding: 0;
	}
	.avatar{
		width: 100%;
		height: 250px;
		background-size: 100%;
		background-repeat: no-repeat;
	}
	li{
		list-style-type: none;
	}
</style>