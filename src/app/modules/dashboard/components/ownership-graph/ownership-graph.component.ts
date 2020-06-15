import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	OnDestroy,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { getTest } from "../../selectors/ccass.selector";
import { testAction } from "../../actions/ccass.actions";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
	selector: "app-ownership-graph",
	templateUrl: "./ownership-graph.component.html",
	styleUrls: ["./ownership-graph.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OwnershipGraphComponent implements OnInit, OnDestroy {
	private unsubscribe: Subject<void> = new Subject<void>();
	public title = "Stock Ownership";
	public size = { w: 1500, h: 300 };
	// public num = this.store.select(getTest).pipe(takeUntil(this.unsubscribe));

	constructor(private store: Store, private cd: ChangeDetectorRef) {}

	ngOnInit() {
		this.store.dispatch(testAction());
	}

	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
