
var firebaseConfig = {
    apiKey: "AIzaSyC2v0r57wfjU_0d3_Kwlywcma2W5wWAMh4",
    authDomain: "guess-the-word-game-fe206.firebaseapp.com",
    databaseURL: "https://guess-the-word-game-fe206-default-rtdb.firebaseio.com",
    projectId: "guess-the-word-game-fe206",
    storageBucket: "guess-the-word-game-fe206.appspot.com",
    messagingSenderId: "655672632027",
    appId: "1:655672632027:web:5397a86aed64a95674a2fe",
    measurementId: "G-ZK4SDJ30CS"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
      });
  }