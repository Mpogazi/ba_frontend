import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { HttpResponseModel, HttpRequestModel, HttpVerbs } from '@shared_services/http.model';
import { environment as env } from '@environment/environment';
import { HttpService } from '@shared_services/http.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public isLoggedIn = false;

    constructor(private http: HttpService) { }

    login(): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(val => this.isLoggedIn = true)
        );
    }

    signup(user: Object): Observable<HttpResponseModel> {
        let request = {} as HttpRequestModel;
        request.body = user;
        request.method = HttpVerbs.POST;
        request.options = [];
        request.path = env.apiUrl + '/signup';
        return this.http.request(request);
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
