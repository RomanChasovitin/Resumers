import start from './components/start.vue';
import input from './components/input.vue';
import select from './components/select.vue';
import result from './components/result.vue';
import person from './components/input_person.vue';
import contacts from './components/input_contacts.vue';
import skills from './components/input_skills.vue';
import edu from './components/input_education.vue';
import about from './components/input_about.vue';

export const routes = [
	{
		path: '/',
		component: start
	},
	{
		path: '/input',
		component: input,
		children: [
		{
			path: 'person',
			component: person
		},
		{
			path: 'about',
			component: about
		},
		{
			path: 'skills',
			component: skills
		},
		{
			path: 'contacts',
			component: contacts
		},
		]
	},
	
	{
		path: '/select',
		component: select
	},
	{
		path: '/result',
		component: result
	},
	{
		path: '*',
		component: start
	}
]