import { IconButton, Tooltip } from '@material-ui/core';
import DarkIcon from '@material-ui/icons/Brightness4';
import LightIcon from '@material-ui/icons/Brightness7';
import styled, { css } from 'styled-components';
import 'styled-components/macro';
import { useToggleableTheme } from '../hooks/useToggleableTheme';

const StyledTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))`
	& .MuiTooltip-tooltipPlacementBottom {
		margin: 2px 0;
	}
`;

const ThemeToggle = () => {
	const [isDark, toggleTheme] = useToggleableTheme();

	const onToggleClicked = () => {
		toggleTheme();
	}

	return (
		<StyledTooltip title="Toggle Theme">
			<IconButton color="primary" onClick={onToggleClicked} name="Dark Mode Toggle">
				{isDark ?
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