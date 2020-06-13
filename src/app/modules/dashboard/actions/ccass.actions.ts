import { createAction, props } from "@ngrx/store";

export const historicalDataActions = createAction(
	"[dashboard page] loadHistorical",
	props<{ yfcode: string }>()
);

export const staticDataGet = createAction("[dashboard page] get");
export const staticDataSearch = createAction("");
export const ownershipSearch = createAction(
	"[dashboard page] search",
	props<{ yfcode: string }>()
);
export const ownershipGet = createAction(
	"[dashboard page] get",
	props<{ yfcode: string }>()
);
