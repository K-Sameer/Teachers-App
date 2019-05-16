import app from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBnozU7bIQyHY9JQxvk-W3iQuEhDqxFck8",
  authDomain: "teachersapp-2ee85.firebaseapp.com",
  databaseURL: "https://teachersapp-2ee85.firebaseio.com",
  projectId: "teachersapp-2ee85",
  storageBucket: "teachersapp-2ee85.appspot.com",
  messagingSenderId: "131476544607",
  appId: "1:131476544607:web:9b442b8dd3a326e7"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    console.log(this.db)
  }

  teacher = uid => this.db.ref(`teachers/${uid}`);
  teachers = () => this.db.ref('teachers');
}

export default Firebase;
