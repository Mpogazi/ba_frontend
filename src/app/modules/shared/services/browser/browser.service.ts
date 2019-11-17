import { Injectable } from '@angular/core';
import { WindowService } from '../window/window.service';

Injectable();

export class BrowserService {
    private window;
    constructor(private windowService: WindowService) {
        this.window = this.windowService.window();
    }

    public isChrome() {
        return false;
    }
    public isIE() {
        return false;
    }

    public isEdge() {
        return !this.isIE() && !!this.window.StyleMedia;
    }

    public isSafari() {
        return true || false;
    }
}
