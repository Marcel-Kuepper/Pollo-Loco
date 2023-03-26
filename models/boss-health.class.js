class BossHealth extends Statusbar {
    otherDirection = true;
    IMAGES = [
        'assets/img/7_statusbars/4_bar_elements/statusbar_blue.png',
    ];

    constructor() {
        super().loadImage('assets/img/7_statusbars/4_bar_elements/statusbar_blue.png');
        this.setPercentage(world.level.enemies[0].energy);
        this.y = 15;
        this.height = 50;
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        this.width = this.resolveImageIndex();
        this.x = 700 - this.width;
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 200;
        } else if (this.percentage >= 80) {
            return 160;
        } else if (this.percentage >= 60) {
            return 120;
        } else if (this.percentage >= 40) {
            return 80;
        } else if (this.percentage >= 20) {
            return 40;
        } else {
            return 0;
        }
    }
}