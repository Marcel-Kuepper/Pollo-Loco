class CoinBar extends Statusbar {
    IMAGES = [
        'assets/img/7_statusbars/3_icons/icon_coin.png'
    ];

    constructor() {
        super();
        this.loadImage('assets/img/7_statusbars/3_icons/icon_coin.png');
        this.x = 230;
        this.y = 10;
        this.height = 50;
        this.width = 50;
    }
    
}