const level1 = new Level(
    [
        new Sky(1),
        new Sky(720),
        new Sky(1439),
        new Sky(2158),
        new Sky(2876),
        new Sky(3595),
        new Sky(4314),
        new Sky(5033),
        new Sky(5752),
        new Sky(6471),
    ],

    [
        new Boss(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
    ],

    [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
    ],

    [
        new Background('../assets/img/5_background/layers/3_third_layer/full.png', -1439),
        new Background('../assets/img/5_background/layers/3_third_layer/full.png', 0),
        new Background('../assets/img/5_background/layers/3_third_layer/full.png', 1439),
        new Background('../assets/img/5_background/layers/3_third_layer/full.png', 2878),
        new Background('../assets/img/5_background/layers/3_third_layer/full.png', 4317),
        new Background('../assets/img/5_background/layers/2_second_layer/full.png', -1439),
        new Background('../assets/img/5_background/layers/2_second_layer/full.png', 0),
        new Background('../assets/img/5_background/layers/2_second_layer/full.png', 1439),
        new Background('../assets/img/5_background/layers/2_second_layer/full.png', 2878),
        new Background('../assets/img/5_background/layers/2_second_layer/full.png', 4317),
        new Background('../assets/img/5_background/layers/1_first_layer/full.png', -1439),
        new Background('../assets/img/5_background/layers/1_first_layer/full.png', 0),
        new Background('../assets/img/5_background/layers/1_first_layer/full.png', 1439),
        new Background('../assets/img/5_background/layers/1_first_layer/full.png', 2878),
        new Background('../assets/img/5_background/layers/1_first_layer/full.png', 4317),
    ],

    [
        new Coin(125, 300),
        new Coin(200, 225),
        new Coin(200, 375),
        new Coin(300, 500),
        new Coin(200, 1000),
        new Coin(200, 1050),
        new Coin(100, 1050),
        new Coin(100, 1000),
        new Coin(300, 1200),
        new Coin(200, 1200),
        new Coin(100, 1500),
        new Coin(100, 1600),
        new Coin(200, 1800),
        new Coin(300, 1900),
        new Coin(300, 2000),
        new Coin(300, 2050),
        new Coin(300, 2100),
        new Coin(300, 2500),
        new Coin(200, 2500),
        new Coin(100, 2500),
        new Pickup(400, 400, 0),
        new Pickup(400, 800, 0),
        new Pickup(400, 200, 0),
        new Pickup(400, 1500, 1),
        new Pickup(400, 1700, 1),
        new Pickup(400, 2000, 1),
        new Pickup(400, 1100, 0),
        new Pickup(400, 2800, 1),
        new Pickup(400, 3000, 0),
        new Pickup(400, 3200, 1),
    ]
)