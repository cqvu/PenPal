import app from 'firebase/app';//The app variable represents the firebase application.

//We have to import auth and firestore to use the features.
import 'firebase/auth';
import 'firebase/firebase-firestore';

//For firebase config setting, you should use your own application's information.
const config = {
    apiKey: "AIzaSyBRgCwf5N1mz3FtFB5E9szfV7rRS_6w2GE",
    authDomain: "spectra-penpal.firebaseapp.com",
    databaseURL: "https://spectra-penpal.firebaseio.com",
    projectId: "spectra-penpal",
    storageBucket: "spectra-penpal.appspot.com",
    messagingSenderId: "972492506859",
    appId: "1:972492506859:web:f559fd58522d15568160ae"
};

class Firebase {

    constructor() {

        app.initializeApp(config)//Let config information initialize firebase
        //With this.auth and this.db variables we can access auth and firestore
        this.auth = app.auth()
        this.db = app.firestore()
    }

    login(email, pass) {
        //firebase login function
        return this.auth.signInWithEmailAndPassword(email, pass)
    }

    logout() {
        //firebase logout function
        return this.auth.signOut()
    }


    register(email, pass) {
        //firebase register function
        return this.auth.createUserWithEmailAndPassword(email, pass)
    }


    getCurrentEmail() {
        return this.auth.currentUser.email;
    }

}

export default new Firebase()