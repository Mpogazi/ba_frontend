import { Injectable } from "@angular/core";
import { WindowService } from "./window.service";

@Injectable({ providedIn: "root" })
export class LocalStorageService {
	private storage = this.wd.window.localStorage;
	constructor(private wd: WindowService) {}

	public set(key: string, val: any) {
		if (typeof val === "object") {
			this.storage.setItem(key, JSON.stringify(val));
		} else {
			this.storage.setItem(key, val);
		}
	}

	public get(key: string): any {
		try {
			const a = JSON.parse(this.storage.getItem(key));
			return a;
		} catch (e) {
			return this.storage.getItem(key);
		}
	}

	public remove(key: string): void {
		this.storage.removeItem(key);
	}

	public empty(): void {
		this.storage.clear();
	}
}
