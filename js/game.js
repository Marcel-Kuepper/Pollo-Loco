let canvas;
let world;
let keyboard = new Keyboard();
let isMute = false;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log(world.character)
}

window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    console.log(event);
});

window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    console.log(event);
});

function playMusic() {
    bgMusic = window.audio.bg_music;
    bgMusic.loop = true;
    bgMusic.volume = 0.3;
    bgMusic.play();
}

function openSettings() {
    const gameMenu = document.getElementById('gamemenu');
    gameMenu.innerHTML = /*html*/ `
    <div class="instructions">
        <div>
            <button class="back" onclick="closeSettings()"></button>
        </div>
        <div class="context">
            <div class="move">
                <p>Move: A D, ← →</p>
            </div>
            <div class="jump">
                <p>Jump: W, SPACE, ↑</p>
            </div>
            <div class="throw-bottle">
                <p>Throw Bottle: E, F, ENTER</p>
            </div>
        </div>
    </div>
    `;
}

function closeSettings() {
    const gameMenu = document.getElementById('gamemenu');
    gameMenu.innerHTML = /*html*/ `
        <div class="menu-container-section" id="gamemenu">
        <div>
            <button class="start" onclick="startGame()">START</button>
        </div>
        <div>
            <button class="settings-icon sound-on" onclick="toggleSound()" id="soundbutton"></button>
            <button onclick="openSettings()" class="settings-icon setting"></button>
        </div>
    </div>
    `;
}

function goToMenu() {
    window.location.href = "index.html";
}