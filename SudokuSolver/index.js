import sudokuSolver from "./sudokuAlgo.js";
let board = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
let example = [[3,0,6,5,0,8,4,0,0],[5,2,0,0,0,0,0,0,0],[0,8,7,0,0,0,0,3,1],[0,0,3,0,1,0,0,8,0],[9,0,0,8,6,3,0,0,5],[0,5,0,0,9,0,6,0,0],[1,3,0,0,0,0,2,5,0],[0,0,0,0,0,0,0,7,4],[0,0,5,2,0,6,3,0,0]]

$(".box").change( function(e){
    board[Number(e.target.id[0])][Number(e.target.id[1])] = Number(e.target.value);
} );

$(".reset").click( function(){
    let emptyBoard = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
    board = emptyBoard;
    setValue(emptyBoard);
} );


$(".generate").click( async function (){
    let solution =  await sudokuSolver(board);
    setValue(solution)
} );

async function setValue(boardSol){
    for(let row = 0 ; row<9 ; row++){
        for(let col = 0 ; col<9 ; col++){
            document.getElementById(String(row)+String(col)).value = boardSol[row][col];
        }
    }
}