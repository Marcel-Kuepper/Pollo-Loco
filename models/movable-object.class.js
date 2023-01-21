class MovableObject {
    x = 200;
    y = 200;
    img;
    height = 200;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
    }
}