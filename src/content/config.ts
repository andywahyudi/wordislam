import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			price: z.string(),
			image: z.string(),
			author: z.string(),
			tags: z.array(z.string()),
			getStarted: z.string(),
			liveDemo: z.string(),
		})
})

export const collections = {
	posts: blogCollection
}
