/* global Phaser */

// Copyright (c) 2024 David.E All rights reserved
//
// Created by: David.E
// Created on: May 2024
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
    constructor() {
        super({ key: "splashScene" })

        this.splashSceneBackgroundImage = null
    }

    init (data) {
        this.cameras.main.setBackgroundColor("#050A30")
    }

    preload() {
        console.log("Splash Scene")
        this.load.image("splashSceneBackground", "./assets/splashSceneBackground.png")
    }

    create(data) {
        this.splashSceneBackgroundImage = this.add.sprite(0, 0, "splashSceneBackground")
        this.splashSceneBackgroundImage.x = 1920 / 2
        this.splashSceneBackgroundImage.y = 1080 / 2
    }

    update(time, delta) {
        if(time > 5000) {
            this.scene.switch("titleScene")
        }
    }
}

export default SplashScene