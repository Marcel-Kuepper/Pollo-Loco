class Background extends MovableObject {
    constructor(path) {
        super().loadImage(path);
        this.x = -720 + Math.random() * 720;
        this.y = 80;
        this.width = 1440;
        this.height = 400;
    }
}