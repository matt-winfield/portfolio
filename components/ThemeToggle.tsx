import { IconButton, Tooltip } from '@material-ui/core';
import DarkIcon from '@material-ui/icons/Brightness4';
import LightIcon from '@material-ui/icons/Brightness7';
import styled, { css } from 'styled-components';
import 'styled-components/macro';
import { useToggleableTheme } from '../hooks/useToggleableTheme';
import { ThemeType } from '../styles/themes';

const StyledTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))`
	& .MuiTooltip-tooltipPlacementBottom {
		margin: 2px 0;
	}
`;

const ThemeToggle = () => {
	const { selectedTheme, toggleTheme } = useToggleableTheme();

	const onToggleClicked = () => {
		toggleTheme();
	}

	return (
		<StyledTooltip title="Toggle Theme">
			<IconButton color="primary" onClick={onToggleClicked} name="Dark Mode Toggle">
				{selectedTheme === ThemeType.Dark ?
					<DarkIcon css={css`
						color: ${props => props.theme.palette.text.primary};
					`}></DarkIcon>
					: <LightIcon css={css`
						color: ${props => props.theme.palette.text.primary};
					`}></LightIcon>
				}
			</IconButton>
		</StyledTooltip>
	);
}

export default ThemeToggle;