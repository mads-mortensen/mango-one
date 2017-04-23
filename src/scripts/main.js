import Vue from 'vue';
import exampleComponent from './components/exampleComponent.vue';

new Vue({
	el: '#app',
	components: { exampleComponent },
	data: {
		title: 'Hello,',
		subtitle: 'This is Mango-one'
	}
});
