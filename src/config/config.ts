// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: 'light'
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'WordIslam. Islamic Sources Hub',
	siteDescription:
		'WordIslam is an Islamic Sources Hub.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'WordIslam. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'light',
	scrollAnimations: true
}
