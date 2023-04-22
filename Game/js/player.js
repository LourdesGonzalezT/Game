class Player {
    constructor(ctx, playerPosX, playerPosY, playerW, playerH, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize
        this.playerSpecs = {
            pos: { playerPosX: playerPosX, playerPosY: playerPosY },
            size: { playerW: playerW, playerH: playerH },
            speedMove: 60,
            speedJump: 800,
            gravity: 15
        }

        this.instancePayer();
        this.drawPlayer();

    }

    instancePayer() {
        this.image = new Image();
        this.image.src = "./img/turttle.jpg"
    }

    drawPlayer() {
        this.fallPlayer()
        this.ctx.drawImage(
            this.image,
            this.playerSpecs.pos.playerPosX,
            this.playerSpecs.pos.playerPosY,
            this.playerSpecs.size.playerW,
            this.playerSpecs.size.playerH
        )
    }

    fallPlayer() {
        if (this.playerSpecs.pos.playerPosY < this.canvasSize.canvasH - this.playerSpecs.size.playerH) {
            this.playerSpecs.pos.playerPosY += this.playerSpecs.gravity
        }
    }




}