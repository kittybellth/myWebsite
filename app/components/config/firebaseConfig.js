import firebase from 'firebase/app';
const app = firebase.initializeApp({ 
    apiKey: "AIzaSyByvbfgipjVdUCzQRuIWeExtXyG6S4rpHI",
    authDomain: "mywebsite-614ec.firebaseapp.com",
    databaseURL: "https://mywebsite-614ec.firebaseio.com",
    projectId: "mywebsite-614ec",
    storageBucket: "mywebsite-614ec.appspot.com",
    messagingSenderId: "899807267201"
});


export default app;