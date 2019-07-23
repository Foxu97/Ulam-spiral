const matrixSize = document.getElementById('matrix-size');
const firstNumber = document.getElementById('number-to-start');
const generateButton = document.getElementById('generate-spiral-button');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


generateButton.addEventListener('click', () => {


    generateSpiral(matrixSize.value, parseInt(firstNumber.value))

})

function generateSpiral(matrixSize, firstNumber) {
    canvas.width = matrixSize;
    canvas.height = matrixSize;

    let matrixCenter = [(matrixSize / 2) - 1, (matrixSize / 2) - 1] 

    ctx.fillStyle = "#ff0000";
    ctx.fillRect(matrixCenter[0], matrixCenter[1], 1, 1);
    let direction = "right";
    let currentPoint = matrixCenter;
    let rightMoves = 0;
    let upMoves = 0;
    let leftMoves = 0;
    let downMoves = 0;
    let previousRightMoves = 0;
    let previousUpMoves = 0;
    let previousLeftMoves = 0;
    let previousDownMoves = 0;
    let lastNumber;
    let allPrimes = [];
    var t0 = performance.now();
    for(let i = firstNumber + 1; i < (matrixSize*matrixSize) + firstNumber + 1; i++) {
        let numToCheck = i;
        let number = isPrime(numToCheck);
        if(number){
            allPrimes.push(numToCheck)
        }
            switch (direction) {
                case "right":
                    if (number) {
                        ctx.fillStyle = "#000000";
                    } else {
                        ctx.fillStyle = "#ffffff";
                    }
                    ctx.fillRect(currentPoint[0] + 1, currentPoint[1], 1, 1);
                    rightMoves++
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
                    } else {
                        ctx.fillStyle = "#ffffff";
                    }
                    ctx.fillRect(currentPoint[0], currentPoint[1] - 1, 1, 1);
                    currentPoint[1] -= 1;
                    upMoves++
                    if(upMoves%2 == 1 && upMoves > previousUpMoves){
                        direction = "left";
                        previousUpMoves = upMoves;
                        leftMoves = 0;
                    }
                    break;
                case "left":
                    if (number) {
                        ctx.fillStyle = "#000000";
                    } else {
                        ctx.fillStyle = "#ffffff";
                    }
                    ctx.fillRect(currentPoint[0] - 1, currentPoint[1], 1, 1);
                    currentPoint[0] -= 1
                    leftMoves++
                    if(leftMoves%2 == 0 && leftMoves > previousLeftMoves){
                        direction = "down";
                        previousLeftMoves = leftMoves;
                        downMoves = 0;
                    }
                    break;
                case "down":
                    if (number) {
                        ctx.fillStyle = "#000000";
                    } else {
                        ctx.fillStyle = "#ffffff";
                    }
                    ctx.fillRect(currentPoint[0], currentPoint[1] + 1, 1, 1);
                    currentPoint[1] += 1;
                    downMoves++
                    if(downMoves % 2 == 0 && downMoves > previousDownMoves){
                        direction = "right";
                        previousDownMoves = downMoves; 
                        rightMoves = 0;
                    }
                   break;
                }
                lastNumber = i;    
    }
    var t1 = performance.now();
    let messeage = document.getElementById('first-number');
    messeage.innerHTML = "Between: " + firstNumber + " and " + lastNumber + " there are " + allPrimes.length + " pirmes.";
    let time = document.getElementById('time');
    time.innerHTML = "Generating spiral took: " + ((t1-t0)/1000) + " seconds";
}

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}