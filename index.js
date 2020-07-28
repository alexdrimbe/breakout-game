import { clearCanvas } from './canvas.js'
import { drawBall, updateBallPosition } from './ball.js'
import { drawPaddle, updatePaddlePosition } from './paddle.js'

function draw() {
    clearCanvas();

    drawBall();
    drawPaddle();
    
    updateBallPosition();
    updatePaddlePosition();
}

var interval = setInterval(draw, 10);

export const gameOver = () => {
    console.log('Game Over');
    clearInterval(interval); // Needed for Chrome to end game
}