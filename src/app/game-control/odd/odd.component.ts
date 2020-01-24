import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
	selector: "app-odd",
	templateUrl: "./odd.component.html",
	styleUrls: ["./odd.component.css"]
})
export class OddComponent implements OnInit, OnChanges {

	oddValues = [];
	@Input() oddValueProperty;
	constructor() { }

	ngOnInit() { }

	ngOnChanges() {
		this.oddValues.push(this.oddValueProperty);
	}
}
