import {Scene0} from './Scene0';
import  {SceneOne} from './SceneOne'
let config = {
    width: 1920,
    height: 1080,
    backgroundColor: '#FFFFF',
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    type: Phaser.AUTO,
    scene: [SceneOne],
    parent: 'index',
    physics: {
        default: `arcade`,
        arcade: {
          gravity: { y: 200 },
          debug: true
        }
    },
    platforms: true,
    groundPlat: true,
    player: true,
    cursors: true
}
let player;
let platforms;
let groundPlat;
let game = new Phaser.Game(config);
let cursors;
const speed = 200;
const speedDiag = speed * (1/1.44);

