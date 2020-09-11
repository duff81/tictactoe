let cells = document.querySelectorAll('.row > div') //allows board to be used and clicks tracked
let clickCount = 0;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)


    //cells[i].forEach(element => {

    //});

}


//}

function cellClicked() {

    clickCount++;

    if (event.target.textContent == '') {

        if (clickCount % 2 == 0) {
            event.target.textContent = "O"
        } else { event.target.textContent = "X" };

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

            if (document.getElementById("Title").innerHTML == "X WINS!") {


                function first() {
                    document.addEventListener('click', second);
                }
                function second() {
                    location.reload();
                    // document.addEventListener('click', function end() {
                    //     gameOver();
                    //     document.removeEventListener('click', end);
                }
            };
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
        }

        else if (clickCount == 9) {

            document.getElementById("Title").innerHTML = "DRAW";


            console.log(event.target.textContent)
        }
    }

}

// function gameOver() {
//     console.log("game over")
//     document.getElementById("Title").innerHTML = "Tic Tac Toe"
//     clickCount = 0;
//     for (let i = 0; i < cells.length; i++) {
//         cells[i].textContent = '';
//     };
// }

//console.log(cellClicked.textContent)
//let boardState = (cells[0].event.target,cells[1], cells[2])
//function winGame() {

    //        console.log("winner winner")

   // }
//};

//function noWinner (clickCount == 9) {


//function gameWin(event.target.textContent) {





//cells[i].addEventListener('click', cellClicked);
 //function cellClicked() { }








// let Cells = document.querySelectorAll('.row > div');
// console.log(cells);

// let currentPlayer = 'X'
// let nextPlayer='O'
// for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener('click', cellClicked);
//     function cellClicked() {
//         event.target.textContent = 'X'


//         if (cells[i].textContent == 'X') {
//             event.target.textContent = 'O'
//         }
//     }
// };

//console.log('click')


/*0: div.top.left
1: div.top.middle
2: div.top.right
3: div.center.left
4: div.center.middle
5: div.center.right
6: div.bottom.left
7: div.bottom.middle
8: div.bottom.right


cell[0].textcontent =top right
*/
