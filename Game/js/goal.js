class Goal {
    constructor(ctx, goalX, goalY, goalW, goalH, color) {
        this.ctx = ctx
        this.goalSpecs = {
            pos: { goalX: goalX, goalY: goalY },
            size: { goalW: goalW, goalH: goalH },
            color: color
        }
        this.instanceGoal()
        this.drawGoal()
    }
    instanceGoal() {
        this.image = new Image();
        this.image.src = "./img/nenufar.png"
    }

    drawGoal() {
        this.ctx.drawImage(
            this.image,
            this.goalSpecs.pos.goalX,
            this.goalSpecs.pos.goalY,
            this.goalSpecs.size.goalW,
            this.goalSpecs.size.goalH
        )
    }
}