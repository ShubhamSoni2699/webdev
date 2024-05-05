async function getOptimalPieces(errosForWidths,widthArray,inputWidths,copyAnsPieces
    ,err,currentMini,totalMini,noOfPiecesForWidths,noOfDiffrentWidths
    ,currNo){

    if(currNo==noOfDiffrentWidths-1){
        copyAnsPieces[widthArray[currNo]] = err>=0?
        noOfPiecesForWidths[widthArray[currNo]][1]:noOfPiecesForWidths[widthArray[currNo]][0];

        currentMini += err;
        if (Math.abs(currentMini) < Math.abs(totalMini)) {
            ansPieces = copyAnsPieces;
            totalMini = currentMini;
        }
        return;
    }

    let errSum = currentMini + err;
    copyAnsPieces[widthArray[currNo]] = err>=0?
            noOfPiecesForWidths[widthArray[currNo]][1]:noOfPiecesForWidths[widthArray[currNo]][0];
    
    getOptimalPieces(errosForWidths,widthArray,inputWidths,
        copyAnsPieces,errosForWidths[widthArray[currNo + 1]][0],errSum
        ,totalMini,noOfPiecesForWidths,noOfDiffrentWidths,currNo+1);

    getOptimalPieces(errosForWidths,widthArray,inputWidths,
        copyAnsPieces,errosForWidths[widthArray[currNo + 1]][1],errSum
        ,totalMini,noOfPiecesForWidths,noOfDiffrentWidths,currNo+1);
}

let thickn = 0.00;
let packetSize = 0.00;
let stepSize = 0.00;
let noOfDiffrentWidths = 0.00;
let currentMini = 0.00;
let totalMini = 1000.00;

let inputWidths = {};
let noOfPiecesForWidths = {};
let errosForWidths = {};

let ansPieces = {};
let copyAnsPieces = {};

let widthArray = [];


$("#input-form").submit( async function (e) { 
    e.preventDefault();

    if($("#thickness").val() == "" ||  $("#sizes").val() == "" || $("#packetSize").val() == "" || $("#stepSize").val() == ""){
        alert("Values can't be empty!!!");
        return;
    }

    thickn = Number($("#thickness").val());
    noOfDiffrentWidths = Number($("#sizes").val());
    packetSize = Number($("#packetSize").val());
    stepSize = Number($("#stepSize").val());

    $(".input-height-container").removeAttr("hidden");

    for(let i = 1 ; i<=noOfDiffrentWidths ; i++){
        let element = `<div class="height-input" id="${i}">
                <input class="input" id="${i}1" placeholder="Enter width"/>
                <input class="input" id="${i}2" placeholder="Enter Stack height"/>
            </div>`;

            $("#input-height-form").append(element);
        
    }
    let buttonElement = `<button id="height-submit-button" type="submit">
                                Enter
                        </button>`;
    $("#input-height-form").append(buttonElement);

});

$("#input-height-form").submit( async function (e) { 
    e.preventDefault();
    
    for(let i = 1 ; i<=noOfDiffrentWidths ; i++){
        if($(`#${i}1`).val() == "" || $(`#${i}2`).val()=="" ){
            alert("Values can't be empty!!!");
            return;
        }
    }

    for(let i = 1 ; i<=noOfDiffrentWidths ; i++){
        inputWidths[Number($(`#${i}1`).val())] = Number($(`#${i}2`).val());
        widthArray.push(Number($(`#${i}1`).val()));
    }

    for(const property in inputWidths){
        ansPieces[property] = -1;
        copyAnsPieces[property] = -1;
        
        let noOfPieces = Number( (inputWidths[property]) / (thickn * packetSize * stepSize));
        let pieces = [];
        pieces.push(Number(Math.floor(noOfPieces)*packetSize*stepSize));
        pieces.push( Number((Math.floor(noOfPieces) + 1)*packetSize*stepSize) );
        noOfPiecesForWidths[property] = pieces;

        let erros = [];
        erros.push(Number(Math.floor(noOfPieces) - noOfPieces));
        erros.push(Number(Math.floor(noOfPieces) + 1 - noOfPieces));

        errosForWidths[property] = erros;
        
    }

    await getOptimalPieces(errosForWidths,widthArray,inputWidths,
        copyAnsPieces,errosForWidths[widthArray[0]][0],currentMini,totalMini,noOfPiecesForWidths,noOfDiffrentWidths
            ,0);

    await getOptimalPieces(errosForWidths,widthArray,inputWidths,
        copyAnsPieces,errosForWidths[widthArray[0]][1],currentMini,totalMini,noOfPiecesForWidths,noOfDiffrentWidths
            ,0);

    $(".input-height-container").attr("hidden", "hidden");

    $(".output-height-container").removeAttr("hidden");

    for(let i = 0 ; i<noOfDiffrentWidths ; i++){
        let dataElement = `<div class="height-output" id="${i}">
        <input class="input" value="${widthArray[i]}" disabled />
        <input class="input" value="${ansPieces[widthArray[i]]}" disabled/>
        </div>`;
        $("#output-height-form").append(dataElement);
    }

});