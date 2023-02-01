class ColectableObject {
    x = 200;
    y = 200;
    img;
    height = 50;
    width = 50;
    imageCache = {};
    currentImage = 0;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    checkColection() {
        setTimeout(() => {
            setInterval(() => {
                world.level.colectables.forEach(c => {
                    if (c.isColliding(world.character)) {
                        c.pickUp(c)
                    }
                });
            }, 100);
        }, 500)
    }

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }
}