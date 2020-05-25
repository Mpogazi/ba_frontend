import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '@auth/auth.service';
import { UserService } from '@shared_services/user.service';
import { LocalStorageService } from '@shared_services/local-storage.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private user: UserService,
        private localStore: LocalStorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.localStore.get('currentUser');

        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}