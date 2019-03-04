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

// defult board easy: [[],[],[],[],[],[],[],[],[]]
// defult board medium: [[],[],[],[],[],[],[],[],[]]
// defult board hard: [[],[],[],[],[],[],[],[],[]]