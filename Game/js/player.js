class Player {
    constructor(ctx, playerX, playerY, playerW, playerH, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize
        this.playerSpecs = {
            pos: { playerX: playerX, playerY: playerY },
            size: { playerW: playerW, playerH: playerH },
            speedMove: 80,
            speedJump: 500,
            gravity: 10,
            liveCounter: 25,
        }
        this.instancePlayer();
        this.drawPlayer();
    }

    instancePlayer() {
        this.image = new Image();
        this.image.src = "./img/turttle.jpg"
    }

    drawPlayer() {
        this.fallPlayer()
        this.ctx.drawImage(
            this.image,
            this.playerSpecs.pos.playerX,
            this.playerSpecs.pos.playerY,
            this.playerSpecs.size.playerW,
            this.playerSpecs.size.playerH
        )
    }

    fallPlayer() {
        if (this.playerSpecs.pos.playerY < this.canvasSize.canvasH - this.playerSpecs.size.playerH) {
            this.playerSpecs.pos.playerY += this.playerSpecs.gravity
        }
    }
    viewPlayer() {
        if (this.playerSpecs.pos.playerX > 0 &&
            this.playerSpecs.pos.playerX + this.playerSpecs.size.playerW < this.canvasSize.canvasW) {
            return true
        }
    }
}