class Player {
    vSpeed = 0;
    hSpeed = 0;
    direction = 0;
    trailLength = 10;
    trail = []
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    update(ctrl, ctx) {
        // this.hSpeed += (target.x - this.x) / 10
        // this.vSpeed += (target.y - this.y) / 10
        this.direction = -angle(this.x, this.y, ctrl.target.x, ctrl.target.y)

        if (ctrl.thrust) {
            this.hSpeed += (ctrl.target.x - this.x) / 1000
            this.vSpeed += (ctrl.target.y - this.y) / 1000
        }
        this.x += this.hSpeed
        this.y += this.vSpeed
        if (this.x > 1280) {
            this.x = 0
            this.trail.length = 0
        }
        if (this.x < 0) {
            this.x = 1280;
            this.trail.length = 0
        }
        if (this.y > 720) {
            this.y = 0
            this.trail.length = 0
        }
        if (this.y < 0) {
            this.y = 720
            this.trail.length = 0
        }
        this.trail.unshift({ x: this.x, y: this.y })
        if (this.trail.length > this.trailLength) {
            this.trail.pop()
        }

        // ctx.beginPath()
        // ctx.moveTo(this.x, this.y)
        // ctx.lineTo(ctrl.target.x, ctrl.target.y)
        // ctx.stroke()
    }

    draw(ctx) {

        if (gameOver) {
            ctx.fillStyle = "red"
            ctx.fillText("Game over, refresh page to try again", 32, 360)
            return
        }
        ctx.strokeStyle = "aquamarine"
        ctx.beginPath()
        const p1 = rotate(this.x, this.y, this.x - 15, this.y - 15, this.direction)
        ctx.lineWidth = "1"
        ctx.moveTo(p1[0], p1[1])
        const p2 = rotate(this.x, this.y, this.x - 15, this.y + 15, this.direction)
        ctx.lineTo(p2[0], p2[1])
        const p3 = rotate(this.x, this.y, this.x + 15, this.y, this.direction)
        ctx.lineTo(p3[0], p3[1])
        ctx.lineTo(p1[0], p1[1])
        this.checkCollision(p1, p2, p3)
        // ctx.moveTo(this.x - 15, this.y)
        // ctx.lineTo(this.x + 15, this.y)
        // ctx.moveTo(this.x, this.y - 15)
        // ctx.lineTo(this.x, this.y + 15)
        ctx.stroke()
        ctx.beginPath()
        ctx.lineWidth = "5"
        ctx.moveTo(this.x, this.y)
        this.trail.forEach((point) => {
            ctx.lineTo(point.x, point.y)
        })
        ctx.stroke()

    }

    checkCollision() {
        asteroids.some(asteroid => {
            const other = asteroid.getStats()
            // if (other.checked) return false
            if ((this.x - 15 < other.x + 10 && this.x - 15 > other.x - 10) || (this.x + 15 < other.x + 10 && this.x + 15 > other.x - 10)) {
                if ((this.y - 15 < other.y + 10 && this.y - 15 > other.y - 10) || (this.y + 15 < other.y + 10 && this.y + 15 > other.y - 10)) {
                    // alert("game over :( \n Please refresh to try again")
                    gameOver = true;
                    return true
                }
            }
        })
    }

}

class Asteroid {
    direction = 0;
    rotationDir = Math.sign(Math.random() - 0.5)
    checked = false
    constructor(x, y, vSpeed, hSpeed,) {
        this.x = x;
        this.y = y;
        this.vSpeed = vSpeed;
        this.hSpeed = hSpeed;

    }

    getStats() {
        return {
            y: this.y,
            x: this.x,
            checked: this.checked
        }
    }

    draw(ctx, i) {
        this.x += this.hSpeed
        this.y += this.vSpeed
        if (this.x > 1280 || this.x < -1 || this.y > 720 || this.y < 0) { removeRoid(i); }
        this.positions = [
            { x: this.x + 10, y: this.y },
            { x: this.x + 10, y: this.y - 10 },
            { x: this.x - 10, y: this.y - 14 },
            { x: this.x - 9, y: this.y },
            { x: this.x - 3, y: this.y + 5 },
            { x: this.x + 9, y: this.y + 8 }
        ]
        this.direction++
        ctx.beginPath()
        ctx.lineWidth = "1"
        ctx.strokeStyle = "red"
        const pso = rotate(this.x, this.y, this.positions[0].x, this.positions[0].y, this.direction)
        ctx.moveTo(pso[0], pso[1])
        this.positions.forEach(pos => {
            const ps = rotate(this.x, this.y, pos.x, pos.y, this.direction)
            ctx.lineTo(ps[0], ps[1])
        })
        ctx.lineTo(pso[0], pso[1])
        ctx.stroke()
    }

    checkCollision(self) {
        this.checked = true
        asteroids.some((asteroid, i) => {
            const other = asteroid.getStats()
            // if (other.checked) return false
            if ((this.x - 10 < other.x + 10 && this.x - 10 > other.x - 10) || (this.x + 10 < other.x + 10 && this.x + 10 > other.x - 10)) {
                if ((this.y - 10 < other.y + 10 && this.y - 10 > other.y - 10) || (this.y + 10 < other.y + 10 && this.y + 10 > other.y - 10)) {
                    removeRoid(i)
                    removeRoid(self)
                    return true
                }
            }
        })
    }
}

const canvas = document.querySelector("#board")
const ctx = canvas.getContext("2d")
const asteroids = []
let gameOver = false;
let mousePos = {}
let thrust = false
const player = new Player(100, 100)
ctx.font = "12px Courier"


setInterval(() => {
    const side = Math.random()
    if (side < 0.5) {
        xSpawn = Math.round(Math.random()) * 1280;
        ySpawn = Math.random() * 720;
        hSpd = Math.sign((xSpawn - 1) * -1);
        vSpd = Math.random() - 0.5
    } else {
        xSpawn = Math.random() * 1280;
        ySpawn = Math.round(Math.random()) * 720;
        vSpd = Math.sign((ySpawn - 1) * -1);
        hSpd = Math.random() - 0.5
    }
    asteroids.push(new Asteroid(xSpawn, ySpawn, vSpd, hSpd))
}, 500)

setInterval(() => {
    asteroids.forEach((asteroid, i) => {
        asteroid.checkCollision(i)
    })
}, 100)

ctx.strokeStyle = "white"
setInterval(() => {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, 1280, 720)
    player.update({ target: mousePos, thrust }, ctx)
    player.draw(ctx)
    asteroids.forEach((asteroid, i) => asteroid.draw(ctx, i))
}, 1000 / 60)


function removeRoid(id) {
    asteroids.splice(id, 1);

}




function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
}

function rotate(cx, cy, x, y, angle) {
    const radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];

}

document.addEventListener("mousemove", mouseUpdate)
function mouseUpdate(e) {
    mousePos = { x: e.offsetX, y: e.offsetY }
}
document.addEventListener("mousedown", () => {
    thrust = true
})
document.addEventListener("mouseup", () => {
    thrust = false
})

document.addEventListener("touchstart", (e) => {
    const touch = e.originalEvent.touches[0]
    mouseUpdate({ offsetX: touch.pageX, offsetY: touch.pageY })
    thrust = true
})
document.addEventListener("touchmove", (e) => {
    const touch = e.originalEvent.changedTouches[0]
    mouseUpdate({ offsetX: touch.pageX, offsetY: touch.pageY })
})
document.addEventListener("touchend", () => {
    thrust = false
})