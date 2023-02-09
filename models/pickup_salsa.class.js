class Pickup extends ColectableObject{
    IMAGES_PICKUP = [
        '../assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor(ry, rx, index) {
        super().loadImage(this.IMAGES_PICKUP[index]);
        this.x = rx;
        this.y = ry;
        this.checkColection();
    }

    pickUp() {
        world.bottles += 2;
        this.moveUp();
        setTimeout(() => {
            this.x = -500;
            this.y = -500;
        }, 200)
    }

    moveUp() {
        this.y -= 10;
        setTimeout(() => {
            this.y -= 10;
        }, 50);
    }
}