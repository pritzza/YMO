/* Technopolis */
let audio = new Audio('Track 1-Technopolis.mp3');

let playButton = document.querySelector('button.play');
let playButtonIcon = playButton.querySelector('i');

playButton.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener('play', function () {
    playButtonIcon.className = 'ion-pause';
});

audio.addEventListener('pause', function () {
    playButtonIcon.className = 'ion-play';
});

/* Absolute Ego Dance */

let audio2 = new Audio('Track 2-Absolute Ego Dance.mp3');

let playButton2 = document.querySelector('button.play2');
let playButtonIcon2 = playButton2.querySelector('i');

playButton2.addEventListener('click', function () {
    if (audio2.paused) {
        audio2.play();
    } else {
        audio2.pause();
    }
});

audio2.addEventListener('play2', function () {
    playButtonIcon2.className = 'ion-pause';
});

audio2.addEventListener('pause', function () {
    playButtonIcon2.className = 'ion-play';
});

/* Rydeen */

let audio3 = new Audio('Track 3-Rydeen.mp3');

let playButton3 = document.querySelector('button.play3');
let playButtonIcon3 = playButton3.querySelector('i');

playButton3.addEventListener('click', function () {
    if (audio3.paused) {
        audio3.play();
    } else {
        audio3.pause();
    }
});

audio3.addEventListener('play3', function () {
    playButtonIcon3.className = 'ion-pause';
});

audio3.addEventListener('pause', function () {
    playButtonIcon3.className = 'ion-play';
});

/* Castalia */

let audio4 = new Audio('Track 4-Castalia.mp3');

let playButton4 = document.querySelector('button.play4');
let playButtonIcon4 = playButton4.querySelector('i');

playButton4.addEventListener('click', function () {
    if (audio4.paused) {
        audio4.play();
    } else {
        audio4.pause();
    }
});

audio4.addEventListener('play4', function () {
    playButtonIcon4.className = 'ion-pause';
});

audio4.addEventListener('pause', function () {
    playButtonIcon44.className = 'ion-play';
});

/* Behind the Mask */

let audio5 = new Audio('Track 5-Behind the Mask.mp3');

let playButton5 = document.querySelector('button.play5');
let playButtonIcon5 = playButton5.querySelector('i');

playButton5.addEventListener('click', function () {
    if (audio5.paused) {
        audio5.play();
    } else {
        audio5.pause();
    }
});

audio5.addEventListener('play5', function () {
    playButtonIcon5.className = 'ion-pause';
});

audio5.addEventListener('pause', function () {
    playButtonIcon5.className = 'ion-play';
});

/* Day Tripper */

let audio6 = new Audio('Track 6-Day Tripper.mp3');

let playButton6 = document.querySelector('button.play6');
let playButtonIcon6 = playButton6.querySelector('i');

playButton6.addEventListener('click', function () {
    if (audio6.paused) {
        audio6.play();
    } else {
        audio6.pause();
    }
});

audio6.addEventListener('play6', function () {
    playButtonIcon6.className = 'ion-pause';
});

audio6.addEventListener('pause', function () {
    playButtonIcon6.className = 'ion-play';
});

/* Insomnia */

let audio7 = new Audio('Track 7-Insomnia.mp3');

let playButton7 = document.querySelector('button.play7');
let playButtonIcon7 = playButton7.querySelector('i');

playButton7.addEventListener('click', function () {
    if (audio7.paused) {
        audio7.play();
    } else {
        audio7.pause();
    }
});

audio7.addEventListener('play7', function () {
    playButtonIcon7.className = 'ion-pause';
});

audio7.addEventListener('pause', function () {
    playButtonIcon7.className = 'ion-play';
});

/* Solid State Survivor */

let audio8 = new Audio('Track 8-Solid State Surivivor.mp3');

let playButton8 = document.querySelector('button.play8');
let playButtonIcon8 = playButton8.querySelector('i');

playButton8.addEventListener('click', function () {
    if (audio8.paused) {
        audio8.play();
    } else {
        audio8.pause();
    }
});

audio8.addEventListener('play8', function () {
    playButtonIcon8.className = 'ion-pause';
});

audio8.addEventListener('pause', function () {
    playButtonIcon8.className = 'ion-play';
});
