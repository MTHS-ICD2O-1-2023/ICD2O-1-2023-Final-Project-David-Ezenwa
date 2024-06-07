/* global Phaser */

// Copyright (c) 2024 David.E All rights reserved
//
// Created by: David.E
// Created on: May 2024
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: "200px Times", fill: "#fde4b9", align: "center"}
    }

    init(data) {
      this.cameras.main.setBackgroundColor("#050A30")
    }

    preload() {
      console.log("Title Scene")
      this.preload.image("titleSceneBackground", "titleMenuScene.png")
    }

    create(data) {
      this.titleSceneBackgroundImage = this.add.sprite(0, 0, "titleSceneBackground").setScale(2.75)
      this.titleSceneBackgroundImage.x = 1920 / 2
      this.titleSceneBackgroundImage.y = 1080 / 2
    }

    update(time, delta) {
      if (time > 8000) {
        this.scene.switch("menuScene")
      }
    }
}

export default TitleScene
