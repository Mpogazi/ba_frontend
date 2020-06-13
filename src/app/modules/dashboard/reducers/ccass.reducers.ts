import { Action, createReducer, on } from "@ngrx/store";
import {} from "../actions/ccass.actions";
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

export const ccassReducer = createReducer(initialState);
