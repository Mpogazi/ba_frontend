import { Injectable } from "@angular/core";

import { Observable, BehaviorSubject } from "rxjs";
import { HttpResponseModel, HttpVerbs } from "@shared_services/http.model";
import { environment as env } from "@environment/environment";
import { HttpService } from "@shared_services/http.service";
import { LocalStorageService } from "@shared_services/local-storage.service";
import { map } from "rxjs/operators";
import { User } from "@shared_models/user.model";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	public isLoggedIn = false;
	private currentUserSubject: BehaviorSubject<User>;
	public currentUser: Observable<User>;

	constructor(private http: HttpService, private loc: LocalStorageService) {
		this.currentUserSubject = new BehaviorSubject<User>(
			this.loc.get("currentUser")
		);
		this.currentUser = this.currentUserSubject.asObservable();
	}

	public get userValue(): User {
		return this.currentUserSubject.value;
	}

	public login(user: Object): Observable<HttpResponseModel> {
		return this.http
			.request(
				this.http.createReq(
					user,
					HttpVerbs.POST,
					[],
					env.apiUrl + "/login"
				)
			)
			.pipe(
				map((res) => {
					this.loc.set("currentUser", res.data);
					this.currentUserSubject.next(res.data);
					this.isLoggedIn = true;
					return res;
				})
			);
	}

	public signup(user: Object): Observable<HttpResponseModel> {
		return this.http
			.request(
				this.http.createReq(
					user,
					HttpVerbs.POST,
					[],
					env.apiUrl + "/signup"
				)
			)
			.pipe(
				map((res) => {
					this.loc.set("currentUser", res.data);
					this.currentUserSubject.next(res.data);
					this.isLoggedIn = true;
					return res;
				})
			);
	}

	public logout(): void {
		this.isLoggedIn = false;
		localStorage.removeItem("currentUser");
		this.currentUserSubject.next(null);
	}
}
