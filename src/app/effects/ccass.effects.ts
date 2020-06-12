import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { CcassService } from "@shared_services/ccass.service";

@Injectable()
export class ccassEffects {
	constructor(private actions$: Actions, private ccass: CcassService) {}
}
