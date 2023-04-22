const game = {
    appName: 'Random Game',
    author: 'Alvaro & Lourdes',
    version: '1.0.0',
    license: undefined,
    description: 'Platform game for domies',
    ctx: undefined,
    frameIndex: 0,
    background: undefined,
    player: undefined,
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
                if (this.player.playerSpecs.pos.playerPosY > 0) {
                    this.player.playerSpecs.pos.playerPosY -= this.player.playerSpecs.speedJump
                }

            }
        }
    },

    start() {
        this.reset()
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 50)

    },

    reset() {
        this.background = new Background(this.ctx, 0, 0, this.canvasSize.canvasW, this.canvasSize.canvasH)
        this.player = new Player(this.ctx, 0, 100, 500, 500, this.canvasSize)
    },

    drawAll() {
        this.background.drawBackground()
        this.player.drawPlayer()
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.canvasW, this.canvasSize.canvasH)
    },

}