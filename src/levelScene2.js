class LevelTwo extends Phaser.Scene {
    constructor() {
        super('levelTwo');
    }
    init() {
        this.score = 50;
        this.lives = 4;
    }
    preload() {
        this.load.image('background2', 'assets/woodbg.png');
        this.load.image('player', 'assets/hero.png');
        this.load.image('nlevel', 'assets/nlevel.png');
        this.load.image('king', 'assets/drangon-king.png');
    }
    create() {
        this.bg = this.add.sprite(0, 0, 'background2');
        this.bg.setPosition(800 / 2, 800 / 2);

        //player
        this.player = this.add.sprite(70, 400, 'player');
        this.cursors = this.input.keyboard.createCursorKeys();
        //Treasure
        this.nlevel = this.add.sprite(750, 400, 'nlevel');
        this.nlevel.setScale(2);

        //king
        this.dking = this.add.sprite(700, 400, 'king');
        this.dking2 = this.add.sprite(800, 200, 'king');
        this.dking3 = this.add.sprite(900, 650, 'king');
        this.dking4 = this.add.sprite(1000, 320, 'king');
        this.dking5 = this.add.sprite(1100, 500, 'king');
        this.dking6 = this.add.sprite(1300, 400, 'king');
        this.dking7 = this.add.sprite(1400, 102, 'king');
        this.dking8 = this.add.sprite(1450, 800, 'king');
        this.dking9 = this.add.sprite(1500, 600, 'king');

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
        this.dking.x -= 10;
        this.dking2.x -= 10;
        this.dking3.x -= 10;
        this.dking4.x -= 10;
        this.dking5.x -= 10;
        this.dking6.x -= 10;
        this.dking7.x -= 10;
        this.dking8.x -= 10;
        this.dking9.x -= 10;
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
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.dking4.getBounds())) {
            this.lives--;
            this.liveText.setText('Lives: ' + this.lives);
            this.end();
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.dking5.getBounds())) {
            this.lives--;
            this.liveText.setText('Lives: ' + this.lives);
            this.end();
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.dking6.getBounds())) {
            this.lives--;
            this.liveText.setText('Lives: ' + this.lives);
            this.end();
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.dking7.getBounds())) {
            this.lives--;
            this.liveText.setText('Lives: ' + this.lives);
            this.end();
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.dking8.getBounds())) {
            this.lives--;
            this.liveText.setText('Lives: ' + this.lives);
            this.end();
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.dking9.getBounds())) {
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
        if (this.score === 100) {
            this.scene.start("levelThree");
        } else if (this.lives <= 0) {
            this.scene.start("levelOne");
        } else {
            this.create();
        }
    }
}