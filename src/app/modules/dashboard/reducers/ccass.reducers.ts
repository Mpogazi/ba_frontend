import { Action, createReducer, on } from "@ngrx/store";
import * as ccassActions from "../actions/ccass.actions";
import * as models from "@shared_models/ccass.model";

export const ccassFeatureKey = "ccass";

export interface State {
	static_data: { [key: string]: models.stockInfo };
	historical_data: { [key: string]: any };
	ownership: { [key: string]: any };
}

export const initialState: State = {
	static_data: {},
	historical_data: {},
	ownership: {},
};

const ccassReducer = createReducer(
	initialState,
	on(ccassActions.historicalDataGet, (state) => ({ ...state })),
	on(ccassActions.staticDataGet, (state) => ({ ...state })),
	on(ccassActions.staticDataSearch, (state) => ({ ...state })),
	on(ccassActions.ownershipGet, (state) => ({ ...state })),
	on(ccassActions.ownershipSearch, (state) => ({ ...state }))
);

export function reducer(state: State | undefined, action: Action) {
	return ccassReducer(state, action);
}
