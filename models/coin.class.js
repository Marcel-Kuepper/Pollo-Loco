class Coin extends ColectableObject{
    IMAGE_NORMAL = '../assets/img/8_coin/coin_1.png';
    IMAGE_PICKUP = '../assets/img/8_coin/coin_2.png';
    height = 100;
    width = 100;

    constructor(ry, rx) {
        super().loadImage(this.IMAGE_NORMAL);
        this.x = rx;
        this.y = ry;
    }
}