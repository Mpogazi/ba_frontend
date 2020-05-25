import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { HttpResponseModel, HttpRequestModel, HttpVerbs } from '@shared_services/http.model';
import { environment as env } from '@environment/environment';
import { HttpService } from '@shared_services/http.service';
import { LocalStorageService } from '@shared_services/local-storage.service';
import { shareReplay, tap } from 'rxjs/operators';
import { User } from '@shared_models/user.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public isLoggedIn = false;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpService,
        private localStore: LocalStorageService) {
        this.currentUserSubject = new BehaviorSubject(this.localStore.get('currentUser'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get userValue(): User {
        return this.currentUserSubject.value;
    }

    public login(user: Object): Observable<HttpResponseModel> {
        return this.http.request(
            this.createReq(user, HttpVerbs.POST, [], env.apiUrl + '/login')).pipe(
                tap(this.saveUser),
                shareReplay()
            );
    }

    private saveUser(res: HttpResponseModel) {
        this.localStore.set('currentUser', res.data);
        this.isLoggedIn = true;
        this.currentUserSubject.next(res.data);
    }

    public signup(user: Object): Observable<HttpResponseModel> {
        return this.http.request(
            this.createReq(user, HttpVerbs.POST, [], env.apiUrl + '/signup')).pipe(
                tap(this.saveUser),
                shareReplay());
    }

    public logout(): void {
        this.isLoggedIn = false;
        this.localStore.remove('currentUser');
        this.currentUserSubject.next(null);
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
