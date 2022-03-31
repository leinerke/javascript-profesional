import { MediaPlayer } from '@leinerke/mediaplayer';
import { AutoPlay } from '@leinerke/mediaplayer/lib/plugins/AutoPlay';
import { AutoPause } from '@leinerke/mediaplayer/lib/plugins/AutoPause';
import { AdsPlugin } from '@leinerke/mediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const $buttonTogglePlay: HTMLElement = document.getElementById('toggle-play');
const $buttonToggleMute: HTMLElement = document.getElementById('un-mute');

const player = new MediaPlayer({
	el: video,
	plugins: [
		new AutoPlay(),
		new AutoPause(),
		new AdsPlugin()
	],
});

$buttonTogglePlay.onclick = () => player.togglePlay();
$buttonToggleMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch(error => {
		console.error(error.message);
	});
}
