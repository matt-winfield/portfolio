import { IconButton, Tooltip } from '@material-ui/core';
import DarkIcon from '@material-ui/icons/Brightness4';
import LightIcon from '@material-ui/icons/Brightness7';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeSet } from '../store/slices/theme';
import { StoreState } from '../store/store';
import { ThemeType } from '../styles/themes';
import 'styled-components/macro';
import styled from 'styled-components';

const LocalStorageKey = 'SelectedTheme';

const StyledTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))`
	& .MuiTooltip-tooltipPlacementBottom {
		margin: 2px 0;
	}
`

const ThemeToggle = () => {
	const selectedTheme = useSelector((state: StoreState) => state.theme.selectedTheme);
	const [isDark, setIsDark] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const storedTheme = localStorage.getItem(LocalStorageKey);
		if (storedTheme !== null) {
			dispatch(themeSet(storedTheme as ThemeType))
		}
	}, [dispatch])

	useEffect(() => {
		setIsDark(selectedTheme === ThemeType.Dark);
	}, [selectedTheme])

	const onToggleClicked = () => {
		const newTheme = selectedTheme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light;
		dispatch(themeSet(newTheme));
		localStorage.setItem(LocalStorageKey, newTheme);
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