class Player {
    constructor(ctx, playerW, playerH) {
        this.ctx = ctx;
        this.playerW = playerW;
        this.playerH = playerH;
        this.instancePayer();
        this.drawPlayer();
        this.playerPosX = 0;
        this.playerPosY = 0;
    }

    instancePayer() {
        this.image = new Image();
        this.image.src = "./img/turttle.jpg"
    }

    drawPlayer() {
        this.ctx.drawImage(this.image, this.playerPosX, this.playerPosY, this.playerW, this.playerH)
    }

}