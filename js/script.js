const domMobileNavBtnEl = document.querySelector('.mobile-nav-btn');
const domMobileNavBtnIcon = document.querySelector('.mobile-nav-btn__icon');
const domMobileNavEl = document.querySelector('.mobile-nav');


domMobileNavBtnEl.addEventListener('click', function() {
    domMobileNavBtnIcon.classList.toggle('active');
    domMobileNavEl.classList.toggle('active');
});




const domVideoStoryVideoEl = document.querySelector('.video-story-video');
const domVideoStoryPlayBtnEl = document.querySelector('.video-story-play-btn');
const domVideoStoryPlayBtnImgEl = document.querySelector('.video-story-play-btn__img');
const domVideoStoryWrapperEl = document.querySelector('.video-story-wrapper');

function showHiddenBtn(event) {
    if(event.type === 'mouseleave') {
        domVideoStoryPlayBtnEl.classList.add('hidden');
    }else {
        domVideoStoryPlayBtnEl.classList.remove('hidden');
    }
}


domVideoStoryPlayBtnEl.addEventListener('click', function() {
    if(domVideoStoryVideoEl.paused){
        domVideoStoryVideoEl.play();
        domVideoStoryPlayBtnImgEl.src = 'img/pause-white.svg';

        domVideoStoryWrapperEl.onmouseleave = showHiddenBtn;
        domVideoStoryWrapperEl.onmouseenter = showHiddenBtn;
    }else {
        domVideoStoryVideoEl.pause();
        domVideoStoryPlayBtnImgEl.src = 'img/play-white.svg';
        domVideoStoryWrapperEl.onmouseleave = null;
        domVideoStoryWrapperEl.onmouseenter = null;
    }
    
});