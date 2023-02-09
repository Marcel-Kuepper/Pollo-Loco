class MovableObject extends DrawableObject {
    speed;
    otherDirection = false;
    isHurt = false;
    isDead = false;
    speedY = 0;
    acceleration = 0.5;
    energy = 100;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                if (this.speedY < -10) {
                    this.speedY = -10;
                }
                if (!this.isAboveGround() && this.speedY < 0) {
                    this.speedY = 0;
                }
            }
        }, 1000 / 60)
    }

    isAboveGround() {
        if (this.isDead) {
            return true;
        } else if (this instanceof Salsa) {
            return this.y < 400;
        } else {
            return this.y < 250;
        }
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 15;
    }

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    isJumpingOn() {
        return this.isAboveGround() &&
            this.speedY < 0;
    }


    isCollidingBottle(mo) {
        world.level.enemies.forEach((enemie) => {
            if (mo.isColliding(enemie)) {
                if (enemie instanceof Boss == false) {
                    enemie.isDead = true;
                    setInterval(() => {
                    this.splash();
                    },100);
                } else if (!(enemie.isHurt)) {
                    enemie.isHurt = true;
                    setTimeout(() => {
                        enemie.isHurt = false;
                    }, 500)
                    setInterval(() => {
                    this.splash();
                    },100);
                }
            }
        })
    }
}