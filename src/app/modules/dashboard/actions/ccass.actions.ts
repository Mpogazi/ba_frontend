import { createAction, props } from "@ngrx/store";

export const historicalDataGet = createAction(
	"[dashboard page] getHistorical",
	props<{ yfcode: string }>()
);

export const staticDataGet = createAction("[dashboard page] getStatic");
export const staticDataSearch = createAction("[dashboard page] searchStatic");
export const ownershipSearch = createAction(
	"[dashboard page] searchOwnership",
	props<{ yfcode: string }>()
);
export const ownershipGet = createAction(
	"[dashboard page] getOwnership",
	props<{ yfcode: string }>()
);
export const testAction = createAction("[dashboard page] test");
