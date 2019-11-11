import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpResponseModel } from './http.model';

@Injectable()
export class HttpService {
    private resp: HttpResponseModel = { responseCode: 'Fail', data: 'Sorry' };
    constructor(private http: HttpClient) {

    }

    public request() {}

    public get(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    public post(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    public put(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    public delete(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    public patch(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    public update(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    public head(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    public trace(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    public options(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    public connect(): Observable<HttpResponseModel> {
        return of(this.resp);
    }
}

