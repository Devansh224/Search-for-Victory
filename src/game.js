window.addEventListener('load', () => {
    let config = {
        type: Phaser.AUTO,
        width: 800,
        height: 800,
        parent: 'phaser-example',
        audio: {
            disableWebAudio: false
        },
        scene: [LevelOne, LevelTwo, LevelThree, gameEnd]
    }
    
    let game = new Phaser.Game(config);
})