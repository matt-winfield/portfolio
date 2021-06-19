export default class CarouselItem {
	public title: string;
	public image: StaticImageData;
	public detailsLink?: string;
	public codeLink?: string;
	public demoLink?: string;
	public active?: boolean = false;
	public isNext?: boolean = false;
	public isPrevious?: boolean = false;

	constructor(title: string, image: StaticImageData, detailsLink?: string, codeLink?: string, demoLink?: string) {
		this.title = title;
		this.image = image;
		this.detailsLink = detailsLink;
		this.codeLink = codeLink;
		this.demoLink = demoLink;
	}
}