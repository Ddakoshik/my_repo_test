/*Get our Elements*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

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

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

// функцыя для пропуска нескольких секунд

function skip() {
     console.log('Skipping!');
     console.log(this.dataset.skip);
     video.currentTime += parseFloat(this.dataset.skip);
}

// регулеровка громкости и скорости

function handleRanngeUpdate(){
    console.log(this.value);
    video[this.name] = this.value;
    console.log(this.value);
}

function handleProgress() {
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}


function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}
/*Hook up the event listners*/

// КНОПКИ ПУЗЫ И ПЛЕЯ + ОБНОВЛЕНИЕ
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
 
// пРОПУСК СЕКУНД
skipButtons.forEach(button => button.addEventListener('click', skip));

// Ползунки громкости и скорости
ranges.forEach(range => range.addEventListener('change', handleRanngeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRanngeUpdate));


video.addEventListener('timeupdate', handleProgress);

let mousedown = false;

progress.addEventListener('mousemove', () => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


progress.addEventListener('click', scrub);
