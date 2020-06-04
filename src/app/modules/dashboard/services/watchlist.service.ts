import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpService } from "@shared_services/http.service";
import {
	HttpResponseModel,
	HttpRequestModel,
	HttpVerbs,
} from "@shared_services/http.model";

@Injectable({
	providedIn: "root",
})
export class WatchlistService {
	constructor(private http: HttpService) {}

	public addParticipant() {}

	public addStock() {}
}
