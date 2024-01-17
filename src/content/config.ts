import { defineCollection, z } from "astro:content"

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date().or(z.string()).optional(),
		draft: z.boolean().default(false).optional(),
	}),
})

const pagessCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			ogImage: image().optional(),
		}),
})

export const collections = {
	posts: postsCollection,
	pages: pagessCollection,
}
