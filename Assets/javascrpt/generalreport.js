$(document).ready(function() {

  var firebaseConfig = {
      apiKey: "AIzaSyD1h4QrWTz6J0X3SJDa0kB69g3atX17PmU",
      authDomain: "proodosassignmenttracking.firebaseapp.com",
      databaseURL: "https://proodosassignmenttracking.firebaseio.com",
      projectId: "proodosassignmenttracking",
      storageBucket: "proodosassignmenttracking.appspot.com",
      messagingSenderId: "656213454825",
      appId: "1:656213454825:web:e27e1d37f58fad37"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    var database = firebase.database();

    database.ref().on("value", function(snapshot){
      console.log('firebase', snapshot.val());


// Another Form of ForLoop
// var person = {fname:"John", lname:"Doe", age:25}; 

// var text = "";
// var x;
// for (x in person) {
//   text += person[x] + " ";
// }

      for(assignment in snapshot.val()){
          console.log('assignment: ', snapshot.val()[assignment]);
          var assignmentObject = snapshot.val()[assignment];

          var tableRow = $("<tr>");

          var tableAssignId = $("<td>");
          tableAssignId.text(assignmentObject.taskId);
          tableRow.append(tableAssignId);
          
          var tableTaskName = $("<td>");
          tableTaskName.text(assignmentObject.taskName);
          tableRow.append(tableTaskName);

          var tableDevId = $("<td>");
          tableDevId.text(assignmentObject.devId);
          tableRow.append(tableDevId);

          var tableDescription = $("<td>");
          tableDescription.text(assignmentObject.description);
          tableRow.append(tableDescription);

          var tablePriority = $("<td>");
          tablePriority.text(assignmentObject.priority);
          tableRow.append(tablePriority);

          $("tbody").append(tableRow);
      }
    })

});