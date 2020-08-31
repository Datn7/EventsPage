import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../_services/event.service';

@Injectable({
	providedIn: 'root'
})
export class EventRouteGuard implements CanActivate {
	constructor(private _eventService: EventService, private _router: Router) {}

	canActivate(route: ActivatedRouteSnapshot) {
		const eventExists = !!this._eventService.getEventById(+route.params['id']);

		if (!eventExists) {
			this._router.navigate([ '404' ]);
		}

		return eventExists;
	}
}
