import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	userName;
	password;

	constructor(private _authService: AuthService, private _router: Router) {}

	ngOnInit(): void {}

	login(formValues) {
		this._authService.loginUser(formValues.userName, formValues.password);
		this._router.navigate([ '/events' ]);
	}

	cancel() {
		this._router.navigate([ '/events' ]);
	}
}
