import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCASTORAGE_KEY = "videoplayer-current-time";


function videoTimeUpdate (evt) {
    localStorage.setItem(LOCASTORAGE_KEY, evt.seconds);
}

player.on('timeupdate', throttle(videoTimeUpdate, 1000));

const saveTime = localStorage.getItem(LOCASTORAGE_KEY);
if(saveTime) {
    player.setCurrentTime(saveTime);
}
