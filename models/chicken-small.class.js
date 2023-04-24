class ChickenSmall extends MovableObject {
    width = 50;
    height = 50;
    IMAGES_WALKING = [
        'assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    IMAGES_DEAD = [
        'assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];
    offset = {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
    };
    acceleration = 0.2;

    constructor() {
        super().loadImage('../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 300 + Math.random() * 4500;
        this.y = 400 + Math.random() * 4;
        this.speed = 0.5 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)
        setInterval(() => {
            if (this.isDead) {
                setInterval(() => {
                    this.playAnimation(this.IMAGES_DEAD)
                }, 200)
                this.applyGravity();
                setTimeout(() => {
                    return;
                }, 1000)
            } else {
                this.playAnimation(this.IMAGES_WALKING)
            }
        }, 200)
    }
}