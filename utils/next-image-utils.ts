type ImageDimensions = {
	width: number,
	height: number
}

export const heightAspectRatio = (image: StaticImageData, height: number): ImageDimensions => {
	return {
		height,
		width: height * (image.width / image.height)
	};
}

export const widthAspectRatio = (image: StaticImageData, width: number): ImageDimensions => {
	return {
		width,
		height: width * (image.height / image.width)
	};
}