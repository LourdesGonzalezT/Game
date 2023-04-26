class Enemie {
    constructor(ctx, canvasSize, enemieX, enemieY, enemieW, enemieH, speedX, speedY, color) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.enemieSpecs = {
            pos: { enemieX: enemieX, enemieY: enemieY },
            size: { enemieW: enemieW, enemieH: enemieH },
            speedX: speedX,
            speedY: speedY,
            color: color,
            damage: 10
        }
        this.instanceEnimie()
        this.drawEnemie();
    }
    instanceEnimie() {
        this.image = new Image();
        this.image.src = "./img/pinguino.png"
    }
    drawEnemie() {
        this.moveEnemie()
        this.ctx.drawImage(
            this.image,
            this.enemieSpecs.pos.enemieX,
            this.enemieSpecs.pos.enemieY,
            this.enemieSpecs.size.enemieW,
            this.enemieSpecs.size.enemieH
        )
    }
    moveEnemie() {
        if (this.enemieSpecs.pos.enemieY >= this.canvasSize.canvasH - this.enemieSpecs.size.enemieH) this.turnVertical()
        if (this.enemieSpecs.pos.enemieX >= this.canvasSize.canvasW - this.enemieSpecs.size.enemieW) this.turnHorizontal()
        if (this.enemieSpecs.pos.enemieY < 0) this.turnVertical()
        if (this.enemieSpecs.pos.enemieX < 0) this.turnHorizontal()
        this.enemieSpecs.pos.enemieX += this.enemieSpecs.speedX
        this.enemieSpecs.pos.enemieY += this.enemieSpecs.speedY
    }
    turnVertical() {
        this.enemieSpecs.speedY *= -1
    }
    turnHorizontal() {
        this.enemieSpecs.speedX *= -1
    }
}