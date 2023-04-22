class Goal {
    constructor(ctx, goalPosX, goalPosY, goalW, goalH) {
        this.ctx = ctx
        this.goalSpecs = {
            pos: { goalPosX: goalPosX, goalPosY: goalPosY },
            size: { goalW: goalW, goalH: goalH }
        }
        this.instanceGoal()
        this.drawGoal()
    }
    instanceGoal() {
        this.image = new Image();
        this.image.src = "./img/seta.png"

    }
    drawGoal() {
        this.ctx.drawImage(
            this.image,
            this.goalSpecs.pos.goalPosX,
            this.goalSpecs.pos.goalPosY,
            this.goalSpecs.size.goalW,
            this.goalSpecs.size.goalH
        )
    }
}