import { MediaPlayer } from './mediaPlayer.js';
import { AutoPlay } from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const $buttonTogglePlay = document.getElementById('toggle-play');
const $buttonToggleMute = document.getElementById('un-mute');

const player = new MediaPlayer({
	el: video,
	plugins: [
		new AutoPlay(),
	],
});

$buttonTogglePlay.onclick = () => player.togglePlay();
$buttonToggleMute.onclick = () => player.toggleMute();
