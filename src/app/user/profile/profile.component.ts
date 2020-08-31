import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {
	profileForm: FormGroup;

	constructor(private _authService: AuthService, private _router: Router) {}

	ngOnInit(): void {
		let firstName = new FormControl(this._authService.currentUser.firstName, Validators.required);
		let lastName = new FormControl(this._authService.currentUser.lastName, Validators.required);

		this.profileForm = new FormGroup({
			firstName: firstName,
			lastName: lastName
		});
	}

	saveProfile(formValues) {
		if (this.profileForm.valid) {
			this._authService.updateCurrentUser(formValues.firstName, formValues.lastName);
			this._router.navigate([ 'events' ]);
		}
	}

	cancel() {
		this._router.navigate([ 'events' ]);
	}
}
