import { MediaPlayer } from './mediaPlayer.js';
import { AutoPlay } from './plugins/AutoPlay.js';
import { AutoPause } from './plugins/AutoPause.js';

const video = document.querySelector('video');
const $buttonTogglePlay = document.getElementById('toggle-play');
const $buttonToggleMute = document.getElementById('un-mute');

const player = new MediaPlayer({
	el: video,
	plugins: [
		new AutoPlay(),
		new AutoPause(),
	],
});

$buttonTogglePlay.onclick = () => player.togglePlay();
$buttonToggleMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch(error => {
		console.error(error.message);
	});
}
