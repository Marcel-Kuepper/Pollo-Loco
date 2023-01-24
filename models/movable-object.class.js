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
    speedY = 0;
    acceleration = 1;

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
        console.log('Moving right');
    }

    moveLeft(min_x) {
        setInterval(() => {
            this.x -= this.speed;
            if (this.x < min_x) {
                this.x = this.getRandomAnimationX();
                this.y = this.getRandomAnimationY();
                this.speed = this.getRandomAnimationSpeed();
            }
        }, 1000 / 60)
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

}