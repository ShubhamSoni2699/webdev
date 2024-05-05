async function getOptimalPieces(errosForWidths,widthArray,inputWidths,copyAnsPieces
    ,err,currentMini,totalMini,noOfPiecesForWidths,noOfDiffrentWidths
    ,currNo){

    if(currNo==noOfDiffrentWidths-1){
        copyAnsPieces[widthArray[currNo]] = err>=0?
        noOfPiecesForWidths[widthArray[currNo]][1]:noOfPiecesForWidths[widthArray[currNo]][0];

        currentMini += err;
        if (abs(currentMini) < abs(totalMini)) {
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

export default getOptimalPieces;