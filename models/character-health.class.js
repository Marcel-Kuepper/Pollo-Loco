class CharacterHealth extends Statusbar {
    IMAGES = [
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png'
    ];

    constructor() {
        super().loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = 10;
        this.y = 5;
        this.width = 200;
        this.height = 50;
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img =this.imageCache[path];
        
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage >= 80) {
            return 1;
        } else if (this.percentage >= 60) {
            return 2;
        } else if (this.percentage >= 40) {
            return 3;
        } else if (this.percentage >= 20) {
            return 4;
        } else {
            return 5;
        }
    }
}