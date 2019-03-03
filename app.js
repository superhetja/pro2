function doAjax() {
    //Prepare the parameter value for 'myParam'
    var paramValue = document.forms.selection.difficulty.value;
    console.log(paramValue)
    //The URL to which we will send the request
    var url = 'https://veff213-sudoku.herokuapp.com/api/v1/sudoku';

    //Perform an AJAX POST request to the url, and set the param 'myParam' in the request body to paramValue
    axios.post(url, { difficulty: paramValue })
        .then(function (response) {
            //When successful, print 'Success: ' and the received data
            console.log("Success: ", response.data);
            printBoard(response.data.board.boxes);
        })
        .catch(function (error) {
            //When unsuccessful, print the error.
            console.log(error);
        })
        .then(function () {
            // This code is always executed, independent of whether the request succeeds or fails.
            
        })
};

function printBoard(board) {
    var i, n, line, name;
    for (i=0; i < board.length; i++) {
        for (n=0; n < board[i].length; n++) {
            name = "square"+i+"."+n
            if (board[i][n] != "."){
                document.getElementById(name).className = "fill";
                document.getElementById(name).innerText = board[i][n];
            } else {
                document.getElementById(name).className = "input_field";
                document.getElementById(name).innerText = "x";
            }
            
        }
    }
    //document.getElementById('board').innerText = board
};

// defult board easy: [[],[],[],[],[],[],[],[],[]]
//defult board medium: [[],[],[],[],[],[],[],[],[]]
//defult board hard: [[],[],[],[],[],[],[],[],[]]