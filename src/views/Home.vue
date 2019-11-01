<template>
	<div class="home justify-content-center">
		<h1>Thank you for trying my application!</h1>
		<h4>Hey, that was just an exercise to show my "skills" using Vue + Firebase + bootstrap 4.</h4>
		<p>Follow me on:</p>
		<p><a href="https://www.linkedin.com/in/williamasilva/" target="_blank">LinkedIn</a> | <a href="https://github.com/login" target="_blank">Github</a></p>
		<button class="btn btn-md btn-primary" @click="logout">Logout</button>
	</div>
</template>

<script>

import firebase from 'firebase';
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	methods: {
		logout: function() {
			firebase.auth().signOut().then(() => {
				this.$router.replace('login')
			})
		}
	}
}
</script>
