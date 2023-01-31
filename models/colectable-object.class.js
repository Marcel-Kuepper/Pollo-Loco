class ColectableObject {
    x = 200;
    y = 200;
    img;
    height = 50;
    width = 50;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
}