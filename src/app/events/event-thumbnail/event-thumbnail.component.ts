import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { IEvent } from 'src/app/_interfaces/event.model';

@Component({
	selector: 'app-event-thumbnail',
	templateUrl: './event-thumbnail.component.html',
	styleUrls: [ './event-thumbnail.component.css' ]
})
export class EventThumbnailComponent implements OnInit {
	@Input() event: IEvent;

	constructor() {}

	ngOnInit(): void {}
}
