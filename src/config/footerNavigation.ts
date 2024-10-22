// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'WordIslam.',
		aboutText:
			'WordIslam.com dikelola secara kolaboratif dan dikurasi oleh sekelompok pengguna dan pengembang yang berdedikasi untuk memastikan bahwa konten yang tersedia di platform kami adalah akurat, terkini, dan sesuai dengan standar keagamaan Islam.',
		logo: {
			src: '/logo.svg',
			alt: 'Platform Literasi Digital Islam',
			text: 'WordIslam.'
		}
	},
	footerColumns: [
		{
			category: 'Platform',
			subCategories: [
				{
					subCategory: 'Terms of Condition',
					subCategoryLink: '/terms'
				},
				{
					subCategory: 'Tanya Jawab',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Changelog',
					subCategoryLink: '/changelog'
				},
			]
		},
		// {
		// 	category: 'Tentang Kami',
		// 	subCategories: [
		// 		{
		// 			subCategory: 'Tentang Kami',
		// 			subCategoryLink: '/'
		// 		},
		// 		// {
		// 		// 	subCategory: 'News',
		// 		// 	subCategoryLink: '/blog'
		// 		// },
		// 		// {
		// 		// 	subCategory: 'Careers',
		// 		// 	subCategoryLink: '/blog'
		// 		// }
		// 	]
		// },
		{
			category: 'Links',
			subCategories: [
				{
					subCategory: 'Kontak',
					subCategoryLink: '/kontak'
				},
				{
					subCategory: 'Donasi',
					subCategoryLink: '/donasi'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© WordIslam 2024.'
	}
}
