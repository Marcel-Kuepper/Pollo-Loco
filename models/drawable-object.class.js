class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 200;
    y = 200;
    height = 200;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

}