class Background {
    constructor(ctx, backgroundPosX, backgroundPosY, backgroundW, backgroundH) {
        this.ctx = ctx;

        this.backgroundSpecs = {
            pos: { backgroundPosX: backgroundPosX, backgroundPosY: backgroundPosY },
            size: { backgroundW: backgroundW, backgroundH: backgroundH }
        }
        this.instanceBackground();
        this.drawBackground();
    }

    instanceBackground() {
        this.image = new Image();
        this.image.src = "./img/images (1).jpeg"
    }

    drawBackground() {
        this.ctx.drawImage(
            this.image,
            this.backgroundSpecs.pos.backgroundPosX,
            this.backgroundSpecs.pos.backgroundPosY,
            this.backgroundSpecs.size.backgroundW,
            this.backgroundSpecs.size.backgroundH
        )
    }

}