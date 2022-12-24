var firebaseConfig = {
      apiKey: "AIzaSyBOqgxrd-tObLl7jPzOyZKSGIu-9-Tarik",
  authDomain: "kwitter-app21e.firebaseapp.com",
  databaseURL: "https://kwitter-app21e-default-rtdb.firebaseio.com",
  projectId: "kwitter-app21e",
  storageBucket: "kwitter-app21e.appspot.com",
  messagingSenderId: "249616929117",
  appId: "1:249616929117:web:7751d6654f4010aa40d8b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
