
 var firebaseConfig = {
    apiKey: "AIzaSyDRXnMyMlBOtYeSSDNYnlNNCEupDtxix1c",
    authDomain: "practise-thingy.firebaseapp.com",
    databaseURL: "https://practise-thingy-default-rtdb.firebaseio.com",
    projectId: "practise-thingy",
    storageBucket: "practise-thingy.appspot.com",
    messagingSenderId: "683308687687",
    appId: "1:683308687687:web:46bf00e51c2c6c31e52c62",
    measurementId: "G-0JJD89WGPZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }