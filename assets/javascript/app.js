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