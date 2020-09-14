let cells = document.querySelectorAll('.row > div') //allows board to be used and clicks tracked
let clickCount = 0;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
    // let threeInARow = [
    //     [cells[0], cells[1], cells[2]],
    //     [cells[3], cells[4], cells[5]],
    //     [cells[6], cells[7], cells[8]],
    //     [cells[0], cells[3], cells[6]],
    //     [cells[1], cells[4], cells[7]],
    //     [cells[2], cells[5], cells[8]],
    //     [cells[0], cells[4], cells[8]],
    //     [cells[2], cells[4], cells[6]]];
    // for (let W = 0; W < threeInARow.length; W++) {
    //     threeInARow[W].addEventListener (winGame)
}




function cellClicked(event) {
    event.stopPropagation();
    clickCount++;
    if (event.target.textContent == '') {
        if (clickCount % 2 == 0) {
            event.target.textContent = "O"
        } else { event.target.textContent = "X" };



        //  if (function winGame([threeInARow,[W].textContent] = "X") {
        //checkForWin = "X" ||

        if (
            ((cells[0].textContent == "X") && (cells[1].textContent == "X") && (cells[2].textContent == "X")) ||
                ((cells[3].textContent == "X") && (cells[4].textContent == "X") && (cells[5].textContent == "X")) ||
                ((cells[6].textContent == "X") && (cells[7].textContent == "X") && (cells[8].textContent == "X")) ||
                ((cells[0].textContent == "X") && (cells[3].textContent == "X") && (cells[6].textContent == "X")) ||
                ((cells[1].textContent == "X") && (cells[4].textContent == "X") && (cells[7].textContent == "X")) ||
                ((cells[2].textContent == "X") && (cells[5].textContent == "X") && (cells[8].textContent == "X")) ||
                ((cells[0].textContent == "X") && (cells[4].textContent == "X") && (cells[8].textContent == "X")) ||
                ((cells[2].textContent == "X") && (cells[4].textContent == "X") && (cells[6].textContent == "X"))) {
            document.getElementById("Title").innerHTML = "X WINS!";
            for (let i = 0; i < cells.length; i++) {
                cells[i].removeEventListener('click', cellClicked)

            }
            document.addEventListener('click', function end() {
                console.log("this sucks");
                gameOver();
                document.removeEventListener('click', end);
            });
        }
        //console.log('x wins')
        else if (
            ((cells[0].textContent == "O") && (cells[1].textContent == "O") && (cells[2].textContent == "O")) ||
            ((cells[3].textContent == "O") && (cells[4].textContent == "O") && (cells[5].textContent == "O")) ||
            ((cells[6].textContent == "O") && (cells[7].textContent == "O") && (cells[8].textContent == "O")) ||
            ((cells[0].textContent == "O") && (cells[3].textContent == "O") && (cells[6].textContent == "O")) ||
            ((cells[1].textContent == "O") && (cells[4].textContent == "O") && (cells[7].textContent == "O")) ||
            ((cells[2].textContent == "O") && (cells[5].textContent == "O") && (cells[8].textContent == "O")) ||
            ((cells[0].textContent == "O") && (cells[4].textContent == "O") && (cells[8].textContent == "O")) ||
            ((cells[2].textContent == "O") && (cells[4].textContent == "O") && (cells[6].textContent == "O"))) {
            document.getElementById("Title").innerHTML = "O WINS!";
            for (let i = 0; i < cells.length; i++) {
                cells[i].removeEventListener('click', cellClicked)

            }
            document.addEventListener('click', function end() {
                console.log("this sucks");
                gameOver();
                document.removeEventListener('click', end);
            });

        }
        else if (clickCount == 9) {
            document.getElementById("Title").innerHTML = "DRAW";
            console.log(event.target.textContent);
            for (let i = 0; i < cells.length; i++) {
                cells[i].removeEventListener('click', cellClicked)

            }
            document.addEventListener('click', function end() {
                console.log("this sucks");
                gameOver();
                document.removeEventListener('click', end);
            });

        }
    }
    function gameOver() {
        console.log("game over")
        document.getElementById("Title").innerHTML = "Tic Tac Toe"
        clickCount = 0;
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = '';
            for (let i = 0; i < cells.length; i++) {
                cells[i].addEventListener('click', cellClicked)

            }
        };
    }

}