class Cloud extends MovableObject {
    width = 1000;
    height = 400;

    constructor() {
        super().loadImage('../assets/img/5_background/layers/4_clouds/full.png');
        this.x = -720 + Math.random() * 3040;
        this.y = -50 + Math.random() * 100;
        this.speed = 0.1 + Math.random() * 0.3;
        this.animate()
    }

    animate() {
        let min_x = -2000;
        setInterval(() => {
            this.moveLeft();
            if (this.x < min_x) {
                this.x = this.getRandomAnimationX();
                this.y = this.getRandomAnimationY();
                this.speed = this.getRandomAnimationSpeed();
            }
        }, 1000 / 60)
    }

    getRandomAnimationSpeed() {
        let random_speed = 0.1 + Math.random() * 0.3;
        return random_speed;
    }

    getRandomAnimationX() {
        let random_x = 4000 + Math.random() * 200;
        return random_x;
    }

    getRandomAnimationY() {
        let random_y = -50 + Math.random() * 100;
        return random_y;
    }
}