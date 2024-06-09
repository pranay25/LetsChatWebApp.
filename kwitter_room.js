 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCZnaa7nE7vkJaAtP7Op_IRptgGLL-Xapw",
  authDomain: "letschatwebapp-c35fd.firebaseapp.com",
  databaseURL: "https://letschatwebapp-c35fd-default-rtdb.firebaseio.com",
  projectId: "letschatwebapp-c35fd",
  storageBucket: "letschatwebapp-c35fd.appspot.com",
  messagingSenderId: "902605717576",
  appId: "1:902605717576:web:99a18118f01b2955c3187d",
  measurementId: "G-7CHQFJQYQJ"
 };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function addUser() {
  let user_name = document.getElementById("user_name").value;
  if (user_name.trim() !== "") {
    localStorage.setItem("user_name", user_name);
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  } else {
    alert("Please enter a user name.");
  }
}

function addRoom() {
  let room_name = document.getElementById("add_room").value;
  if (room_name.trim() !== "") {
    firebase.database().ref("/").child(add_room).update({
      purpose: "adding room name"
    });
    localStorage.setItem("add_room", add_room);
    window.location = "kwitter_page.html";
  } else {
    alert("Please enter a room name.");
  }
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
      let childKey = childSnapshot.key;
      let Room_names = childKey;

      console.log("Room Name - " + Room_names);
      let row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'>#" + Room_names + " </div> <hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

window.onload = getData;
