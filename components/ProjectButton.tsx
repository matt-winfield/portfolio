import { Button, ButtonProps } from '@material-ui/core';
import { FC } from 'react';
import { css } from 'styled-components';
import { readableColor } from 'polished';
import 'styled-components/macro';

const ProjectButton: FC<ButtonProps> = (buttonProps) => {
	return <Button {...buttonProps} css={css`
		margin: 10px;
		padding: 10px 30px;
		color: ${props => readableColor(props.theme.palette.button.background)};
		background-color: ${props => props.theme.palette.button.background};
		&:hover {
			color: ${props => readableColor(props.theme.palette.button.hover)};
			background-color: ${props => props.theme.palette.button.hover}
		}
	`}>
		{buttonProps.children}
	</Button>
};

export default ProjectButton;