import { Button } from '@material-ui/core';
import { readableColor } from 'polished';
import styled from 'styled-components';
import 'styled-components/macro';

export const ProjectButton = styled(Button)`
	margin: 10px;
	padding: 10px 30px;
	color: ${props => readableColor(props.theme.palette.button.background)};
	background-color: ${props => props.theme.palette.button.background};
	&:hover {
		color: ${props => readableColor(props.theme.palette.button.hover)};
		background-color: ${props => props.theme.palette.button.hover}
	}
`

export default ProjectButton;