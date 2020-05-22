import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpResponseModel, HttpRequestModel, HttpVerbs } from '@shared_services/http.model';
import { environment as env } from '@environment/environment';
import { HttpService } from '@shared_services/http.service';
import { LocalStorageService } from '@shared_services/local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public isLoggedIn = false;

    constructor(private http: HttpService,
        private localStore: LocalStorageService) { }

    public login(user: Object): Observable<HttpResponseModel> {
        return this.http.request(
            this.createReq(user, HttpVerbs.POST, [], env.apiUrl + '/login'));
    }

    public signup(user: Object): Observable<HttpResponseModel> {
        return this.http.request(
            this.createReq(user, HttpVerbs.POST, [], env.apiUrl + '/signup'));
    }

    public logout(): void {
        this.isLoggedIn = false;
    }

    private createReq(body: Object, method: string, options: [], path: string) {
        let request = {} as HttpRequestModel;
        request.body = body;
        request.method = method;
        request.options = options;
        request.path = path;
        return request;
    }
}
