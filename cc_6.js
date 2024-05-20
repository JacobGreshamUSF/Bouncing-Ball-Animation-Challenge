U59555732
class Ball {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    // Method to draw the ball on the canvas
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // Method to update the ball's position
    update(canvas) {
        // Collision detection with canvas walls
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        // Update ball position
        this.x += this.dx;
        this.y += this.dy;
    }
}

// Create a ball instance
const ball = new Ball(200, 160, 20, 2, 2, 'red');

// Get canvas and context
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ball.draw(ctx); // Draw the ball
    ball.update(canvas); // Update the ball's position
}

// Set interval for animation
setInterval(animate, 10);
