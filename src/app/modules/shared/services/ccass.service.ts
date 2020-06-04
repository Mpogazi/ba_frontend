import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CcassService {
	constructor(private http: HttpClient) {}
	/**
	 * Write code for get/post/put/delete requests
	 * Generalize the requests code over any return type
	 * Wrapp every request with a request id
	 * report any request that fails
	 */
}
