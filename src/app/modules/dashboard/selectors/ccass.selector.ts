import { createSelector, createFeatureSelector } from "@ngrx/store";
import { State } from "../reducers/ccass.reducers";

const ccassState = createFeatureSelector<State>("ccass");
export const getTest = createSelector(ccassState, (state: State) => state.test);
export const staticData = createSelector(
	ccassState,
	(state: State) => state.static_data
);
export const historicalData = createSelector(
	ccassState,
	(state: State) => state.historical_data
);
export const ownershipData = createSelector(
	ccassState,
	(state: State) => state.ownership
);
