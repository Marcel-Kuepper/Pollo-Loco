class Cloud extends MovableObject {
    width = 1000;
    height = 400;
    speed;

    constructor() {
        super().loadImage('../assets/img/5_background/layers/4_clouds/full.png');
        this.x = -720 + Math.random() * 1440;
        this.y = -50 + Math.random() * 100;
        this.speed = 0.1 + Math.random() * 0.3;
        this.animate()
    }

    animate() {
        setInterval(() => {
            this.x -= this.speed;
            if (this.x < -1000) {
                this.x = 720 + Math.random() * 200;
                this.y = -50 + Math.random() * 100;
                this.speed = 0.1 + Math.random() * 0.3;
            }
        }, 1000 / 60)
    }
}