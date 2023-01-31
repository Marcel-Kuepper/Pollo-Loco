class Level {
    sky;
    enemies;
    clouds;
    background;
    colectables;
    level_end_x = 4600;

    constructor(sky, enemies, clouds, background, colectables) {
        this.sky = sky;
        this.enemies = enemies;
        this.clouds = clouds;
        this.background = background;
        this.colectables = colectables;
    }
}