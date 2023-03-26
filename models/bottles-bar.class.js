class BottlesBar extends Statusbar {
    IMAGES = [
        'assets/img/7_statusbars/3_icons/icon_salsa_bottle.png'
    ];

    constructor() {
        super();
        this.loadImage('assets/img/7_statusbars/3_icons/icon_salsa_bottle.png');
        this.x = 300;
        this.y = 10;
        this.height = 50;
        this.width = 50;
    }
}