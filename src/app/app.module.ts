import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { ToastrService } from './_common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './_errors/error404/error404.component';
import { EventListResolver } from './_resolvers/event-list-resolver.service';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		EventsListComponent,
		EventThumbnailComponent,
		NavComponent,
		EventDetailsComponent,
		CreateEventComponent,
		Error404Component,
		ProfileComponent,
		LoginComponent
	],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule ],
	providers: [ ToastrService, EventListResolver, { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
	if (component.isDirty) return window.confirm('შესანახი გაქ ცვლილებები ჯიგარო, მაინც გახვალ?');

	return true;
}
