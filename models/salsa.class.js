class Salsa extends MovableObject {
    IMAGES_SPLASH = [
        '../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];
    IMAGES_ROTATE = [
        '../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    height = 50;
    width = 50;
    acceleration = 0.3;
    speedY = 9;
    speed = 12;
    sound_breaking = new Audio('assets/audio/bottle-breaking.mp3');
    hasColidet = false;

    constructor(x, y) {
        super().loadImage('../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png')
        this.loadImages(this.IMAGES_ROTATE);
        this.loadImages(this.IMAGES_SPLASH);
        this.applyGravity();
        this.animate();
        this.x = x;
        this.y = y;
        this.throw();
    };

    throw() {
        setInterval(() => {
            this.x += this.speed
        }, 50)
    }

    animate() {
        setInterval(() => {
            this.isCollidingBottle(this)
            if (this.hasColidet) {
                this.splash();
            } else if (!this.isAboveGround()) {
                this.splash();
            } else {
                this.playAnimation(this.IMAGES_ROTATE);
            }
        }, 100);
    };

    splash() {
        this.speedY = 0;
        this.speed = 0;
        this.acceleration = 0;
        this.playAnimation(this.IMAGES_SPLASH);
        this.sound_breaking.play();
        setTimeout(() => {
            this.x = -1200;
            this.isDead = true;
            this.sound_breaking.pause();
        }, 400);
    }
}