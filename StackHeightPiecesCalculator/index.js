let thickness = 0.00;
let packetSize = 0;
let stepSize = 0;
let noOfDiffrentWidths = 0;

$("#input-form").submit(function (e) { 
    e.preventDefault();

    if($("#thickness").val() == "" ||  $("#sizes").val() == "" || $("#packetSize").val() == "" || $("#stepSize").val() == ""){
        alert("Values can't be empty!!!");
        return;
    }

    thickness = $("#thickness").val();
    noOfDiffrentWidths = $("#sizes").val();
    packetSize = $("#packetSize").val();
    stepSize = $("stepSize").val();

    $(".input-height-container").removeAttr("hidden");

    for(let i = 1 ; i<=noOfDiffrentWidths ; i++){
        console.log(i);
        let element = `<div class="height-input" id="${i}">
                <input class="input" placeholder="Enter width"/>
                <input class="input" placeholder="Enter Stack height"/>
            </div>`;

            $("#input-height-form").append(element);
        
    }
    let buttonElement = `<button id="height-submit-button" type="submit">
                                Enter
                        </button>`;
    $("#input-height-form").append(buttonElement);

});

$("#input-height-form").submit(function (e) { 
    e.preventDefault();
    
});