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

    start() {
        this.reset()
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 50)

    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize.canvasW, this.canvasSize.canvasH)
        this.player = new Player(this.ctx, 100, 100)

    },

    drawAll() {
        this.background.drawBackground()
        this.player.drawPlayer()


    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.canvasW, this.canvasSize.canvasH)

    },




}