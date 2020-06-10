import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import {
	HttpResponseModel,
	HttpRequestModel,
	HttpVerbs,
} from "@shared_services/http.model";
import { environment as env } from "@environment/environment";
import { HttpService } from "./http.service";

@Injectable({ providedIn: "root" })
export class CcassService {
	constructor(private http: HttpService) {}

	public historicalData$(): Observable<HttpResponseModel> {
		return this.http.request(
			this.http.createReq({}, HttpVerbs.GET, [], env.apiUrl)
		);
	}
}
