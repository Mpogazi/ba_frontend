import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponseModel, HttpVerbs } from '@shared_services/http.model';
import { environment as env } from '@environment/environment';
import { HttpService } from '@shared_services/http.service';

@Injectable({ providedIn: 'root' })
export class CcassService {
	constructor(private http: HttpService) {}

	public historicalData$(yfcode: string): Observable<HttpResponseModel> {
		return this.http.request(
			this.http.createReq({}, HttpVerbs.GET, [], env.apiUrl + '/historical_stock_info/' + yfcode)
		);
	}

	public staticStockInfo$(): Observable<HttpResponseModel> {
		return this.http.request(
			this.http.createReq({}, HttpVerbs.GET, [], env.apiUrl + '/static_stock_info')
		);
	}
}
