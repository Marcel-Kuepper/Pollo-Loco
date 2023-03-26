class BossHealthBackground extends Statusbar {
    otherDirection = true;
    IMAGES = [
        'assets/img/7_statusbars/4_bar_elements/statusbar_empty.png'
    ];

    constructor() {
        super();
        this.loadImage('assets/img/7_statusbars/4_bar_elements/statusbar_empty.png');
        this.x = 500;
        this.y = 15;
        this.height = 50;
        this.width = 200;
    }
    
}