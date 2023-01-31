class Pickup extends ColectableObject{
    IMAGES_PICKUP = [
        '../assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor(ry, rx, index) {
        super().loadImage(this.IMAGES_PICKUP[index]);
        this.x = rx;
        this.y = ry;
    }
}