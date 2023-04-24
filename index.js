isFullscreen = false;

function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    if (isFullscreen) {
        closeFullscreen(fullscreen);
    } else {
        openFullscreen(fullscreen);
    }
}

/* View in fullscreen */
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    isFullscreen = true;
    let width = window.innerWidth + "px"
    let height = window.innerHeight + "px"
    document.getElementById('canvas').style.width =  width;
    document.getElementById('canvas').style.height = height;
    document.getElementById('openFS').style.display = 'none';
    document.getElementById('closeFS').style.display = 'block';
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    isFullscreen = false;
    document.getElementById('canvas').style.width =  '720px';
    document.getElementById('canvas').style.height = '480px';
    document.getElementById('closeFS').style.display = 'none';
    document.getElementById('openFS').style.display = 'block';
}
