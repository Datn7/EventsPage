import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/_services/event.service';
import { ToastrService } from 'src/app/_common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/_interfaces/event.model';

@Component({
	selector: 'app-events-list',
	templateUrl: './events-list.component.html',
	styleUrls: [ './events-list.component.css' ]
})
export class EventsListComponent implements OnInit {
	events: IEvent[];

	constructor(
		private _eventService: EventService,
		private _toastrService: ToastrService,
		private _route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.events = this._route.snapshot.data['events'];
	}

	handleThumbClick(eventName) {
		this._toastrService.success(eventName);
	}
}
