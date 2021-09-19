import firebase from "firebase"
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAm92eB20Jaaw5BaPTQVqVOB67P06cWU2w",
    authDomain: "tarefas-df840.firebaseapp.com",
    projectId: "tarefas-df840",
    storageBucket: "tarefas-df840.appspot.com",
    messagingSenderId: "834243944376",
    appId: "1:834243944376:web:5bec568d5a38f39dae794d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore()
export default firebase