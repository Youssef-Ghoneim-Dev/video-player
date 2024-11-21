let video = document.querySelector("video");
let rang = document.querySelector("#vol");
let time = document.querySelector("#time");
let button = document.querySelector("#b");
let button2 = document.querySelector("#b1");
let button1 = document.querySelector("#o");
let div = document.querySelector("#ss");
let div1 = document.querySelector("#divv");
let span = document.querySelector("span");
let sit = document.querySelector("#ii");
let div2 = document.querySelector(".para");

function toggleVideo() {
  if (video.paused) {
    video.play();
    button.className = "bx bx-pause";
  }
  else if(video.play) {
    video.pause();
    button.className = "bx bx-play";
  }
}
function toggleVide() {
  if (video.paused) {
    video.play();
    button2.className = "bx bx-pause";
  }
  else if(video.play) {
    video.pause();
    button2.className = "bx bx-play";
  }
}

function timep() {
  video.currentTime += 10;
}

function timem() {
  video.currentTime -= 10;
}

function volum() {
  video.volume = rang.value;
  if (rang.value > 0.5) {
    button1.className = "bx bx-volume-full";
  }
  else if (rang.value <= 0.5 && rang.value != 0 ){
    button1.className = "bx bx-volume-low";
  }
  else if  ( rang.value == 0 ) {
    button1.className = "bx bx-volume-mute";
  }
}

function timeFun() {
  video.currentTime = (time.value * video.duration) / 100;
}

let select = document.querySelector("#select");

function speedVideo() {
  video.playbackRate = select.value;
}

function volm() {
    video.volume = 0 ;
    rang.value = 0 ;
    button1.className = "bx bx-volume-mute";
}

div.addEventListener('mouseover' , function() {
    divv.style.display = "inline-block"
    div.style.display = 'flex'
    div.style.flexFlow = 'row , nowrap'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
})
div.addEventListener('mouseout' , function() {
    divv.style.display = "none"
})

function dis() {
    span.classList.toggle('span')
}

// video.addEventListener('mouseover' , function(){
//     div2.style.display = 'inline-block'
// })
// video.addEventListener('mouseout' , function(){
//     div2.style.display = 'none'
// })