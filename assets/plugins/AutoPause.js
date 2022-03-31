class AutoPause {
	constructor() {
		this.threshold = 0.25;
		this.handleIntersection = this.handleIntersection.bind(this);
		this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
	}

	run(player) {
		this.player = player;
		const observer = new IntersectionObserver(this.handleIntersection, {
			threshold: this.threshold,
		});

		observer.observe(player.media);

		document.addEventListener('visibilitychange', this.handleVisibilityChange);
	}

	handleIntersection(entries) {
		const entry = entries[0];
		if (entry.intersectionRatio >= this.threshold) {
			this.player.play();
		} else {
			this.player.pause();
		}
	}

	handleVisibilityChange() {
		const isVisible = document.visibilityState === 'visible';
		if (isVisible) {
			this.player.play();
		} else {
			this.player.pause();
		}
	}
}

// function AutoPause() {
// 	this.threshold = 0.25;
// 	this.handleIntersection = this.handleIntersection.bind(this);
// }
//
// AutoPause.prototype.run = function (player) {
// 	this.player = player;
// 	const observer = new IntersectionObserver(this.handleIntersection, {
// 		threshold: this.threshold,
// 	});
//
// 	observer.observe(player.media);
// };
//
// AutoPause.prototype.handleIntersection = function (entries) {
// 	const entry = entries[0];
//
// 	if (entry.intersectionRatio >= this.threshold) {
// 		this.player.play();
// 	} else {
// 		this.player.pause();
// 	}
// };

export { AutoPause };
