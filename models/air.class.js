class Sky {
    y = 0;
    width = 720;
    height = 480;
    img;

    constructor(rx) {
        this.img = new Image();
        this.img.src = '../assets/img/5_background/layers/air.png';
        this.x = -1439 + rx;
    }
}