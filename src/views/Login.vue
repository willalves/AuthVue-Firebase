<template>
	<div class="container login-block">
		<div class="row justify-content-center login-row">
			<div class="login-content col-4 align-self-center ">
				<img class="mb-4" alt="Vue logo" src="../assets/logo.png" width="100" height="100">
				<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
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
					<button class="btn btn-lg btn-primary btn-block" @click="login">Login</button>
				</div>
				<p class="mt-5 mb-3 text-muted">
					Don't you have an account?
					<span>
						<router-link to="/register">Create one</router-link>
					</span>
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '../assets/scss/login.scss';
</style>

<script>
import firebase from 'firebase';

export default {
	name: "login",
	data () {
		return{
			email: '',
			password: ''
		};
	},
	methods: {
		login: function() {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
				(user) => {
					let a = 1
					if(a==1){
						this.$router.replace('home')
					}else{
						alert(`Welcome, ${{user}}`)
					}
				},
				(err) => {
					alert('Unable to login. ' + err.message)
				}
			);
		}
	}
};
</script>