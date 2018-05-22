import Vue from 'vue'

export default new Vue({
	data : {
		input: {
			personal: {
				firstname: 'Roman',
				lastname: 'Chasovitin',
				sex: 'Male',
				dateOfBDay: '09.10.1999',
				cityOfBDay: 'Bishkek',
				avatar: 'https://pp.userapi.com/c637323/v637323130/4a0b5/Adl7q-1-gxE.jpg'
			}
		}
	},
	methods: {
		nextInput(){
			this.$emit("next");
		}
	}
})