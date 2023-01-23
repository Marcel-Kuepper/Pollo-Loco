class Background extends MovableObject {
    constructor(path, rx) {
        super().loadImage(path);
        this.x = 0 + rx;
        this.y = 80;
        this.width = 1440;
        this.height = 400;
    }
}