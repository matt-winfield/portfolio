import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeSet } from '../store/slices/theme';
import { StoreState } from '../store/store';
import { ThemeType } from '../styles/themes';

const LocalStorageKey = 'SelectedTheme';

const prefersLightMode = () => {
	const lightQuery = '(prefers-color-scheme: light)';
	const match = window.matchMedia(lightQuery);
	return match.matches;
};

export const useToggleableTheme = () => {
	const selectedTheme = useSelector((state: StoreState) => state.theme.selectedTheme);
	const dispatch = useDispatch();

	useEffect(() => {
		const storedTheme = localStorage.getItem(LocalStorageKey);

		if (storedTheme !== null) {
			dispatch(themeSet(storedTheme as ThemeType))
			return;
		}

		if (prefersLightMode()) {
			dispatch(themeSet(ThemeType.Light));
		}
	}, [dispatch])

	const toggleTheme = () => {
		const newTheme = selectedTheme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light;
		dispatch(themeSet(newTheme));
		localStorage.setItem(LocalStorageKey, newTheme);
	}

	return { selectedTheme, toggleTheme };
}