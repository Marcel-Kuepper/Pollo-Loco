class Chicken extends MovableObject {
    width = 50;
    height = 50;
    IMAGES_WALKING = [
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 500;
        this.y = 380 + Math.random() * 40;
        this.speed = 1.5 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        let min_x = -50;
        this.moveLeft(min_x);
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200)
    }

    getRandomAnimationSpeed() {
        let random_speed = 1.5 + Math.random() * 0.25;
        return random_speed;
    }

    getRandomAnimationX() {
        let random_x = 720 + Math.random() * 400;
        return random_x;
    }

    getRandomAnimationY() {
        let random_y = 380 + Math.random() * 40;
        return random_y;
    }
}