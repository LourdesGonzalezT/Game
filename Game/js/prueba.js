jumpSmall() {
    this.player.playerSpecs.pos.playerY -= this.player.playerSpecs.speedJumpSmall
},


            }
if (key == ' ' && this.platformColisionDown4() === true && this.platformColisionDown2() === false) {
    this.jumpSmall()
}
if (key == ' ' && this.platformColisionUp4() === true && this.platformColisionDown2() === true) {
    this.jumpSmall()
}


platformColisionDown4() {
    return this.platforms4.some(elm => {
        return (
            this.player.playerSpecs.pos.playerX + this.player.playerSpecs.size.playerW > elm.platformSpecs.pos.platformX - 20 &&
            this.player.playerSpecs.pos.playerX < elm.platformSpecs.pos.platformX + elm.platformSpecs.size.platformW - 20 &&
            this.player.playerSpecs.pos.playerY > elm.platformSpecs.pos.platformY + elm.platformSpecs.size.platformH
        )
    })
},

platformColisionDown2() {//con la cabeza
    return this.platforms2.some(elm => {
        return (
            this.player.playerSpecs.pos.playerX + this.player.playerSpecs.size.playerW > elm.platformSpecs.pos.platformX - 20 &&
            this.player.playerSpecs.pos.playerX < elm.platformSpecs.pos.platformX + elm.platformSpecs.size.platformW - 20 &&
            this.player.playerSpecs.pos.playerY > elm.platformSpecs.pos.platformY + elm.platformSpecs.size.platformH
        )
    })
},

            // if (key == ' ' &&
            //     this.playerPosition() === true &&
            //     this.platformColisionDown4() === false) {
            //     this.jump()
            // }

            // if (key == ' ' &&
            //     this.platformColisionUp4() === true &&
            //     this.platformColisionDown2() === false) {
            //     this.jump()
            // }

            // if (key == ' ' &&
            //     this.platformColisionUp2() === true) {
            //     this.jump()
            // }

            // if (key = ' ' &&
            //     this.playerPosition() === true &&
            //     this.platformColisionDown4() === true) {
            //     this.jumpSmall()
            // }
            // if (key = ' ' &&
            //     this.platformColisionUp4() === true &&
            //     this.platformColisionDown2() === true) {
            //     this.jumpSmall()
            // }