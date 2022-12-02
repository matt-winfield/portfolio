import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from '../../styles/themes';

type SliceState = {
	selectedTheme: ThemeType;
}

const initialState: SliceState = {
	selectedTheme: ThemeType.Dark
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		themeSet: (state, action: PayloadAction<ThemeType>) => {
			state.selectedTheme = action.payload;
		}
	}
});

export const { themeSet } = themeSlice.actions;
export default themeSlice.reducer;