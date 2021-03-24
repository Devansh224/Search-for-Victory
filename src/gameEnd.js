class gameEnd extends Phaser.Scene {
    constructor() {
        super('gameEnd');
    }
    preload() {
        this.load.image('ss', 'assets/spaceship.png')
    }
    create() {
        this.scoreText = this.add.text(350, 800/2, 'You won the game! ', { fontFamily: 'cursive, sans-serif, Georgia' });
        this.spaceship = this.add.sprite(100, 400, 'ss');
        this.spaceship2 = this.add.sprite(700, 400, 'ss');
    }
    update() {

    }
}