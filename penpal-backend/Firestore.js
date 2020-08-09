import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBRgCwf5N1mz3FtFB5E9szfV7rRS_6w2GE",
    authDomain: "spectra-penpal.firebaseapp.com",
    databaseURL: "https://spectra-penpal.firebaseio.com",
    projectId: "spectra-penpal",
    storageBucket: "spectra-penpal.appspot.com",
    messagingSenderId: "972492506859",
    appId: "1:972492506859:web:f559fd58522d15568160ae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;