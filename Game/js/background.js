class Background {
    constructor(ctx, backgroundW, backgroundH) {
        this.ctx = ctx;
        this.backgroundW = backgroundW;
        this.backgroundH = backgroundH;
        this.instanceBackground();
        this.drawBackground();
        this.backgroundPosX = 0;
        this.backgroundPosY = 0;
    }

    instanceBackground() {
        this.image = new Image();
        this.image.src = "./img/images (1).jpeg"
    }

    drawBackground() {
        this.ctx.drawImage(this.image, this.backgroundPosX, this.backgroundPosY, this.backgroundW, this.backgroundH);
    }


}