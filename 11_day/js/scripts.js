/*Get our Elements*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const togle = player.querySelectorAll('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.playrt__slider');

/*build out functions*/
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    // if (video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }
}



/*Hook up the event listners*/