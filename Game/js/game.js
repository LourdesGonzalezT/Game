const game = {
    appName: 'Random Game',
    author: 'Alvaro & Lourdes',
    version: '1.0.0',
    license: undefined,
    description: 'Platform game for domies',
    ctx: undefined,
    frameIndex: 0,
    FPS: 60,
    background: undefined,
    player: undefined,
    platforms1: [],
    platforms2: [],
    platforms3: [],
    platforms4: [],
    enemies1: [],
    canvasSize: {
        canvasW: undefined,
        canvasH: undefined,
    },

    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },

    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },

    setDimensions() {
        this.canvasSize = {
            canvasW: window.innerWidth,
            canvasH: window.innerHeight,
        }
        document.querySelector('canvas').setAttribute('width', this.canvasSize.canvasW)
        document.querySelector('canvas').setAttribute('height', this.canvasSize.canvasH)
    },

    setEventListeners() {
        document.onkeydown = event => {
            const { key } = event
            if (key == 'ArrowLeft') {
                this.moveRight()
            }
            if (key == 'ArrowRight') {
                this.moveLeft()
            }
            if (key == ' ' && this.playerPosition()) {
                this.jump()
            }
        }
    },

    jump() {
        this.player.playerSpecs.pos.playerY -= this.player.playerSpecs.speedJump
    },

    moveRight() {
        if (this.player.playerSpecs.pos.playerX > 0) {
            this.player.playerSpecs.pos.playerX -= this.player.playerSpecs.speedMove
        }
    },

    moveLeft() {
        if (this.player.playerSpecs.pos.playerX < this.canvasSize.canvasW - this.player.playerSpecs.size.playerW) {
            this.player.playerSpecs.pos.playerX += this.player.playerSpecs.speedMove
        }
    },

    start() {
        this.reset()
        setInterval(() => {
            this.frameIndex > 5000 ? this.frameIndex = 0 : this.frameIndex++
            this.clearAll()
            this.drawAll()
            this.generatePlatforms()
            this.generateEnemies()
            this.clearPlatforms()
            this.platformColisionUp4()
            if (this.platformColisionUp4() && this.player.viewPlayer()) {
                this.player.playerSpecs.pos.playerX += 15
                this.player.playerSpecs.gravity = 0
            } else {
                this.player.playerSpecs.gravity = 10
            }
            this.platformColisionUp3()
            if (this.platformColisionUp3() && this.player.viewPlayer()) {
                this.player.playerSpecs.pos.playerX -= 15
                this.player.playerSpecs.gravity = 0
            }
            this.platformColisionUp2()
            if (this.platformColisionUp2() && this.player.viewPlayer()) {
                this.player.playerSpecs.pos.playerX += 15
                this.player.playerSpecs.gravity = 0
            }

            this.platformColisionUp1()
            if (this.platformColisionUp1() && this.player.viewPlayer()) {
                this.player.playerSpecs.pos.playerX -= 15
                this.player.playerSpecs.gravity = 0
            }
            this.goalColision()
            if (this.goalColision() === true) {
                this.player.playerSpecs.gravity = 0
            }
            this.enemieColision1()
            if (this.enemieColision1()) {
                console.log("pum")
            }
        }, 1000 / this.FPS)
    },

    reset() {
        this.background = new Background(this.ctx, 0, 0, this.canvasSize.canvasW, this.canvasSize.canvasH)
        this.player = new Player(this.ctx, 600, this.canvasSize.canvasH - 300, 300, 300, this.canvasSize)
        this.goal = new Goal(this.ctx, this.canvasSize.canvasW - 800, 600, 400, 50, "white")
    },

    drawAll() {
        this.background.drawBackground()
        this.player.drawPlayer()
        this.goal.drawGoal()
        this.platforms1.forEach(elm => elm.drawPlatform())
        this.platforms2.forEach(elm => elm.drawPlatform())
        this.platforms3.forEach(elm => elm.drawPlatform())
        this.platforms4.forEach(elm => elm.drawPlatform())
        this.enemies1.forEach(elm => elm.drawEnemie())

    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.canvasW, this.canvasSize.canvasH)
    },

    generateEnemies() {
        if (this.enemies1.length < 5) {
            if (this.frameIndex % 150 === 0) {
                this.enemies1.push(new Enemie(this.ctx, this.canvasSize, 200, 200, 200, 200, 20, 5, "grey"))
            }
        }
    },

    generatePlatforms() {
        if (this.frameIndex % 80 === 0) {
            this.platforms1.push(new Platform(this.ctx, this.canvasSize.canvasW, 800, 700, 80, -15, "blue"))
        }
        if (this.frameIndex % 120 === 0) {
            this.platforms2.push(new Platform(this.ctx, -300, 1200, 500, 80, 15, "yellow"))
        }
        if (this.frameIndex % 100 === 0) {
            this.platforms3.push(new Platform(this.ctx, this.canvasSize.canvasW, 1600, 600, 80, -15, "green"))
        }
        if (this.frameIndex % 80 === 0) {
            this.platforms4.push(new Platform(this.ctx, -300, 2000, 500, 80, 15, "red"))
        }

    },

    clearPlatforms() {
        this.platforms1 = this.platforms1.filter(elm => elm.platformSpecs.pos.platformX > 0 - elm.platformSpecs.size.platformW)
        this.platforms2 = this.platforms2.filter(elm => elm.platformSpecs.pos.platformX < this.canvasSize.canvasW)
        this.platforms3 = this.platforms3.filter(elm => elm.platformSpecs.pos.platformX > 0 - elm.platformSpecs.size.platformW)
        this.platforms4 = this.platforms4.filter(elm => elm.platformSpecs.pos.platformX < this.canvasSize.canvasW)
    },

    platformColisionUp1() {
        return this.platforms1.some(elm => {
            return (
                this.player.playerSpecs.pos.playerX + this.player.playerSpecs.size.playerW > elm.platformSpecs.pos.platformX &&
                this.player.playerSpecs.pos.playerX < elm.platformSpecs.pos.platformX + elm.platformSpecs.size.platformW &&
                this.player.playerSpecs.pos.playerY + this.player.playerSpecs.size.playerH > elm.platformSpecs.pos.platformY - 10 &&
                this.player.playerSpecs.pos.playerY + this.player.playerSpecs.size.playerH < elm.platformSpecs.pos.platformY + 10
            )
        })
    },

    platformColisionUp2() {
        return this.platforms2.some(elm => {
            return (
                this.player.playerSpecs.pos.playerX + this.player.playerSpecs.size.playerW > elm.platformSpecs.pos.platformX &&
                this.player.playerSpecs.pos.playerX < elm.platformSpecs.pos.platformX + elm.platformSpecs.size.platformW &&
                this.player.playerSpecs.pos.playerY + this.player.playerSpecs.size.playerH > elm.platformSpecs.pos.platformY - 10 &&
                this.player.playerSpecs.pos.playerY + this.player.playerSpecs.size.playerH < elm.platformSpecs.pos.platformY + 10
            )
        })
    },

    platformColisionUp3() {
        return this.platforms3.some(elm => {
            return (
                this.player.playerSpecs.pos.playerX + this.player.playerSpecs.size.playerW > elm.platformSpecs.pos.platformX &&
                this.player.playerSpecs.pos.playerX < elm.platformSpecs.pos.platformX + elm.platformSpecs.size.platformW &&
                this.player.playerSpecs.pos.playerY + this.player.playerSpecs.size.playerH > elm.platformSpecs.pos.platformY - 10 &&
                this.player.playerSpecs.pos.playerY + this.player.playerSpecs.size.playerH < elm.platformSpecs.pos.platformY + 10
            )
        })
    },

    platformColisionUp4() {
        return this.platforms4.some(elm => {
            return (
                this.player.playerSpecs.pos.playerX + this.player.playerSpecs.size.playerW > elm.platformSpecs.pos.platformX &&
                this.player.playerSpecs.pos.playerX < elm.platformSpecs.pos.platformX + elm.platformSpecs.size.platformW &&
                this.player.playerSpecs.pos.playerY + this.player.playerSpecs.size.playerH > elm.platformSpecs.pos.platformY - 10 &&
                this.player.playerSpecs.pos.playerY + this.player.playerSpecs.size.playerH < elm.platformSpecs.pos.platformY + 10
            )
        })
    },

    goalColision() {
        return (
            this.player.playerSpecs.pos.playerX + this.player.playerSpecs.size.playerW > this.goal.goalSpecs.pos.goalX &&
            this.player.playerSpecs.pos.playerX < this.goal.goalSpecs.pos.goalX + this.goal.goalSpecs.size.goalW &&
            this.player.playerSpecs.pos.playerY + this.player.playerSpecs.size.playerH > this.goal.goalSpecs.pos.goalY - 10 &&
            this.player.playerSpecs.pos.playerY + this.player.playerSpecs.size.playerH < this.goal.goalSpecs.pos.goalY + 10
        )
    },

    enemieColision1() {
        return this.enemies1.some(elm => {
            return (
                this.player.playerSpecs.pos.playerX < elm.enemieSpecs.pos.enemieX + elm.enemieSpecs.size.enemieW &&
                this.player.playerSpecs.pos.playerX + this.player.playerSpecs.size.playerW > elm.enemieSpecs.pos.enemieX &&
                this.player.playerSpecs.pos.playerY < elm.enemieSpecs.pos.enemieY + elm.enemieSpecs.size.enemieH &&
                this.player.playerSpecs.size.playerH + this.player.playerSpecs.pos.playerY > elm.enemieSpecs.pos.enemieY
            )
        })
    },
    playerPosition() {
        if (this.player.playerSpecs.pos.playerY === this.canvasSize.canvasH - this.player.playerSpecs.size.playerH ||
            this.platformColisionUp1() ||
            this.platformColisionUp2() ||
            this.platformColisionUp3() ||
            this.platformColisionUp4()) {
            return true
        } else {
            return false
        }
    },
}