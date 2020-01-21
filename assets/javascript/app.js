//on user input it grabs what the people type 
// it will then append to the list on the top part
// it will store the users input into firebase

var firebaseConfig = {
    apiKey: "AIzaSyB7mI7wkW0dXeBKJxWnmz5qLumRoZjGD7Q",
    authDomain: "train-schedule-2f0f1.firebaseapp.com",
    databaseURL: "https://train-schedule-2f0f1.firebaseio.com",
    projectId: "train-schedule-2f0f1",
    storageBucket: "train-schedule-2f0f1.appspot.com",
    messagingSenderId: "746622201981",
    appId: "1:746622201981:web:bcc00c108c06481ec58114",
    measurementId: "G-ML0PBHPSH2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var database = firebase.database();

//on click functiin 
$("#add-train").on("click", function() {
    event.preventDefault();
    
        var train = $("#train-input").val().trim();
          var destination = $("#destination-input").val().trim();
          var firstTT = $("#firstTT-input").val().trim();
          var frequency = $("#frequency-input").val().trim();
    
        console.log(train);
        console.log(destination);
        console.log(firstTT);
        console.log(frequency);
        
    
    })