var firebaseConfig = {
    apiKey: "AIzaSyDm9ihefefxVF_7XhFM6ycIk1d4DQ0wjUs",
    authDomain: "kwitter-project-e23cb.firebaseapp.com",
    projectId: "kwitter-project-e23cb",
    storageBucket: "kwitter-project-e23cb.appspot.com",
    messagingSenderId: "540460517133",
    appId: "1:540460517133:web:cae2b3ecc26cb93d409244",
    measurementId: "G-ZC1MY3FMWK"
  };

  firebase.initializeApp("firebaseConfig");

 user_name=localStorage.getItem("user_name");

 document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

 function addroom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

  function adduser()
  {
     username=document.getElementById("user_name").value;
     firebase.database().ref("/").child(username).update({
         purpose:"adding user name"
     });
  }