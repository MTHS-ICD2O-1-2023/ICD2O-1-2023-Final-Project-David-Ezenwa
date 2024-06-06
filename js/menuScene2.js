/* global Phaser */

// Copyright (c) 2024 David.E All rights reserved
//
// Created by: David.E
// Created on: May 2024
// This is the Menu Scene 2

class MenuScene2 extends Phaser.Scene {
    constructor() {
        super({ key: "menuScene2" })

        this.menuScene2BackgroundImage = null
        this.replayButton = null
        this.text = null
        this.textStyle = { font: "65px Fira Sans", fill: "fff", align: "center" }
    }

    init(data) {
        this.cameras.main.setBackgroundColor("#050A30")
    }

    preload() {
        console.log("Menu Scene 2")

        this.load.image("menuScene2_Background", "assets/Background.jpg")
        this.load.image("replayButton", "assets/startButton.gif")
    }
    
    create(data) {
     this.menuScene2BackgroundImage = this.add.sprite(0, 0, "menuScene2_galaxyBackground")
     this.menuScene2BackgroundImage.x = 1920 / 2
     this.menuScene2BackgroundImage.y = 1080 / 2
     
     this.replayButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'replayButton')
     this.replayButton.setInteractive({ useHandCursor: true })
     this.replayButton.on('pointerdown', () => this.clickButton())

     this.text = this.add.text(1100 / 2, (500 / 2) + 100, 'You finished the tutorial!\nPress start to go to the next level.', this.textStyle)
    }

    update(time, delta) {
    }
    clickButton() {
        this.scene.start("gameScene2")
    }
}

export default MenuScene2
