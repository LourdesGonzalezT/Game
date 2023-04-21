class Player {
    constructor(ctx, playerPosX, playerPosY, playerW, playerH) {
        this.ctx = ctx;

        this.playerSpecs = {
            pos: { playerPosX: playerPosX, playerPosY: playerPosY },
            size: { playerW: playerW, playerH: playerH }
        }


        this.instancePayer();
        this.drawPlayer();

    }

    instancePayer() {
        this.image = new Image();
        this.image.src = "./img/turttle.jpg"
    }

    drawPlayer() {
        this.ctx.drawImage(
            this.image,
            this.playerSpecs.pos.playerPosX,
            this.playerSpecs.pos.playerPosY,
            this.playerSpecs.size.playerW,
            this.playerSpecs.size.playerH
        )
    }




}