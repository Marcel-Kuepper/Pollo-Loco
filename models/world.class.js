class World {
    img;
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    constructor(canvas, keyboard) {

        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.checkCollisions();
        this.alertBoss();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemie) => {
                if (this.character.isColliding(enemie)) {
                    console.log(enemie);
                    console.log(this.character.energy);
                    if (this.character.isHurt == false) {
                        this.character.energy -= 5;
                        if (this.character.energy < 0) {
                            this.character.energy = 0;
                        }
                        this.character.speedY = 15;
                        this.character.isHurt = true;
                        setTimeout(() => {
                            this.character.isHurt = false;
                        }, 1000)
                    }
                }
            })
        }, 100);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.sky);
        this.addObjectsToMap(this.level.background);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        this.drawMo(mo);
        this.drawFrame(mo);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    drawMo(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }

    drawFrame(mo) {
        if (mo instanceof Character || mo instanceof Chicken || mo instanceof ChickenSmall || mo instanceof Boss) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'blue';
            this.ctx.rect(mo.x + mo.offset.left, mo.y + mo.offset.top, mo.width - mo.offset.right - mo.offset.left, mo.height - mo.offset.bottom - mo.offset.top);
            this.ctx.stroke();
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    alertBoss() {
        setInterval(() => {
        if (this.character.x > 2800) {
            this.level.enemies[6].alerted = true;
        }}, 100)
    }
}