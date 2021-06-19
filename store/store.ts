import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme';

const reducer = combineReducers({
	theme: themeReducer
});

export const createStore = () => {
	return configureStore({
		reducer
	});
}

const store = createStore();

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export default store;