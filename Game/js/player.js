class Player {
    constructor(ctx, playerX, playerY, playerW, playerH, canvasSize, level) {
        this.ctx = ctx;
        this.canvasSize = canvasSize
        this.playerSpecs = {
            pos: { playerX: playerX, playerY: playerY },
            size: { playerW: playerW, playerH: playerH },
            speedMove: 80,
            speedJump: 500,
            gravity: 10,
            liveCounter: 100,
            level: level
        }
        this.instancePlayer();
        this.drawPlayer();
        this.instanceAudio()
        this.instanceAudioEnemmie()
        this.instanceAudioGoal()
    }

    instancePlayer() {
        this.image = new Image();
        this.image.src = "./img/rana.png"
    }
    instanceAudio() {
        this.audio = new Audio();
        this.audio.src = "./audio/audioranajump.mp3"
    }
    instanceAudioGoal() {
        this.audioGoal = new Audio();
        this.audioGoal.src = "./audio/goalaudio.mp3"
    }
    instanceAudioEnemmie() {
        if (this.playerSpecs.level === 0) {
            this.audioEnemie = new Audio();
            this.audioEnemie.src = "./audio/audiomono.mp3"
        }
        if (this.playerSpecs.level === 1) {
            this.audioEnemie = new Audio();
            this.audioEnemie.src = "./audio/pinguiaudio.mp3"
        }
        if (this.playerSpecs.level === 2) {
            this.audioEnemie = new Audio();
            this.audioEnemie.src = "./audio/alpacataudio.mp3"
        }

    }

    playAudioPlayer() {
        this.audio.play()
    }
    playAudioEnemie() {
        this.audioEnemie.play()
    }
    playAudioGoal() {
        this.audioGoal.play()
    }

    drawPlayer() {
        this.drawLifeBar()
        this.fallPlayer()
        this.ctx.drawImage(
            this.image,
            this.playerSpecs.pos.playerX,
            this.playerSpecs.pos.playerY,
            this.playerSpecs.size.playerW,
            this.playerSpecs.size.playerH
        )
    }
    drawLifeBar() {
        document.querySelector('#scoreBar').style.width = `${this.playerSpecs.liveCounter}%`
    }

    fallPlayer() {
        if (this.playerSpecs.pos.playerY < this.canvasSize.canvasH - this.playerSpecs.size.playerH) {
            this.playerSpecs.pos.playerY += this.playerSpecs.gravity
        }
    }
    viewPlayer() {
        if (this.playerSpecs.pos.playerX > 0 &&
            this.playerSpecs.pos.playerX + this.playerSpecs.size.playerW < this.canvasSize.canvasW) {
            return true
        }
    }
}