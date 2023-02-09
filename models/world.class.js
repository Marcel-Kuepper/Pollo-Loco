class World {
    img;
    character = new Character();
    level = level1;
    throwable = [];
    health = new CharacterHealth();
    coinbar = new CoinBar();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    coins = 0;
    bottles = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.checkCollisions();
        this.alertBoss();
        this.throwBottle();
    }

    setWorld() {
        this.character.world = this;
        this.throwable.world = this;
        this.coinbar.world = this;
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.sky);
        this.addObjectsToMap(this.level.background);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwable);
        this.addObjectsToMap(this.level.colectables);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.health);
        this.addToMap(this.coinbar);
        this.drawNumber(this.coins, 280, 50);
        this.drawNumber(this.bottles, 350, 50);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemie) => {
                if (this.character.isColliding(enemie)) {
                    if (this.character.isJumpingOn() && enemie instanceof Boss == false) {
                        enemie.isDead = true;
                        this.character.isInvincible = true;
                        this.character.speedY = 15;
                        setTimeout(() => {
                            this.character.isInvincible = false;
                        }, 200);
                    } else
                        if (this.character.isHurt == false && this.character.isInvincible == false) {
                            this.character.energy -= 20;
                            this.health.setPercentage(this.character.energy);
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
        }, 50);
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
    
    drawNumber(number, x, y) {
        this.ctx.font = "30px Comic Sans MS";
        this.ctx.fillText(`${number}`, x, y);
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
                this.level.enemies[0].alerted = true;
            }
        }, 100)
    }

    throwBottle() {
        setInterval(() => {
            if (this.keyboard.DOWN) {
                let bottle = new Salsa(this.character.x + 60, this.character.y + 60);
                this.throwable.push(bottle);
            }
        }, 200);
    }


    checkColection() {
        setInterval(() => {
            this.level.colectables.forEach(c => {
                if (c.isColliding(this.character)) {
                    c.pickUp()
                }
            });
        }, 100);
    }
}