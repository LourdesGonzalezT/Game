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
    goal: undefined,
    platforms1: [], // array vacío para almacenar plataformas
    platforms2: [],
    platforms3: [],
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
        document.onkeyup = event => {
            const { key } = event
            if (key == 'ArrowLeft') {
                if (this.player.playerSpecs.pos.playerPosX > 0) {
                    this.player.playerSpecs.pos.playerPosX -= this.player.playerSpecs.speedMove
                }
            }
            if (key == 'ArrowRight') {
                if (this.player.playerSpecs.pos.playerPosX < this.canvasSize.canvasW - this.player.playerSpecs.size.playerW) {
                    this.player.playerSpecs.pos.playerPosX += this.player.playerSpecs.speedMove
                }
            }
            if (key == ' ') {
                if (this.player.playerSpecs.pos.playerPosY > 0) { // deberá saltar sólo cuando colisione con plataforma o suelo
                    this.player.playerSpecs.pos.playerPosY -= this.player.playerSpecs.speedJump
                }
            }
        }
    },

    start() {
        this.reset()
        setInterval(() => {
            this.frameIndex > 5000 ? this.frameIndex = 0 : this.frameIndex++
            this.clearAll()
            this.drawAll()
            this.generatePlatforms()
            this.clearPlatforms()
        }, 1000 / this.FPS)

    },

    reset() {
        this.background = new Background(this.ctx, 0, 0, this.canvasSize.canvasW, this.canvasSize.canvasH)
        this.player = new Player(this.ctx, 0, this.canvasSize.canvasH - 500, 500, 500, this.canvasSize)
        this.goal = new Goal(this.ctx, this.canvasSize.canvasW - 300, 100, 200, 200)
        this.platforms1 = []
        this.platforms2 = []
        this.platforms3 = []
    },

    drawAll() {
        this.background.drawBackground()
        this.player.drawPlayer()
        this.goal.drawGoal()
        this.platforms1.forEach(elm => elm.drawPlatform())
        this.platforms2.forEach(elm => elm.drawPlatform())
        this.platforms3.forEach(elm => elm.drawPlatform())

    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.canvasW, this.canvasSize.canvasH)
    },

    generatePlatforms() {
        if (this.frameIndex % 80 === 0) {
            this.platforms1.push(new Platform(this.ctx, 0 - this.canvasSize.canvasW / 3, this.canvasSize.canvasH - (this.canvasSize.canvasH / 4), this.canvasSize.canvasW / 6, 80, 30))
        }
        if (this.frameIndex % 100 === 0) {
            this.platforms2.push(new Platform(this.ctx, this.canvasSize.canvasW, this.canvasSize.canvasH - (this.canvasSize.canvasH / 2), this.canvasSize.canvasW / 6, 80, -30))
        }
        if (this.frameIndex % 100 === 0) {
            this.platforms3.push(new Platform(this.ctx, 0 - this.canvasSize.canvasW / 3, this.canvasSize.canvasH - (this.canvasSize.canvasH / 1.3), this.canvasSize.canvasW / 6, 80, 30))
        }
    },

    clearPlatforms() {
        this.platforms1 = this.platforms1.filter(elm => elm.platformSpecs.pos.platformPosX < this.canvasSize.canvasW)
        this.platforms2 = this.platforms2.filter(elm => elm.platformSpecs.pos.platformPosX > 0 + platformSpecs.size.platformW)
        this.platforms3 = this.platforms3.filter(elm => elm.platformSpecs.pos.platformPosX < this.canvasSize.canvasW)
    }
}