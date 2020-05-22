import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CookieService {
    constructor() { }

    public check(name: string): boolean {
        if (typeof document === 'undefined') { return false; }
        name = encodeURIComponent(name);
        const regexp = new RegExp('(?:^' + name + '|;\\s*' + name + ')=(.*?)(?:;|$)', 'g');
        const exists = regexp.test(document.cookie);
        return exists;
    }

    public set(name: string, value: string, expires?: number | Date,
        path?: string, domain?: string, secure?: boolean): void {

        let cookieStr = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';

        if (expires) {
            if (typeof expires === 'number') {
                // tslint:disable-next-line: prefer-const
                let dtExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
            } else {
                cookieStr += 'expires=' + expires.toUTCString() + ';';
            }
        }

        if (!path) { path = '/'; }
        cookieStr += 'path=' + path + ';';
        if (domain) { cookieStr += 'domain=' + domain + ';'; }
        if (secure) { cookieStr += 'secure;'; }
        document.cookie = cookieStr;
    }

    public get(name: string): string {
        if (this.check(name)) {
            name = encodeURIComponent(name);
            const regexp = new RegExp('(?:^' + name + '|;\\s*' + name + ')=(.*?)(?:;|$)', 'g');
            const result = regexp.exec(document.cookie);
            return decodeURIComponent(result[1]);
        } else {
            return '';
        }
    }

    public getAll(): any {
        const cookies = {};

        if (document.cookie && document.cookie !== '') {
            const split = decodeURIComponent(document.cookie).split(';');
            for (const s of split) {
                const currCookie = s.split('=');
                currCookie[0] = currCookie[0].replace(/^ /, '');
                cookies[currCookie[0]] = currCookie[1];
            }
        }
        return cookies;
    }

    public delete(name: string, path?: string, domain?: string): void {
        this.set(name, '', -1, path, domain);
    }

    public deleteAll(path?: string, domain?: string): void {
        const cookies: any = this.getAll();

        for (const cookieName of Object.keys(cookies)) {
            this.delete(cookieName, path, domain);
        }
    }
}
