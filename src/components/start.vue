<template>
	<div id="start">
		<div class="start-wrapper">
			<div class="vertical-centered">
				<div class="container center-align">
					<h2 class="green-color"> {{ startContent.title }} </h2>
					<p class="light-color"> {{ startContent.text }} </p>
				</div>
				<div class="buttons">
					<div class="contaner center-align">
						<router-link to="/input" class="btn waves-effect waves-light vue-green">{{ startContent.buildText }}</router-link>
						<router-link to="/about" class="btn waves-effect waves-light vue-blue">{{ startContent.aboutText }}</router-link>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				startContent:{
					title: 'Build your custom resume!',
					text: 'This application will allow you to create your personal resume and save it as a link, html file, pdf or png. Create your own personalized beautifully designed resume and surprise your employer.',
					buildText: 'Build',
					aboutText: 'About'
				} 
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
	
	.start-wrapper{
		height: 100vh;
		padding: 200px 0;
		display: flex;
		background-image: url(https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7de57bad7ca8e4da0c599bc9f50f885&auto=format&fit=crop&w=1050&q=80);
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
	.buttons{
		margin: 40px 0;
	}

</style>