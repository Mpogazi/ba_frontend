import {
    Component,
    OnDestroy,
    Input,
    OnInit,
    OnChanges,
    SimpleChange,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Size, NgxSpinner, DEFAULTS, PRIMARY_SPINNER, LOADERS } from '../../enum/spinner/spinner.enum';
import { NgxSpinnerService } from '../../services/spinner/spinner.service';

@Component({
    selector: 'spinner',
    templateUrl: 'spinner.component.html',
    styleUrls: ['spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('fadeIn', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [
                style({ opacity: 0 }),
                animate(300)
            ]),
            transition(':leave',
                animate(200, style({ opacity: 0 })))
        ])
    ]
})
export class SpinnerComponent implements OnDestroy, OnInit, OnChanges {

    /**
     * To set backdrop color
     * Only supports RGBA color format
     * @memberof SpinnerComponent
     */
    @Input() bdColor: string;
    /**
     * To set spinner size
     *
     * @memberof SpinnerComponent
     */
    @Input() size: Size;
    /**
     * To set spinner color(DEFAULTS.SPINNER_COLOR)
     *
     * @memberof SpinnerComponent
     */
    @Input() color: string;
    /**
     * To set type of spinner
     *
     * @memberof SpinnerComponent
     */
    @Input() type: string;
    /**
     * To toggle fullscreen mode
     *
     * @memberof SpinnerComponent
     */
    @Input() fullScreen: boolean;
    /**
     * Spinner name
     *
     * @memberof SpinnerComponent
     */
    @Input() name: string;
    /**
     * z-index value
     *
     * @memberof SpinnerComponent
     */
    @Input() zIndex: number;
    /**
     * Spinner Object
     *
     * @memberof SpinnerComponent
     */
    spinner: NgxSpinner = new NgxSpinner();
    /**
     * Array for spinner's divs
     *
     * @memberof SpinnerComponent
     */
    divArray: Array<number>;
    /**
     * Counter for div
     *
     * @memberof SpinnerComponent
     *
     */
    divCount: number;
    /**
     * Show spinner
     *
     * @memberof SpinnerComponent
    **/
    show: boolean;
    /**
     * Unsubscribe from spinner's observable
     *
     * @memberof SpinnerComponent
    **/
    ngUnsubscribe: Subject<void> = new Subject();

    /**
     * Creates an instance of SpinnerComponent.
     *
     * @memberof SpinnerComponent
     */
    constructor(private spinnerService: NgxSpinnerService, private changeDetector: ChangeDetectorRef) {
        this.bdColor = DEFAULTS.BD_COLOR;
        this.zIndex = DEFAULTS.Z_INDEX;
        this.color = DEFAULTS.SPINNER_COLOR;
        this.type = DEFAULTS.SPINNER_TYPE;
        this.size = 'large';
        this.fullScreen = true;
        this.name = PRIMARY_SPINNER;

        this.divArray = [];
        this.divCount = 0;
        this.show = false;
    }
    /**
     * Initialization method
     *
     * @memberof SpinnerComponent
     */
    ngOnInit() {
        this.setDefaultOptions();
        this.spinnerService.getSpinner(this.name)
            .pipe(
                takeUntil(this.ngUnsubscribe)
            )
            .subscribe((spinner: NgxSpinner) => {
                this.setDefaultOptions();
                Object.assign(this.spinner, spinner);
                if (spinner.show) {
                    this.onInputChange();
                }
                this.changeDetector.markForCheck();
            });
    }
    /**
     * To set default ngx-spinner options
     *
     * @memberof SpinnerComponent
     */
    setDefaultOptions = () => {
        this.spinner = new NgxSpinner({
            name: this.name,
            bdColor: this.bdColor,
            size: this.size,
            color: this.color,
            type: this.type,
            fullScreen: this.fullScreen,
            divArray: this.divArray,
            divCount: this.divCount,
            show: this.show,
            zIndex: this.zIndex,
        });
    }
    /**
     * On changes event for input variables
     *
     * @memberof SpinnerComponent
     */
    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        for (const propName in changes) {
            if (propName) {
                const changedProp = changes[propName];
                if (changedProp.isFirstChange()) {
                    return;
                } else if (typeof changedProp.currentValue !== 'undefined' && changedProp.currentValue !== changedProp.previousValue) {
                    if (changedProp.currentValue !== '') {
                        this.spinner[propName] = changedProp.currentValue;
                    }
                }
            }
        }
    }
    /**
     * To get class for spinner
     *
     * @memberof SpinnerComponent
     */
    getClass(type: string, size: Size): string {
        this.spinner.divCount = LOADERS[type];
        this.spinner.divArray = Array(this.spinner.divCount).fill(0).map((x, i) => i);
        let sizeClass = '';
        switch (size.toLowerCase()) {
            case 'small':
                sizeClass = 'la-sm';
                break;
            case 'medium':
                sizeClass = 'la-2x';
                break;
            case 'large':
                sizeClass = 'la-3x';
                break;
            default:
                break;
        }
        return 'la-' + type + ' ' + sizeClass;
    }

    onInputChange() {
        this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}