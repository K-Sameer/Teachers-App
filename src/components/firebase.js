import app from 'firebase/app';
import database from 'firebase/app';

const firebaseConfig = {
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
    app.initializeApp(firebaseConfig);

    this.db = app.database();
  }
}

export default Firebase;