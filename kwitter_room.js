
const firebaseConfig = {
      apiKey: "AIzaSyB2tGeAcEGbhRk_SW5wSzC1xFyyjrb5BFI",
      authDomain: "kwitter-3910a.firebaseapp.com",
      databaseURL: "https://kwitter-3910a-default-rtdb.firebaseio.com",
      projectId: "kwitter-3910a",
      storageBucket: "kwitter-3910a.appspot.com",
      messagingSenderId: "794811875118",
      appId: "1:794811875118:web:2f76f7d2c75cd11ed484bf",
      measurementId: "G-JE1FB14EHL"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


    username=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+username+"!";

    function addRoom(){
          Room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(Room_name).update({
                purpose:"adding room_name"

          });
          localStorage.setItem("room_name", Room_name);
          window.location="Kwitter_page.html";

    }
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) 

{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
       row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML += row;
      
      //Start code
      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location="kwitter_page.html";
      
      }
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="kwitter.html"
      }

      //End code
      });});}
getData();
