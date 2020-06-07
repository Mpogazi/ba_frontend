import { Injectable } from "@angular/core";
import {
	CanActivate,
	Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	CanActivateChild,
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(private auth: AuthService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const currUser = this.auth.userValue;
		if (currUser) {
			// logged in so return true
			return true;
		}

		this.router.navigate(["/home/login"]);
		return false;
	}

	canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		return this.canActivate(route, state);
	}
}
