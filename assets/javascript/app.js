//on user input it grabs what the people type 
// it will then append to the list on the top part
// it will store the users input into firebase

  


var config = {
  apiKey: "AIzaSyCV2jEkSS0kPQfmwo2NgDElHNLqp548fPs",
    authDomain: "testproject-9ec70.firebaseapp.com",
    databaseURL: "https://testproject-9ec70.firebaseio.com",
    projectId: "testproject-9ec70",
    storageBucket: "testproject-9ec70.appspot.com"
};



// Initialize Firebase
firebase.initializeApp(config);

var database = firebase.database();

// //on click function 
$("#add-train").on("click", function (event) {
  event.preventDefault();
  
     var trainName= $("#train-input").val().trim();
     var tDestination= $("#destination-input").val().trim();
     var firstTrainTime= $("#firstTT-input").val().trim();
     var tFrequency= $("#frequency-input").val().trim();
 
  var object = {
    name: trainName,
    destination: tDestination,
    trainTime: firstTrainTime,
    frequency: tFrequency,
  }
  
   database.ref().push(object);
  //log the items to the console 
  console.log(object.name);
  console.log(object.destination);
  console.log(object.trainTime);
  console.log(object.frequency);

  //clears the input from the last one 
  $("train-input").val("")
  $("#destination-input").val("")
  $("#firstTT-input").val("")
  $("#frequency-input").val("")



});

// //Firebase event for adding new children  and a row into the html 
database.ref().on("child_added", function (snapshot) {
  console.log(snapshot.val());

  var trainName = snapshot.val().name;
  var tDestination = snapshot.val().destination;
  var firstTrainTime= snapshot.val().trainTime;
  var tFrequency = snapshot.val().frequency;

  var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConverted);
  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);
  var tRemainder = diffTime % tFrequency;
  console.log(tRemainder);
  var tMinutesTillTrain = tFrequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));




 var newRow = $("<tr>").append(
 $("<td>").text(trainName),
 $("<td>").text(tDestination),
 $("<td>").text(tFrequency),
 $("<td>").text(nextTrain),
 $("<td>").text(tMinutesTillTrain)
 )
$("tbody").append(newRow);

});
 
