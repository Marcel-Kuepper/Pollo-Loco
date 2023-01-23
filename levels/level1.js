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
    ],

    [
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
    ],

    [
        new Background('../assets/img/5_background/layers/3_third_layer/full.png', -1439),
        new Background('../assets/img/5_background/layers/3_third_layer/full.png', 0),
        new Background('../assets/img/5_background/layers/3_third_layer/full.png', 1439),
        new Background('../assets/img/5_background/layers/3_third_layer/full.png', 2878),
        new Background('../assets/img/5_background/layers/2_second_layer/full.png', -1439),
        new Background('../assets/img/5_background/layers/2_second_layer/full.png', 0),
        new Background('../assets/img/5_background/layers/2_second_layer/full.png', 1439),
        new Background('../assets/img/5_background/layers/2_second_layer/full.png', 2878),
        new Background('../assets/img/5_background/layers/1_first_layer/full.png', -1439),
        new Background('../assets/img/5_background/layers/1_first_layer/full.png', 0),
        new Background('../assets/img/5_background/layers/1_first_layer/full.png', 1439),
        new Background('../assets/img/5_background/layers/1_first_layer/full.png', 2878),
    ]
)