function doAjax() {
    //Prepare the parameter value for 'myParam'
    paramValue = document.getElementById("difficultySelector").value;
    console.log(paramValue)
    //The URL to which we will send the request
    var url = 'https://veff213-sudoku.herokuapp.com/api/v1/sudoku';

    //Perform an AJAX POST request to the url, and set the param 'myParam' in the request body to paramValue
    axios.post(url, { difficulty: paramValue })
        .then(function (response) {
            //When successful, print 'Success: ' and the received data
            console.log("Success: ", response.data);
            printBoard(response.data.board.boxes, response.data.board._id);
        })
        .catch(function (error) {
            //When unsuccessful, print the error.
            console.log(error);
        })
        .then(function () {
            // This code is always executed, independent of whether the request succeeds or fails.
            
        })
};

function printBoard(board, sudokuid) {
    var i, n, line, name;
//    document.getElementById("sudokuForm").style.display = "grid"
    for (i=0; i < board.length; i++) {
        for (n=0; n < board[i].length; n++) {
            name = "cell"+i+n
            if (board[i][n] != "."){
                document.getElementById(name).className = "fill";
                document.getElementById(name).value = board[i][n];
                document.getElementById(name).disabled = true;
            } else {
                document.getElementById(name).className = "input_field";
            }
        }
    }
    document.getElementById("sudokuId").innerText = sudokuid
};

function validateBoard(){
    console.log("validate");
};

// defult board easy: [["5","6","4",".",".","3","2",".","1"],["8","7","2",".","1",".","3","9","."],["3","9","1",".",".",".",".",".","5"],["4","2","9","6","5","7","3","1","8"],[".",".","8","2","3","1","9","4","7"],["7","1","3","8","4","9","5","2","6"],[".",".","6",".","3","5","8","4","2"],["4","2","3","7","8","9","1",".","."],[".","5","8","2","6","4","9","3","7"]]
// defult board medium: [["8","7",".",".","4",".","6","2","5"],["4","5",".",".","2",".",".","1","."],["2","1",".","8","5",".",".","9","."],["7","6",".","5",".","4",".","8","."],["9","3","1","8","6","2","5",".","7"],["5","4","8","3",".","1","9","6","2"],["2",".","7","9","5","8","4",".","6",],[".","9","4","6","7","3","2",".","5"],[".",".","5","1",".","4",".",".","."]]
// defult board hard: [["4",".",".","9",".",".",".",".","."][".",".",".",".","4",".",".",".","."],["5","3","9","6",".","1","7",".","4"],[".","9","6",".","4","7",".",".","."],[".","7","8","5",".","2","1","9","6"],["2","5","3","9","1","6","8","4","7"],[".",".","1",".","8","4","2",".","."],[".","8",".",".",".",".",".","5","4"],["4",".","2","3",".","5","1","7","8"]]