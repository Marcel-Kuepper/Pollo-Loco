class Chicken extends MovableObject {
    constructor() {
        super().loadImage('../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.x = 600;
        this.y = 350;
        this.width = 50;
        this.height = 50;
    }
}