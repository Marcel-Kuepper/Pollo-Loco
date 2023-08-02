class Boss extends MovableObject {
    height = 300;
    width = 300;
    y = 160
    offset = {
        top: 50,
        left: 30,
        right: 30,
        bottom: 20,
    };
    isSleeping = true;
    isAlerted = false;
    alertAnimated = false;
    chicken_alert = new Audio('assets/audio/chicken-alert.mp3');
    boss_dead = new Audio('assets/audio/boss-dead.mp3');
    speed = 5;

    IMAGES_WALKING = [
        'assets/img/4_enemie_boss_chicken/1_walk/G1.png',
        'assets/img/4_enemie_boss_chicken/1_walk/G2.png',
        'assets/img/4_enemie_boss_chicken/1_walk/G3.png',
        'assets/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    IMAGES_ALERT = [
        'assets/img/4_enemie_boss_chicken/2_alert/G5.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G6.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G7.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G8.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G9.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G10.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G11.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G12.png',
    ];
    IMAGES_ATTACK = [
        'assets/img/4_enemie_boss_chicken/3_attack/G13.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G14.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G15.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G16.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G17.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G18.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G19.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G20.png',
    ];
    IMAGES_HURT = [
        'assets/img/4_enemie_boss_chicken/4_hurt/G21.png',
        'assets/img/4_enemie_boss_chicken/4_hurt/G22.png',
        'assets/img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];
    IMAGES_DEAD = [
        'assets/img/4_enemie_boss_chicken/5_dead/G24.png',
        'assets/img/4_enemie_boss_chicken/5_dead/G25.png',
        'assets/img/4_enemie_boss_chicken/5_dead/G26.png',
    ];
    IMAGES_SLEEPING = [
        'assets/img/4_enemie_boss_chicken/6_sleep/G27.png',
        'assets/img/4_enemie_boss_chicken/6_sleep/G28.png',
    ];
    sound_chicken = new Audio('assets/audio/chicken.mp3');

    constructor() {
        super().loadImage('assets/img/4_enemie_boss_chicken/6_sleep/G27.png')
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 4600;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.sound_chicken.pause();
            if (this.isAlerted) {
                if (this.isDead) {
                    this.playAnimation(this.IMAGES_DEAD)
                    this.boss_dead.play();
                } else if (this.isHurt) {
                    this.playAnimation(this.IMAGES_HURT)
                } else if (!this.alertAnimated) {
                    this.playAnimation(this.IMAGES_ALERT)
                    this.chicken_alert.play();
                    setTimeout(() => {
                        this.alertAnimated = true;
                    }, 600);
                } else if (this.isInAttackDistance()) {
                    this.playAnimation(this.IMAGES_ATTACK)
                    this.moveLeft();
                    this.chicken_alert.play();
                } else {
                    this.playAnimation(this.IMAGES_WALKING)
                    this.moveLeft();
                    this.sound_chicken.play();
                }
            } else {
                    this.playAnimation(this.IMAGES_SLEEPING)
                }
        }, 100);
    }

    isInAttackDistance() {
        return this.x - this.offset.left < world.character.x + world.character.width + world.character.offset.right;
    }
}