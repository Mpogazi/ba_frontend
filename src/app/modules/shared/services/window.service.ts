import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})

export class WindowService {
    private windowObj = window;
    constructor() {}

    public window(): Window {
        return this.windowObj;
    }

    public document(): Document {
        return this.windowObj.document;
    }
}
