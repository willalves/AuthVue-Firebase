import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDhdO-Se0g4YgeKtCcIzgfcpRhsx-Cm5V8",
    authDomain: "vue-auth-firebase-3ff37.firebaseapp.com",
    databaseURL: "https://vue-auth-firebase-3ff37.firebaseio.com",
    projectId: "vue-auth-firebase-3ff37",
    storageBucket: "",
    messagingSenderId: "286444424912",
    appId: "1:286444424912:web:fd7047b5977cac6a5798d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let app = '';
firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			render: h => h(App)
		}).$mount('#app')
	}
});
