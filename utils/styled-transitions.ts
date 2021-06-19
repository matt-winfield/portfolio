const defaultTime = 300;
const defaultEasingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
const defaultDelay = 0;

export type Props = {
	theme?: {
		transitions?: {
			duration?: {
				standard?: number
			}
			easing?: string,
			delay?: number
		}
	}
};

const getTransitionForProperty = (property: string, time: number, easingFunction: string, delay: number): string => {
	return `${property} ${time}ms ${easingFunction} ${delay}ms`;
}

export const createTransitions = (properties: string | string[], time?: number, easingFunction?: string, delay?: number): (props: Props) => string => {
	return (props) => {
		if (properties.length === 0) {
			return '';
		}

		const t = time ?? (props.theme?.transitions?.duration?.standard ?? defaultTime);
		const f = easingFunction ?? (props.theme?.transitions?.easing) ?? defaultEasingFunction;
		const d = delay ?? (props.theme?.transitions?.delay ?? defaultDelay);

		if (typeof properties === "string") {
			return getTransitionForProperty(properties, t, f, d);
		}

		let results: string[] = [];
		for (let property of properties) {
			results.push(getTransitionForProperty(property, t, f, d));
		}

		return results.join(', ');
	};
}