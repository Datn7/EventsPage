import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/_services/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/_interfaces/event.model';

@Component({
	selector: 'app-event-details',
	templateUrl: './event-details.component.html',
	styleUrls: [ './event-details.component.css' ]
})
export class EventDetailsComponent implements OnInit {
	event: IEvent;
	constructor(private _eventService: EventService, private _route: ActivatedRoute) {}

	ngOnInit(): void {
		this.event = this._eventService.getEventById(+this._route.snapshot.params['id']);
	}
}
