class Background {
    constructor(ctx, backgroundX, backgroundY, backgroundW, backgroundH) {
        this.ctx = ctx;

        this.backgroundSpecs = {
            pos: { backgroundX: backgroundX, backgroundY: backgroundY },
            size: { backgroundW: backgroundW, backgroundH: backgroundH }
        }
        this.instanceBackground();
        this.drawBackground();
    }

    instanceBackground() {
        this.image = new Image();
        this.image.src = "./img/desert_bg2.png"
    }

    drawBackground() {
        this.ctx.drawImage(
            this.image,
            this.backgroundSpecs.pos.backgroundX,
            this.backgroundSpecs.pos.backgroundY,
            this.backgroundSpecs.size.backgroundW,
            this.backgroundSpecs.size.backgroundH
        )
    }
}