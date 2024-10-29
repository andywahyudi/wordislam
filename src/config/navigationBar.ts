// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Islamic Sources Hub',
		text: 'WordIslam'
	},
	navItems: [
		{ name: 'Tentang Kami', link: '/tentang-kami' },
		{
			name: 'Kontribusi',
			link: '/kontribusi'
		},
		{
			name: 'Submit Konten',
			link: '/submit-konten'
		},
	],
	navActions: [
		// { name: 'Submit Template', link: '/submit-template', style: 'primary', size: 'lg' }
	]
}
