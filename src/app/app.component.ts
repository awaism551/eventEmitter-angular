import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {

	even;
	odd;
	constructor() {

	}

	valueReceiverFun(value) {
		console.log('number: ', value);
		if (value % 2 === 0) {
			this.even = value
		} else {
			this.odd = value;
		}
	}
}
