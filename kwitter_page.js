var firebaseConfig = {
      apiKey: "AIzaSyATMDZq3gko-cDvsjBjclu8_fK2pImZ0vE",
      authDomain: "kwitter-chat-463cd.firebaseapp.com",
      databaseURL: "https://kwitter-chat-463cd-default-rtdb.firebaseio.com",
      projectId: "kwitter-chat-463cd",
      storageBucket: "kwitter-chat-463cd.appspot.com",
      messagingSenderId: "382990099175",
      appId: "1:382990099175:web:c55b7f12583fa4f79eb842",
      measurementId: "G-G33X2KFT0S"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
} });  }); }
getData();
