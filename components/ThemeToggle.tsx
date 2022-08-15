import { IconButton, Tooltip } from '@material-ui/core';
import DarkIcon from '@material-ui/icons/Brightness4';
import LightIcon from '@material-ui/icons/Brightness7';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import 'styled-components/macro';
import { themeSet } from '../store/slices/theme';
import { StoreState } from '../store/store';
import { ThemeType } from '../styles/themes';

const LocalStorageKey = 'SelectedTheme';

const StyledTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))`
	& .MuiTooltip-tooltipPlacementBottom {
		margin: 2px 0;
	}
`;

const prefersDarkMode = () => {
	const darkQuery = '(prefers-color-scheme: dark)';
	const match = window.matchMedia(darkQuery);
	return match.matches;
};

const useTheme = (): [boolean, () => void] => {
	const selectedTheme = useSelector((state: StoreState) => state.theme.selectedTheme);
	const dispatch = useDispatch();

	useEffect(() => {
		const storedTheme = localStorage.getItem(LocalStorageKey);

		if (storedTheme !== null) {
			dispatch(themeSet(storedTheme as ThemeType))
			return;
		}

		if (prefersDarkMode()) {
			dispatch(themeSet(ThemeType.Dark));
		}
	}, [dispatch])

	const toggleTheme = () => {
		const newTheme = selectedTheme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light;
		dispatch(themeSet(newTheme));
		localStorage.setItem(LocalStorageKey, newTheme);
	}

	return [selectedTheme === ThemeType.Dark, toggleTheme];
}

const ThemeToggle = () => {
	const [isDark, toggleTheme] = useTheme();

	const onToggleClicked = () => {
		toggleTheme();
	}

	return (
		<StyledTooltip title="Toggle Theme">
			<IconButton color="primary" onClick={onToggleClicked} name="Dark Mode Toggle">
				{isDark ?
					<DarkIcon></DarkIcon>
					: <LightIcon></LightIcon>
				}
			</IconButton>
		</StyledTooltip>
	);
}

export default ThemeToggle;