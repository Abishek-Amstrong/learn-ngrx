import * as fromPizzas from "./pizzas.reducer";
import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
} from "@ngrx/store";

export interface ProductState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.reducer,
};

export const getProductsState = createFeatureSelector<ProductState>("products");

// pizzas state
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductState) => state.pizzas
);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
);
