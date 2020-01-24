import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
	selector: 'app-even',
	templateUrl: './even.component.html',
	styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {


	evenValues = [];
	@Input() evenValue;
	constructor() { }

	ngOnInit() {
	}

	ngOnChanges() {
		this.evenValues.push(this.evenValue);
	}

}
