import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map,
        filter,
} from 'rxjs/operators';
import { HttpResponseModel,
         Header,
         HttpVerbs,
         HttpRequestModel
} from './http.model';
import { ID } from '../utils/id.utils';

/**
 * NEXT STEPS:
 *  --> Abstract error handling
 *  --> Abstract the security settings
 */

@Injectable()
export class HttpService {
    // private resp: HttpResponseModel = { responseCode: 'Fail', data: 'Sorry' };

    constructor(
        private http: HttpClient,
        private id: ID,
    ) {}

    public request(request: HttpRequestModel) {
        const headers = this.extractHeaders(request);
        switch (request.method) {
            case HttpVerbs.GET:
                this.get(request.path, headers);
                break;
            case HttpVerbs.POST:
                this.post(request.path, request.body, headers);
                break;
            case HttpVerbs.PUT:
                this.put(request.path, request.body, headers);
                break;
            case HttpVerbs.DELETE:
                this.delete(request.path, headers);
                break;
            case HttpVerbs.PATCH:
                this.patch(request.path, request.body, headers);
                break;
            case HttpVerbs.HEAD:
                this.head(request.path, headers);
                break;
            case HttpVerbs.OPTIONS:
                this.options(request.path, headers);
                break;
            default:
                break;
        }
    }

    private extractHeaders(req: HttpRequestModel): HttpHeaders {
        const options = req.options;
        const headers = new HttpHeaders();
        let header: Header;
        for (header of options) {
            headers.append(header.key, header.value);
        }
        headers.append('request-id', this.id.generate());
        return headers;
    }

    private get(url: string, options: HttpHeaders ): Observable<HttpResponseModel> {
        return this.http.get(url, {headers: options}).pipe(
            map(x => this.toResponseModel(x))
        );
    }

    private toResponseModel(obj: any): HttpResponseModel {
        const {code, content} = obj;
        return ({responseCode: code, data: content} as HttpResponseModel);
    }

    private post(url: string, body: any, options: HttpHeaders): Observable<HttpResponseModel> {
        return this.http.post(url, body, { headers: options}).pipe(
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

