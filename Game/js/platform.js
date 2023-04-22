class Platform {
    constructor(ctx, platformPosX, platformPosY, platformW, platformH, speed) {
        this.ctx = ctx
        this.platformSpecs = {
            pos: { platformPosX: platformPosX, platformPosY: platformPosY },
            size: { platformW: platformW, platformH: platformH },
            speed: speed
        }
        this.drawPlatform();
    }
    drawPlatform() {
        this.move()
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(
            this.platformSpecs.pos.platformPosX,
            this.platformSpecs.pos.platformPosY,
            this.platformSpecs.size.platformW,
            this.platformSpecs.size.platformH
        )
    }
    move() {
        this.platformSpecs.pos.platformPosX += this.platformSpecs.speed
    }

}