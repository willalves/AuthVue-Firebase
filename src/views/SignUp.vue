<template>
	<div class="container signup-block">
		<div class="row justify-content-center signup-row">
			<div class="content col-4 align-self-center">
				<img class="mb-4" alt="Vue logo" src="../assets/logo.png" width="100" height="100">
				<h1 class="h3 mb-3 font-weight-normal">Create new account</h1>
				<label for="inputEmail" class="sr-only">Email address</label>
				<input
					type="email"
					id="inputEmail"
					class="form-control mb-2"
					placeholder="Email address"
					required
					autofocus
					v-model="email"
				>
				<label for="inputPassword" class="sr-only">Password</label>
				<input
					type="password"
					id="inputPassword"
					class="form-control"
					placeholder="Password"
					required
					v-model="password"
				>
				<label>
					<input type="checkbox" value="remember-me"> Remember me
				</label>
				<div class="btn-login">
					<button class="btn btn-lg btn-primary btn-block" @click="signUp">Create Account</button>
				</div>
				<p class="mt-5 mb-3 text-muted">
					<span>
						or Return to <router-link to="/login">Login.</router-link>
					</span>
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '../assets/scss/signup.scss';
</style>

<script>
import firebase from 'firebase';

export default {
	name: 'sighUp',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		signUp() {
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
				(user) => {
					let b = 1
					if(b==1){
						this.$router.replace('home')
					}else{
						alert(`Welcome, ${{user}}`)
					}
				},
				(err) => {
					alert('Something unexpected happened. ' + err.message)
				}
			);
		},
	},
};
</script>