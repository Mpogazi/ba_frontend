import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { CcassService } from "src/app/modules/dashboard/services/ccass.service";

@Injectable()
export class CcassEffects {
	staticData$ = createEffect(() =>
		this.actions$.pipe(
			ofType("[dashboard page] getStatic"),
			mergeMap(() =>
				this.ccass.staticStockInfo$().pipe(
					map((staticData) => ({
						type: "[dashboard page] getStatic getStatic Success",
						payload: staticData,
					})),
					catchError(() =>
						of({ type: "[dashboard page] getStatic Error" })
					)
				)
			)
		)
	);
	constructor(private actions$: Actions, private ccass: CcassService) {}
}
