class Player {
    constructor(ctx, playerX, playerY, playerW, playerH, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize
        this.playerSpecs = {
            pos: { playerX: playerX, playerY: playerY },
            size: { playerW: playerW, playerH: playerH },
            speedMove: 60,
            speedJump: 800,
            gravity: 15
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
}