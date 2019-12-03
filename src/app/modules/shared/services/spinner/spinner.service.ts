import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
    private overlayRef: OverlayRef = null;

    constructor(private overlay: Overlay) {}
}
