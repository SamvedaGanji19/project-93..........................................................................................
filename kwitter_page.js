var firebaseConfig = {
      apiKey: "AIzaSyCF0vL12bsG5d4iEZknUgQcXaB-7k0jD60",
      authDomain: "kwitter-fc031.firebaseapp.com",
      databaseURL: "https://kwitter-fc031-default-rtdb.firebaseio.com",
      projectId: "kwitter-fc031",
      storageBucket: "kwitter-fc031.appspot.com",
      messagingSenderId: "1034935428055",
      appId: "1:1034935428055:web:bc9709c262cba8aa6a2192"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name"); 

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Name:user_name,
            Message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
