import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useImmer } from "use-immer";
import CarouselItem from "./CarouselItem";
import CarouselItemComponent from "./CarouselItemComponent";
import styled, { useTheme } from 'styled-components';
import { createTransitions } from "../../utils/styled-transitions";
import { down } from "styled-breakpoints";

type CarouselProps = {
	items: CarouselItem[]
}

const MoveButton = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 3rem;
	height: 3rem;
	background-color: ${props => props.theme.palette.background.default};
	border-radius: 50%;
	cursor: pointer;
	z-index: 1000;
	border: 1px solid ${props => props.theme.palette.border.main};
	transition: ${createTransitions('border-color')};

	${down('sm')} {
		width: 2rem;
		height: 2rem;
	}

	&::after {
		content: ' ';
		position: absolute;
		width: 10px;
		height: 10px;
		top: 50%;
		border-right: 2px solid ${props => props.theme.palette.text.primary};
		border-bottom: 2px solid ${props => props.theme.palette.text.primary};
		transition: ${createTransitions('border-color')};
	}

	&:hover, &:focus {
		outline: none;
		border: 1px solid ${props => props.theme.palette.secondary.main};

		&::after {
			border-right: 2px solid ${props => props.theme.palette.secondary.main};
			border-bottom: 2px solid ${props => props.theme.palette.secondary.main};
		}
	}
`

const PreviousButton = styled(MoveButton)`
	left: calc(-3rem - 10px);

	${down('sm')} {
		left: calc(-2rem - 10px);
	}

	&::after {
		left: 56%;
		transform: translate(-50%, -50%) rotate(135deg);
	}
`

const NextButton = styled(MoveButton)`
	right: calc(-3rem - 10px);

	${down('sm')} {
		right: calc(-2rem - 10px);
	}

	&::after {
		left: 44%;
		transform: translate(-50%, -50%) rotate(-45deg);
	}
`

const Carousel: FunctionComponent<CarouselProps> = (props) => {
	const [items, setItems] = useImmer(props.items);
	const [index, setIndex] = useState(0);
	const [isMoving, setIsMoving] = useState(false);
	const theme = useTheme();

	const disableInteraction = useCallback(() => {
		setIsMoving(true);
		setTimeout(() => setIsMoving(false), theme.transitions.duration.complex);
	}, [setIsMoving, theme.transitions.duration.complex]);

	const loopValue = (value: number, minimum: number, maximum: number) => {
		if (value < minimum) {
			return maximum + (value % maximum);
		}
		return value % maximum;
	}

	const moveNext = () => {
		if (isMoving) return;

		if (index === items.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	}

	const movePrevious = () => {
		if (isMoving) return;

		if (index === 0) {
			setIndex(items.length - 1);
		} else {
			setIndex(index - 1);
		}
	}

	const canMove = useCallback(() => {
		return items.length > 1;
	}, [items]);

	useEffect(() => {
		setItems(draft => {
			if (items.length > 0) {
				draft[0].active = true
			}

			if (canMove()) {
				draft[1].isNext = true;
				draft[items.length - 1].isPrevious = true;
			}
		});
	}, [items, setItems, canMove])

	useEffect(() => {
		disableInteraction();

		let previous = index - 1;
		let next = index + 1;

		previous = loopValue(previous, 0, items.length);
		next = loopValue(next, 0, items.length);

		setItems(draft => {
			for (let i = 0; i < items.length; i++) {
				draft[i].active = i === index;
				draft[i].isPrevious = i === previous;
				draft[i].isNext = i === next;
			}
		})
	}, [index, items.length, setItems, disableInteraction])

	const onNextKeyDown = (key: string) => {
		if (key === 'Enter') {
			moveNext();
		}
	}

	const onPreviousKeyDown = (key: string) => {
		if (key === 'Enter') {
			movePrevious();
		}
	}

	return (
		<div css={`
			transform-style: preserve-3d;
			display: inline-block;
			width: 70%;
		`}>
			{items.map((item, index) =>
				<CarouselItemComponent key={index} item={item} />
			)}
			<PreviousButton onClick={movePrevious} onKeyDown={(event) => onPreviousKeyDown(event.key)} tabIndex={0}></PreviousButton>
			<NextButton onClick={moveNext} onKeyDown={(event) => onNextKeyDown(event.key)} tabIndex={0}></NextButton>
		</div>
	);
}

export default Carousel;