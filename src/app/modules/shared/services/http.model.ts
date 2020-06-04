export interface HttpResponseModel {
	responseCode: string;
	data: any;
}

export enum HttpVerbs {
	GET = "GET",
	POST = "POST",
	PUT = "PUT",
	DELETE = "DELETE",
	PATCH = "PATCH",
	HEAD = "HEAD",
	TRACE = "TRACE",
	OPTIONS = "OPTIONS",
	CONNECT = "CONNECT",
}

export interface HttpRequestModel {
	path: string;
	method: string;
	options: Header[];
	body: any;
}

/**
 * Could be used if the API caller needs
 * to add new headers to the request.
 */
export interface Header {
	key: string;
	value: string;
}
