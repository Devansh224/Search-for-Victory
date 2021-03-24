class LevelOne extends Phaser.Scene {
    constructor() {
        super('levelOne');
    }
    init() {
        this.score = 0;
        this.lives = 3;
    }
    preload() {
        this.load.image('background', 'assets/forest.png');
        this.load.image('player', 'assets/hero.png');
        this.load.image('nlevel', 'assets/nlevel.png');
        this.load.image('king', 'assets/drangon-king.png');
        this.load.audio('clashPK', 'assets/wallHitSound.wav');
        this.load.audio('clashPNl', 'assets/scoreSound.wav');
    }
    create() {
        this.bg = this.add.sprite(0, 0, 'background');
        this.bg.setPosition(800 / 2, 800 / 2);
    
        //player
        this.player = this.add.sprite(70, 400, 'player');
        this.cursors = this.input.keyboard.createCursorKeys();
    
        //dragon
        this.dking = this.add.sprite(700, 400, 'king');
        this.dking2 = this.add.sprite(800, 200, 'king');
        this.dking3 = this.add.sprite(900, 650, 'king');
    
        //Treasure
        this.nlevel = this.add.sprite(750, 400, 'nlevel');
        this.nlevel.setScale(2);
    
        //Score 
        this.scoreText = this.add.text(16, 16, 'Score: ' + this.score, { fontSize: '32px', fill: '#ffffff' });
        this.liveText = this.add.text(16, 800 - 100, 'Lives: ' + this.lives, { fontSize: '32px', fill: '#ffffff' });
    }
    update() {
        if (this.cursors.up.isDown) {
            this.player.y -= 12;
            this.player.flipX = false;
        } else if (this.cursors.down.isDown) {
            this.player.y += 12;
            this.player.flipX = false;
        } else if (this.cursors.right.isDown) {
            this.player.x += 12;
            this.player.flipX = false;
        } else if (this.cursors.left.isDown) {
            this.player.x -= 12;
            this.player.flipX = true;
        }
        this.dking.x -= 6;
        this.dking2.x -= 6;
        this.dking3.x -= 6;
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.dking.getBounds())) {
            this.lives--;
            this.liveText.setText('Lives: ' + this.lives);
            this.end();
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.dking2.getBounds())) {
            this.lives--;
            this.liveText.setText('Lives: ' + this.lives);
            this.end();
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.dking3.getBounds())) {
            this.lives--;
            this.liveText.setText('Lives: ' + this.lives);
            this.end();
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.nlevel.getBounds())) {
            this.score += 50;
            this.scoreText.setText("Score: " + this.score);
            this.end();
        }
    }
    end() {
        if (this.score === 50) {
            this.scene.start("levelTwo");
        } else if (this.lives <= 0) {
            this.scene.restart();
    } else {
            this.create();
        }    
    }
}