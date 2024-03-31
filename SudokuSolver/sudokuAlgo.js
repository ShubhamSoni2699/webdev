function isRightPlace(row,col,val,board){
    for(let i = 0 ; i<9 ; i++){
        if(board[row][i]==val){
            return false;
        }
        if(board[i][col]==val){
            return false;
        }
        if( board[(3*(Math.floor(row/3))+Math.floor(i/3))][(3*(Math.floor(col/3))+Math.floor(i%3))] ==val ){
            return false;
        }
    }
    return true;
}

function solve(board){
    for(let row = 0 ; row<9 ; row++){
        for(let col = 0 ; col<9 ; col++){
            if(board[row][col]==0){
                for(let val = 1 ; val<=9 ; val++){
                    if(isRightPlace(row,col,val,board)){
                        board[row][col] = val;
                        let isPossible = solve(board);
                        if(isPossible){
                            return true;
                        }else{
                            board[row][col] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

async function sudokuSolver(board){
    solve(board);
    return await board
}

export default sudokuSolver;