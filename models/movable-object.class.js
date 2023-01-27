class MovableObject {
    x = 200;
    y = 200;
    img;
    height = 200;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed;
    otherDirection = false;
    isHurt = false;
    speedY = 0;
    acceleration = 1;
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
            }
        }, 1000 / 30)
    }

    isAboveGround() {
        return this.y < 250;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
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
        this.speedY = 20;
    }

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
        this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
        this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
        this.y +this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }
}