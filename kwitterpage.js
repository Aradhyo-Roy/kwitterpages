var firebaseConfig = {
    apiKey: "AIzaSyAkapWbhtXGTaX0BqNXkBwA_sXI83wq8m0",
    authDomain: "quitter-8ad10.firebaseapp.com",
    databaseURL: "https://quitter-8ad10-default-rtdb.firebaseio.com",
    projectId: "quitter-8ad10",
    storageBucket: "quitter-8ad10.appspot.com",
    messagingSenderId: "944768631579",
    appId: "1:944768631579:web:ff8195426d7f8f2dc809be"
  };
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          Name:user_name,
          msg:msg,
          like:0
    })
}
user_name=localStorage.getItem("user_name");