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
const app = initializeApp(firebaseConfig);
    
function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}