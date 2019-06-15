$(document).ready(function() {
    console.log("hello world");
    
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
  console.log(database);
    
    $("#submitAssignmentLog").on("click", function(event) {
        event.preventDefault();
  
        getAssignmentValues();
    })
  
    function getAssignmentValues() {
        
        var taskId = $("#taskIdInput").val();
        var taskName = $("#taskNameInput").val();
        var description = $("#descInput").val();
        var priority = $("#priorityInput").val();
        var devId = $("#devIdAssign").val();
         //var assignmentId = $("#assignmentId_input").val();
        
        
        
  
        var assignObj = {
            // assignId : assignmentId,
            devId : devId,
            taskId : taskId,
            priority : priority,
            taskName : taskName,
            description : description
        }
  
        writeUserData(assignObj);
    };
  
    function writeUserData(assignObj) {
        database.ref().push({
        //   assignId: assignObj.assignId,
          taskId: assignObj.taskId,
          devId : assignObj.devId,
          priority :assignObj.priority,
          taskName : assignObj.taskName,
          description :assignObj. description
  
        });
        console.log("data has probably been sent");
        console.log(assignObj);
  
  
        function clearForm() {
            $("#assignmentEntry").reset(); //This is the part didn't work for me
        }
   }
  });