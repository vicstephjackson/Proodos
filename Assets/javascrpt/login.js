var firebaseConfig = {
    apiKey: "AIzaSyCA53rTh8q7XMNijpBqmkGXKaADBVqV0Qs",
    authDomain: "project1-cb6a4.firebaseapp.com",
    databaseURL: "https://project1-cb6a4.firebaseio.com",
    projectId: "project1-cb6a4",
    storageBucket: "",
    messagingSenderId: "648771138120",
    appId: "1:648771138120:web:cd2b4f20afa3f6fd"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log('dsacsd');


firebase.auth().onAuthStateChanged(function(user){
    console.log("auth works")
    console.log(user);
    if (user){
    //user is signed in.
    document.getElementById('userDiv').style.display = "block";
    document.getElementById('loginDiv').style.display = "none";
    window.location.href = ("generalreport.html"); 
}
else {
    document.getElementById('userDiv').style.display = 'none';
    document.getElementById('loginDiv').style.display = 'block';
}
});

function login(event){
    
    
    event.preventDefault();
    var userEmail = document.getElementById('userName').value;
    var userPass= document.getElementById('password').value;

    console.log('login function')


firebase.auth().signInWithEmailAndPassword(userEmail,userPass).catch(function(errorMessage){

//Handle Error Here

var errorCode = error.code;
var errorMessage = error.message;

window.alert("Error : + errorMessage")

});
}

console.log("connected");
$("#submit").on('click', login);
firebase.auth().signOut()