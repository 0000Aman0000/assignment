
import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
export default defineNuxtPlugin((nuxtApp)=>{
    const firebaseConfig = {
        apiKey: "AIzaSyANrzVGnhNUpCq-0U3Kj61uQ1qteWN2LEY",
        authDomain: "nuxt-auth-1d934.firebaseapp.com",
        projectId: "nuxt-auth-1d934",
        storageBucket: "nuxt-auth-1d934.appspot.com",
        messagingSenderId: "944546140942",
        appId: "1:944546140942:web:3b8fc0dfb9cf9fd6f43d5f",
        measurementId: "G-HJ6BFWVMW1"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      // const analytics = getAnalytics(app);
     
      const auth = getAuth(app);
      const firestore = getFirestore(app);

      nuxtApp.vueApp.provide('auth',auth);
      nuxtApp.provide('auth',auth);
      nuxtApp.vueApp.provide('firestore',firestore)
      nuxtApp.provide('firestore',firestore)
      // console.log(auth);
      // console.log(firestore);
})