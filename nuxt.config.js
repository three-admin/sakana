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
			{ hid: 'description', name: 'description', content: '「おかさなの素」をはじめとした、焼き漬けという伝統技法と独自の調理法を組み合わせ、職人が徹底してこだわってつくったお魚加工品を製造・販売している、阿部守（あべまもる）商店の公式通販・オンラインショッピングサイトです。' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ property: 'og:locale', content: 'ja_JP' },
			{ property: 'og:type', content: 'website' },
			{ hid: 'og:sitename', property: 'og:sitename', content: '阿部守商店' },
			{ hid: 'og:title', property: 'og:title', content: '阿部守商店' },
			{ hid: 'og:description', property: 'og:description', content: '「おかさなの素」をはじめとした、焼き漬けという伝統技法と独自の調理法を組み合わせ、職人が徹底してこだわってつくったお魚加工品を製造・販売している、阿部守（あべまもる）商店の公式通販・オンラインショッピングサイトです。' },
			{ hid: 'og:image', property: 'og:image', content: 'https://abemamoru-shouten.com/ogp.jpg' },
			{ hid: 'og:url', property: 'og:url', content: 'https://abemamoru-shouten.com/' },
			{ name: 'twitter:card', content: 'summary_large_image' },
		],
		script: [
			// { src: '//typesquare.com/3/tsst/script/ja/typesquare.js?5ed455a6503047769ad3284fe90393a3&auto_load_font=true' }
		],
		link: [
			{ rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.jpg' },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.png' },
			{ rel: 'apple-touch-icon-precomposed', type: 'image/x-icon', href: '/favicon.jpg' }
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
		{ src: '~/plugins/map', mode: 'client' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/google-gtag',
		'@nuxt/image',
		'@nuxtjs/date-fns',
	],

	'google-gtag': {
		id: 'G-52F0CN2NSX'
	},

	image: {
		dir: 'assets/img'
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		// '@nuxtjs/sitemap',
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

	// sitemap: {
	// 	hostname: 'https://',
	// 	path: 'sitemap.xml',
	// 	routes() {
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
	// 						url: '/products/' + product.slug,
	// 						lastmod: product.date
	// 					}
	// 				}).concat(
	// 					newsList.map((news) => {
	// 						return {
	// 							url: '/news/' + news.slug,
	// 							lastmod: news.date
	// 						}
	// 					})
	// 				)
	// 			})
	// 		} catch(error) {
	// 			console.log('error')
	// 		}
	// 	}

	// },

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
