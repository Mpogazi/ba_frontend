import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpResponseModel,
         Header,
         HttpVerbs,
         HttpRequestModel
} from './http.model';
import { ID } from '../../utils/id.utils';



@Injectable()
export class HttpService {
    private resp: HttpResponseModel = { responseCode: 'Fail', data: 'Sorry' };

    constructor(
        private http: HttpClient,
        private headers: HttpHeaders,
        private id: ID,
    ) {}

    public request(request: HttpRequestModel) {
        const headers = this.extractHeaders(request);
        switch (request.method) {
            case HttpVerbs.GET:
                this.get();
                break;
            case HttpVerbs.POST:
                this.post();
                break;
            case HttpVerbs.PUT:
                this.put();
                break;
            case HttpVerbs.DELETE:
                this.delete();
                break;
            case HttpVerbs.PATCH:
                this.patch();
                break;
            case HttpVerbs.HEAD:
                this.head();
                break;
            case HttpVerbs.TRACE:
                this.trace();
                break;
            case HttpVerbs.OPTIONS:
                this.options();
                break;
            case HttpVerbs.CONNECT:
                this.connect();
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

    private get(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    private post(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    private put(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    private delete(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    private patch(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    private update(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    private head(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    private trace(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    private options(): Observable<HttpResponseModel> {
        return of(this.resp);
    }

    private connect(): Observable<HttpResponseModel> {
        return of(this.resp);
    }
}

