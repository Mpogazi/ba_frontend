import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from '@shared_services/http.service';
import { HttpResponseModel, HttpRequestModel, HttpVerbs } from '@shared_services/http.model';
import { environment as env } from '@environment/environment';

@Injectable({ providedIn: 'root' })
export class WatchlistService {
	// Getting the email from userservice
	private email: string;
	constructor(private http: HttpService) {}

	public addParticipant$(ptcp: string): Observable<HttpResponseModel> {
		return this.http.request(
			this.http.createReq({ email: this.email, participant: ptcp }, HttpVerbs.POST, [], env.apiUrl)
		);
	}

	public addStock$(stk: string) {
		return this.http.request(
			this.http.createReq({ email: this.email, stock: stk }, HttpVerbs.POST, [], env.apiUrl)
		);
	}

	public rmStock$(stk: string) {
		return this.http.request(
			this.http.createReq({ email: this.email, stock: stk }, HttpVerbs.POST, [], env.apiUrl)
		);
	}

	public rmParticipant$(ptcp: string) {
		return this.http.request(
			this.http.createReq({ email: this.email, participant: ptcp }, HttpVerbs.POST, [], env.apiUrl)
		);
	}
}
