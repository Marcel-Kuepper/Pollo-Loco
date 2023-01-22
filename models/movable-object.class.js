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

}