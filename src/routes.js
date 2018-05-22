import about from './components/about.vue';
import start from './components/start.vue';
import input from './components/input.vue';
import select from './components/select.vue';
import result from './components/result.vue';
import material from './components/material.vue';

export const routes = [
	{
		path: '/',
		component: start
	},
	{
		path: '/about',
		component: about
	},
	{
		path: '/input',
		component: input
	},
	{
		path: '/select',
		component: select
	},
	{
		path: '/material',
		component: material
	},
	{
		path: '*',
		component: start
	}
]