class Platform {
    constructor(ctx, platformX, platformY, platformW, platformH, speed, color) {
        this.ctx = ctx
        this.platformSpecs = {
            pos: { platformX: platformX, platformY: platformY },
            size: { platformW: platformW, platformH: platformH },
            speed: speed,
            color: color
        }
        this.drawPlatform();
    }
    drawPlatform() {
        this.move()
        this.ctx.fillStyle = this.platformSpecs.color
        this.ctx.fillRect(
            this.platformSpecs.pos.platformX,
            this.platformSpecs.pos.platformY,
            this.platformSpecs.size.platformW,
            this.platformSpecs.size.platformH

        )
    }
    move() {
        this.platformSpecs.pos.platformX += this.platformSpecs.speed
    }

}