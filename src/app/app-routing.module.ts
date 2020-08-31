import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './_errors/error404/error404.component';
import { EventRouteGuard } from './_guards/event-route.guard';
import { EventListResolver } from './_resolvers/event-list-resolver.service';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
	{ path: 'events/new', component: CreateEventComponent, canDeactivate: [ 'canDeactivateCreateEvent' ] },
	{ path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
	{ path: 'events/:id', component: EventDetailsComponent, canActivate: [ EventRouteGuard ] },
	{ path: '404', component: Error404Component },
	{ path: '', redirectTo: '/events', pathMatch: 'full' },
	{ path: 'user/profile', component: ProfileComponent },
	{ path: 'user/login', component: LoginComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
