<template>
	<div class="select">
		<div class="select-wrapper">
			<div class="container">
				<div class="row">
					<div class="col s6 m2 z-depth-3 single-item material" @click="goTo('material')">
						<span>Material Design</span>
					</div>
					<div class="col s6 m2 offset-m1 z-depth-2 single-item flat">
						<span>Flat Design</span>
					</div>
					<div class="col s6 m2 offset-m1 z-depth-2 single-item minimalist ">
						<span>Minimal Design</span>
					</div>
					<div class="col s6 m2 offset-m1 z-depth-2 single-item colorfy ">
						<span>Colorly Design</span>
					</div>
				</div>
				<div class="row">
					<div class="col s6 m2 offset-m1 z-depth-2 single-item geometry ">
						<span>Geometry Design</span>
					</div>
					<div class="col s6 m2 offset-m1 z-depth-2 single-item hong-kong ">
						<span>Honk-Kong Design</span>
					</div>
					<div class="col s6 m2 offset-m1 z-depth-2 single-item new-hope ">
						<span>New Hope Design</span>
					</div>
					<div class="col s6 m2 offset-m1 z-depth-2 single-item atom ">
						<span>Atom</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods: {
			goTo(id) {
				this.$router.push(id);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
	.select{
		width: 100%;
		height: 100vh;
		background-size: 100% 100%;
		background-position: 0 0;
		background-image: url(/dist/bg.jpg);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		position: relative;
		&:before{
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(38,50,56, .55);
		}
	}
	.single-item{
		border-radius: 5px;
		padding: 0;
		width: 100px;
		height: 240px;
		background-size: cover;

		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		position: relative;
		cursor: pointer;
		transition: all .3s ease;
		z-index: 1;
		color: $light;
		&:hover{
			color: $light;
			&:before{
				background-color: rgba(38, 50, 56, .15);
			}
			span{
				background-color: rgba(38,50,56, .85);
			}
		}
		&:before{
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(38, 50, 56, .8);
			transition: all .3s ease;
			z-index: -1;
			filter: blur(0);
		}
		span{
			
			width: 100%;
			padding: 10px 0;
			transition: all .3s ease;
		}
		&.material{
			background-image: url(/dist/material-bg.jpg);
			background-position: 50% 50%;
			background-size: 120% 110%;
		}
		&.flat{
			background-image: url(/dist/flat-bg.jpg);
		}
		&.minimalist{
			background-image: url(/dist/minimalist-bg.jpg);
		}
		&.colorfy{
			background-image: url(/dist/colorfy-bg.jpg);
			background-position: 20% 75%;
			background-size: 120% 120%;
		}
		&.geometry{
			background-image: url(/dist/geometry-bg.jpg);
			background-position: 100% 0;
		}
		&.hong-kong{
			background-image: url(/dist/hong-bg.jpg);
			background-position: center;
		}
		&.new-hope{
			background-image: url(/dist/sw-bg.jpg);
			background-position: center;
		}
		&.atom{
			background-image: url(/dist/atom-bg.jpg);
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
		
		
	}
	
</style>