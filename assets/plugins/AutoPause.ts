import type { MediaPlayer } from '../MediaPlayer';

class AutoPause {
	private readonly threshold: number;
	player: MediaPlayer;

	constructor() {
		this.threshold = 0.25;
		this.handleIntersection = this.handleIntersection.bind(this);
		this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
	}

	run(player: MediaPlayer): void {
		this.player = player;
		const observer = new IntersectionObserver(this.handleIntersection, {
			threshold: this.threshold,
		});

		observer.observe(player.media);

		document.addEventListener('visibilitychange', this.handleVisibilityChange);
	}

	private handleIntersection(entries: IntersectionObserverEntry[]): void {
		const entry = entries[0];
		if (entry.intersectionRatio >= this.threshold) {
			this.player.play();
		} else {
			this.player.pause();
		}
	}

	private handleVisibilityChange(): void {
		const isVisible = document.visibilityState === 'visible';
		if (isVisible) {
			this.player.play();
		} else {
			this.player.pause();
		}
	}
}

export { AutoPause };
