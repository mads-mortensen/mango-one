import Vue from 'vue';

var app = new Vue({
  el: '#app',
  data: {
  	message: 'Hello, this is Mango-one'
  },
  mounted() {
  	console.log('Hello from Vue');
  }
})