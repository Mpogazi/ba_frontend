import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class pubSubService {
	private subjects: Subject<any>[] = [];

	publish(eventName: string) {
		// ensure a subject for the event name exists
		this.subjects[eventName] =
			this.subjects[eventName] || new Subject<any>();
		// publish event
		this.subjects[eventName].next();
	}

	on(eventName: string): Observable<any> {
		// Ensure the subject for event name exists
		this.subjects[eventName] =
			this.subjects[eventName] || new Subject<any>();

		// return observable
		return this.subjects[eventName].asObservable();
	}
}
