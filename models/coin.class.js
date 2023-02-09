class Coin extends ColectableObject{
    IMAGE_NORMAL = '../assets/img/8_coin/coin_1.png';
    IMAGE_PICKUP = '../assets/img/8_coin/coin_2.png';
    height = 100;
    width = 100;

    constructor(ry, rx) {
        super().loadImage(this.IMAGE_NORMAL);
        this.x = rx;
        this.y = ry;
        this.checkColection();
    }

    pickUp() {
        this.loadImage(this.IMAGE_PICKUP);
        world.coins++;
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