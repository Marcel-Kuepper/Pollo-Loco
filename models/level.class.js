class Level {
    sky;
    enemies;
    clouds;
    background;
    level_end_x = 3600;

    constructor(sky, enemies, clouds, background) {
        this.sky = sky;
        this.enemies = enemies;
        this.clouds = clouds;
        this.background = background;
    }
}