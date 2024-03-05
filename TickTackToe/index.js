let isGameStarted = true;
let board = [
                ['','',''],
                ['','',''],
                ['','','']
            ];
let winnerPlayer = "Tie";
let count = 0;

// $(".restart").on("click",function(){
//    restart();
// })

if(isGameStarted){
    let click = 0;
    $(".box").one("click", function(){
        count++;
        if(click&1){
            this.textContent = "X";
            let boxNumber = this.id;
            board[boxNumber[0]-1][boxNumber[1]-1] = "X";
        }
        else{
            this.textContent = "O";
            let boxNumber = this.id;
            board[boxNumber[0]-1][boxNumber[1]-1] = "O";
        }
        click++;
        
        if(check(board,winnerPlayer)){
            isGameStarted = false;
            $(".box").off('click');
            let Player = winnerPlayer==='X'?2:1;
            $(".result").text("Player "+Player+" Win the game");
            //$(".winner").text("Player "+Player+" Win the game");
            //$(".winner").show();
            $(".result").show();
            $(".restart").show();
        }

        if(count===9){
            isGameStarted = false;
            $(".box").one('click');
            $(".result").text("Match Tied!!!");
            //$(".winner").text("Match Tied!!!");
            $(".winner").show();
            $(".result").show();
            $(".restart").show();
        }
    })
}



function check(board){
    
    for (let i = 0; i < 3; i++) {
        const a = board[i][0];
        const b = board[i][1];
        const c = board[i][2];

        if (a != '' && a === b && b === c) {
            winnerPlayer = a;
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        const a = board[0][i];
        const b = board[1][i];
        const c = board[2][i];

        if (a != '' && a === b && b === c) {
            winnerPlayer = a;
            return true;
        }
    }

        const a = board[0][0];
        const b = board[1][1];
        const c = board[2][2];
        if (a != '' && a === b && b === c) {
            winnerPlayer = a;
            return true;
        }

    //check for right diagonal
    const d = board[0][2];
    const e = board[1][1];
    const f = board[2][0];

    if (d != '' && d === e && e === f) {
        winnerPlayer = d;
        return true;
    }

    return false;
    
}

function restart(){
    isGameStarted = true;
    $(".result").hide();
    $(".winner").hide();
    $(".restart").hide();
    board = [
                ['','',''],
                ['','',''],
                ['','','']
            ];
    winnerPlayer = "Tie";
    count = 0;
}