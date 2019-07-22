const matrixSize = document.getElementById('matrix-size');
const firstNumber = document.getElementById('number-to-start');
const generateButton = document.getElementById('generate-spiral-button');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


generateButton.addEventListener('click', () => {


    generateSpiral(matrixSize.value, firstNumber.value)

})

function generateSpiral(matrixSize, firstNumber) {

    canvas.width = matrixSize;
    canvas.height = matrixSize;

    let matrixCenter = [(matrixSize / 2) - 1, (matrixSize / 2) - 1] //srodek matrycy minus 1 bo zaczynam w prawo
    //console.log(matrixCenter)

    // let 

    // for(let i = 0; i < matrixSize; i++){
    //     switch()
    // }



    ctx.fillStyle = "#ff0000";
    ctx.fillRect(matrixCenter[0], matrixCenter[1], 1, 1);


    let direction = "right";
    let movements = 1;
    let currentPoint = matrixCenter;
    let rightMoves = 0
    let upMoves = 0
    let leftMoves = 0
    let downMoves = 0;
    let previousRightMoves = 0;
    let previousUpMoves = 0;
    let previousLeftMoves = 0;
    let previousDownMoves = 0;
    for(let i = 2; i < (matrixSize*matrixSize) -1; i++) {
        let numToCheck = i;
        let number = isPrime(numToCheck);
        //console.log(numToCheck, number)

        let movementsInThisTour = movements
        // for (let j = 0; j < movementsInThisTour ; j++) {
            console.log(direction)
            switch (direction) {
                case "right":
                    if (number) {
                        ctx.fillStyle = "#000000";
                        ctx.fillRect(currentPoint[0] + 1, currentPoint[1], 1, 1);
                    } else {
                        ctx.fillStyle = "#ffffff";
                        ctx.fillRect(currentPoint[0] + 1, currentPoint[1], 1, 1);
                    }
                    rightMoves++
                    //console.log("right moves : ", rightMoves)
                    currentPoint[0] += 1
                    if(rightMoves%2 == 1 && rightMoves > previousRightMoves){
                        direction = "up";
                        previousRightMoves = rightMoves;
                        upMoves = 0;
                    }
                    break;
                case "up":
                    if (number) {
                        ctx.fillStyle = "#000000";
                        ctx.fillRect(currentPoint[0], currentPoint[1] - 1, 1, 1);
                    } else {
                        ctx.fillStyle = "#ffffff";
                        ctx.fillRect(currentPoint[0], currentPoint[1] - 1, 1, 1);
                    }
                    currentPoint[1] -= 1;
                    upMoves++
                    //console.log("up moves : ", upMoves)
                    if(upMoves%2 == 1 && upMoves > previousUpMoves){
                        direction = "left";
                        previousUpMoves = upMoves;
                        leftMoves = 0;

                    }
                    movements++
                    break;
                case "left":
                    if (number) {
                        ctx.fillStyle = "#000000";
                        ctx.fillRect(currentPoint[0] - 1, currentPoint[1], 1, 1);
                    } else {
                        ctx.fillStyle = "#ffffff";
                        ctx.fillRect(currentPoint[0] - 1, currentPoint[1], 1, 1);
                    }
                    currentPoint[0] -= 1
                    leftMoves++
                    //console.log("left moves : ", leftMoves)
                    if(leftMoves%2 == 0 && leftMoves > previousLeftMoves){
                        direction = "down";
                        previousLeftMoves = leftMoves;
                        downMoves = 0;
                    }
                    break;
                case "down":
                    if (number) {
                        ctx.fillStyle = "#000000";
                        ctx.fillRect(currentPoint[0], currentPoint[1] + 1, 1, 1);
                    } else {
                        ctx.fillStyle = "#ffffff";
                        ctx.fillRect(currentPoint[0], currentPoint[1] + 1, 1, 1);
                    }
                    currentPoint[1] += 1;
                    downMoves++
                    //console.log("down moves : ", downMoves)
                    if(downMoves % 2 == 0 && downMoves > previousDownMoves){
                        direction = "right";
                        previousDownMoves = downMoves; 
                        rightMoves = 0;
                    }
                    movements++;
                   break;
            }

           console.log(currentPoint)

    //    }


    }
    console.log("petla skonczonas")
}


function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}