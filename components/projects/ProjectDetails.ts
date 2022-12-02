import { StaticImageData } from 'next/image';

export class ProjectDetails {
	public title: string;
	public image: StaticImageData;
	public detailsLink?: string;
	public codeLink?: string;
	public demoLink?: string;

	constructor(title: string, image: StaticImageData, detailsLink?: string, codeLink?: string, demoLink?: string) {
		this.title = title;
		this.image = image;
		this.detailsLink = detailsLink;
		this.codeLink = codeLink;
		this.demoLink = demoLink;
	}
}