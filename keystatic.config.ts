import { collection, config, fields } from "@keystatic/core"

export default config({
	storage: { kind: "local" },
	collections: {
		posts: collection({
			label: "Посты",
			slugField: "title",
			path: "src/content/posts/*",
			entryLayout: "content",
			format: {
				contentField: "content",
			},
			schema: {
				title: fields.slug({ name: { label: "Заголовок" } }),
				description: fields.text({
					label: "Описание",
					description: "от 20 до 150 символов",
				}),
				pubDate: fields.datetime({
					label: "Время",
					description: "Время публикации",
				}),
				draft: fields.checkbox({
					label: "Draft",
					description: "Set this post as draft to prevent it from being published",
				}),
				content: fields.document({
					label: "Контент",
					formatting: true,
					dividers: true,
					links: true,
					images: {
						directory: "src/assets/images/posts",
						publicPath: "../../assets/images/posts/",
					},
				}),
			},
		}),

		pages: collection({
			label: "Страницы",
			slugField: "title",
			path: "src/content/pages/*",
			entryLayout: "content",
			format: {
				contentField: "content",
			},
			schema: {
				title: fields.slug({ name: { label: "Заголовок страницы" } }),
				description: fields.text({
					label: "Описание страницы",
					description: "до 145 символов",
					validation: { length: { min: 20, max: 150 } },
				}),
				ogImage: fields.image({
					label: "ogImage (изображение страницы 1200x630)",
					directory: "src/assets/images/pages",
					publicPath: "../../assets/images/pages/",
				}),
				content: fields.document({
					label: "Контент страницы",
					formatting: true,
					dividers: true,
					links: true,
					images: {
						directory: "src/assets/images/pages",
						publicPath: "../../assets/images/pages/",
					},
				}),
			},
		}),
	},
})
