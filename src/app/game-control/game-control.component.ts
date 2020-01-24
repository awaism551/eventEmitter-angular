import { Component, OnInit, EventEmitter, Output } from "@angular/core";

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
	@Output() valueEmitter = new EventEmitter<number>();
	constructor() { }

	ngOnInit() { }

	start() {
		this.interval = setInterval(() => {
			this.value = Math.floor((Math.random() * 100) + 1);
			this.valueEmitter.emit(this.value);
		}, 2500);
	}

	stop() {
		clearInterval(this.interval);
	}
}
