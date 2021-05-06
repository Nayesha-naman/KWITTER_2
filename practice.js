// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAVIeaiHcT13vhSppoainh3kQtcCVEp81Y",
    authDomain: "kwitter-app-6da9c.firebaseapp.com",
    databaseURL: "https://kwitter-app-6da9c.firebaseio.com",
    projectId: "kwitter-app-6da9c",
    storageBucket: "kwitter-app-6da9c.appspot.com",
    messagingSenderId: "747621605116",
    appId: "1:747621605116:web:15da39039ac9ea341bc179",
    measurementId: "G-0C9WEC260L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function adduser() {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"addinduser"
      });
  }