import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-game-control",
	templateUrl: "./game-control.component.html",
	styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
	value = 0;
	oddValue;
	evenValue;
	interval;
	constructor() { }

	ngOnInit() { }

	start() {
		this.interval = setInterval(() => {
			this.value = Math.floor((Math.random() * 100) + 1);
			if (this.value % 2 === 0) {
				// value is even
				this.evenValue = this.value;
			} else {
				// value is odd
				this.oddValue = this.value;
			}
		}, 2500);
	}

	stop() {
		clearInterval(this.interval);
	}
}
