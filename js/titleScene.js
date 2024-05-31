/* global Phaser */

// Copyright (c) 2024 David.E All rights reserved
//
// Created by: David.E
// Created on: May 2024
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: "titleScene" })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: "200px Times", fill: "#fde4b9", align: "center"}
    }

    init (data) {
      this.cameras.main.setBackgroundColor("#050A30")
    }

    preload () {
      console.log("Title Scene")
      this.preload.image("titleSceneBackground", )
    }
    //something still goes in the bracket
}