import { createAction, props } from "@ngrx/store";

export const historicalData = createAction(
	"[Dashboard Page] loadHistorical",
	props<{ yfcode: string }>()
);

export const staticData = createAction("[Dashboard Page] loadStatic");
