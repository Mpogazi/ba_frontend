import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {
    map
} from 'rxjs/operators';
import {
    HttpResponseModel,
    Header,
    HttpVerbs,
    HttpRequestModel
} from './http.model';
import { idGenerate } from '../utils/shared.utils';

/**
 * NEXT STEPS:
 *  --> Abstract error handling
 *  --> Abstract the security settings
 */

@Injectable({ providedIn: 'root' })
export class HttpService {
    // private resp: HttpResponseModel = { responseCode: 'Fail', data: 'Sorry' };

    constructor(
        private http: HttpClient
    ) { }

    public request(request: HttpRequestModel) {
        const headers = this.extractHeaders(request);
        switch (request.method) {
            case HttpVerbs.GET:
                return this.get(request.path, headers);
            case HttpVerbs.POST:
                return this.post(request.path, request.body, headers);
            case HttpVerbs.PUT:
                return this.put(request.path, request.body, headers);
            case HttpVerbs.DELETE:
                return this.delete(request.path, headers);
            case HttpVerbs.PATCH:
                return this.patch(request.path, request.body, headers);
            case HttpVerbs.HEAD:
                return this.head(request.path, headers);
            case HttpVerbs.OPTIONS:
                return this.options(request.path, headers);
            default:
                return throwError(new Error('Method not recognized!'));
        }
    }

    private extractHeaders(req: HttpRequestModel): HttpHeaders {
        const options = req.options;
        const headers = new HttpHeaders();
        let header: Header;
        for (header of options) {
            headers.append(header.key, header.value);
        }
        headers.append('request-id', idGenerate());
        return headers;
    }

    private get(url: string, options: HttpHeaders): Observable<HttpResponseModel> {
        return this.http.get(url, { headers: options }).pipe(
            map(x => this.toResponseModel(x))
        );
    }

    private toResponseModel(obj: any): HttpResponseModel {
        const { code, content } = obj;
        return ({ responseCode: code, data: content } as HttpResponseModel);
    }

    private post(url: string, body: any, options: HttpHeaders): Observable<HttpResponseModel> {
        console.log('Posting the request');
        return this.http.post(url, body, { headers: options }).pipe(
            map(x => this.toResponseModel(x))
        );
    }

    private put(url: string, body: any, options: HttpHeaders): Observable<HttpResponseModel> {
        return this.http.put(url, body, { headers: options }).pipe(
            map(x => this.toResponseModel(x))
        );
    }

    private delete(url: string, options: HttpHeaders): Observable<HttpResponseModel> {
        return this.http.delete(url, { headers: options }).pipe(
            map(x => this.toResponseModel(x))
        );
    }

    private patch(url: string, body: any, options: HttpHeaders): Observable<HttpResponseModel> {
        return this.http.patch(url, body, { headers: options }).pipe(
            map(x => this.toResponseModel(x))
        );
    }

    private head(url: string, options: HttpHeaders): Observable<HttpResponseModel> {
        return this.http.head(url, { headers: options }).pipe(
            map(x => this.toResponseModel(x))
        );
    }

    private options(url: string, options: HttpHeaders): Observable<HttpResponseModel> {
        return this.http.options(url, { headers: options }).pipe(
            map(x => this.toResponseModel(x))
        );
    }
}

