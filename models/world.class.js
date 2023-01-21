class World {
    img;
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.ctx.drawImage(this.enemies[0].img, this.enemies[0].x, this.enemies[0].y, this.enemies[0].width, this.enemies[0].height)

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }
}