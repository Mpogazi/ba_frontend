import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { pubSubService } from './pub-sub.service';
import { Observable } from 'rxjs';

describe('Testing Publish Subscribe Service', () => {
    let pubsub: pubSubService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [pubSubService]
        });

        pubsub = TestBed.get(pubSubService);
        httpMock = TestBed.get(HttpTestingController);
        let weirdEvent = pubsub.publish('Awkward');
    });

    it('Should have the service instance', () => {
        expect(pubsub).toBeDefined();
    });

    it('Should produce an observable', (): void => {
        let result: Observable<any> = pubsub.on('Dummy');
        expect(result instanceof Observable).toBeTruthy();
    });

    it('Should be able to listen to an event', () => {
        let pubsubResult = pubsub.on('Awkward');
        pubsubResult.subscribe((e: any) => {
            expect(e).toEqual('Awkward');
        })
    });
});