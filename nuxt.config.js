import axios from 'axios'
export default {
	// Global page headers: https://go.nuxtjs.dev/config-head

	target: 'static',

	head: {
		title: '阿部守商店',
		htmlAttrs: {
			lang: 'ja'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '漬け焼きという独自の調理法で、「おさかなの素」をはじめとした、こだわりのお魚加工品を製造・販売している阿部守商店の公式通販・オンラインショッピングサイトです。' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ property: 'og:locale', content: 'ja_JP' },
			{ property: 'og:type', content: 'website' },
			{ hid: 'og:sitename', property: 'og:sitename', content: '阿部守商店' },
			{ hid: 'og:title', property: 'og:title', content: '阿部守商店' },
			{ hid: 'og:description', property: 'og:description', content: '漬け焼きという独自の調理法で、「おさかなの素」をはじめとした、こだわりのお魚加工品を製造・販売している阿部守商店の公式通販・オンラインショッピングサイトです。' },
			{ hid: 'og:image', property: 'og:image', content: 'https://abemamoru-shouten.com/ogp.jpg' },
			{ hid: 'og:url', property: 'og:url', content: 'https://abemamoru-shouten.com/' },
			{ name: 'twitter:card', content: 'summary_large_image' },
		],
		script: [
			{ src: '//use.typekit.net/ncj5pgi.js', async: true, defer: true, rel: 'preload' },
			{ src: '/font.js', async: true, defer: true, rel: 'preload' },
			// { src: '//typesquare.com/3/tsst/script/ja/typesquare.js?5ed455a6503047769ad3284fe90393a3&auto_load_font=true' }
		],
		link: [
			{ rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.jpg' },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.png' },
			{ rel: 'apple-touch-icon-precomposed', type: 'image/x-icon', href: '/favicon.jpg' },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/style/initialize.scss',
		'~/assets/style/style.scss',
		'~/assets/style/item.scss',
		'~/assets/style/common.scss'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/gsap',
		// '~/plugins/swiper',
		// '~/plugins/validate',
		// { src: '~/plugins/font', mode: 'client' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/google-gtag',
		'@nuxtjs/date-fns',
	],

	'google-gtag': {
		id: 'G-52F0CN2NSX'
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/sitemap',
		'vue-scrollto/nuxt',
		'nuxt-clipboard2',
		'nuxt-shopify',
		'cookie-universal-nuxt',
	],

	shopify: {
    	/**
     	 * Your shopify domain
     	 */
     	 domain: 'shop.abemamoru-shouten.com',

    	/**
     	 * Your shopify storefront access token
     	 */
		 storefrontAccessToken: 'b5030f0b533a938e8c0949561fe99b13',

    	/**
    	 * This will be larger than the optimized version, as it will contain all fields that are available in the
    	 * Storefront API. (https://help.shopify.com/en/api/custom-storefronts/storefront-api/reference)
    	 * This should only be used when you need to add custom queries to supplement the JS Buy SDK queries.
    	 */
    	 // unoptimized: false,

    	/**
    	 * Set language to return translated content (optional)
    	 */
    	 language: 'ja-JP',
 	},

	sitemap: {
		hostname: 'https://abemamoru-shouten.com',
		path: 'sitemap.xml',
		routes() {
			try {
				return Promise.all([
					axios.post(
						'https://abezuke.myshopify.com/api/2022-04/graphql.json',
						{
							query: 
								`query {     
									products(first: 100) {
										nodes {
											id
											title
											handle
											createdAt
										}
									}
									news: blog(handle: "news") {
										articles(first: 100 sortKey: PUBLISHED_AT reverse: true) {
											nodes {
												id
												title
												handle
												publishedAt
											}
										}
									}
								}`
						},
						{
							headers: {
								'X-Shopify-Storefront-Access-Token': 'c124498210fb26c72f01ce7e67b05c3d',
								'Content-Type': 'application/json'
							}
						}
					),
				])
				.then((res) => {
					const data = res[0].data.data
					const products = data.products.nodes
					const news = data.news.articles.nodes
					return products.map((product) => {
						return {
							url: '/products/' + product.handle,
							lastmod: product.createdAt
						}
					}).concat(
						news.map((article) => {
							return {
								url: '/news/' + article.handle,
								lastmod: article.publishedAt
							}
						})
					)
				})
			} catch(error) {
				console.log('error')
			}
		}
	},

	// generate: {
	// 	fallback: true,
	// 	interval: 100,
	// 	routes: function() {
	// 		try {
	// 			return Promise.all([
	// 				axios.get('https://'),
	// 				axios.get('https://'),
	// 			])
	// 			.then((res) => {
	// 				const productList = res[0].data
	// 				const newsList = res[1].data
	// 				return productList.map((product) => {
	// 					return {
	// 						route: '/preview/product/' + product.slug,
	// 						payload: product
	// 					}
	// 				}).concat(
	// 					newsList.map((news) => {
	// 						return {
	// 							route: '/preview/news/' + news.slug,
	// 							payload: news
	// 						}
	// 					})
	// 				)
	// 			})
	// 		} catch(error) {
	// 			console.log('error')
	// 		}
	// 	}
	// },

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: [
			// 'vee-validate/dist/rules',
			'gsap'
		]
	}
}
