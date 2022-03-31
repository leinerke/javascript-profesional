import { MediaPlayer } from './mediaPlayer';
import { AutoPlay } from './plugins/AutoPlay';
import { AutoPause } from './plugins/AutoPause';

const video = document.querySelector('video');
const $buttonTogglePlay: HTMLElement = document.getElementById('toggle-play');
const $buttonToggleMute: HTMLElement = document.getElementById('un-mute');

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
