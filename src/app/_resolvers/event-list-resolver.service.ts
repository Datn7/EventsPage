import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../_services/event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
	constructor(private _eventService: EventService) {}

	resolve() {
		return this._eventService.getEvents().pipe(map((events) => events));
	}
}
