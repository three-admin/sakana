<template>
	<header ref="header">
		<NuxtLink id="header_logo" ref="headerLogo" class="header_logo" :class="menuStatus" to="/" @click.native="linkClick">
			<img width="100%" height="100%" alt="阿部守商店ロゴ" src="~/assets/img/item/logo.svg" loading="lazy">
		</NuxtLink>
		<nav class="header_nav flex align-start">
			<div id="header_nav" ref="headerNav" class="header_menu_wrap" :class="menuStatus">
				<ul class="header_menu flex desktop">
					<li id="">
						<NuxtLink class="mincho hover_red" :class="{'now': this.$route.path.indexOf('products') !== -1}" to="/products" @click.native="linkClick">商品紹介</NuxtLink>
					</li>
					<li id="">
						<NuxtLink class="mincho hover_red" :class="{'now': this.$route.name == 'about'}" to="/about" @click.native="linkClick">私たちについて</NuxtLink>
					</li>
					<li id="">
						<NuxtLink class="mincho hover_red" :class="{'now': this.$route.name == 'recipe'}" to="/recipe" @click.native="linkClick">おさかなレシピ</NuxtLink>
					</li>
					<li id="">
						<NuxtLink class="mincho hover_red" :class="{'now': this.$route.name == 'news'}" to="/news" @click.native="linkClick">お知らせ<span class="dot mincho">・</span>ブログ</NuxtLink>
					</li>
				</ul>
				<ul class="header_menu smart">
					<li class="flex">
						<div class="link_list">
							<a class="circle_arrow" href="//shop.abemamoru-shouten.com/account" @click="linkClick">マイページ<i></i></a>
							<a class="circle_arrow border_h line_gray" href="//shop.abemamoru-shouten.com/pages/contact" @click="linkClick">お問い合わせ<i></i></a>
						</div>
					</li>
					<li class="flex border_h">
						<h5>商品紹介</h5>
						<div class="link_list">
							<NuxtLink class="circle_arrow" to="/products/ochazuke" @click.native="linkClick">お茶漬けセット<i></i></NuxtLink>
							<NuxtLink class="circle_arrow border_h line_gray" to="/products/takikomi" @click.native="linkClick">炊き込みご飯セット<i></i></NuxtLink>
							<!-- <NuxtLink class="border_h line_gray" to="/products/" @click.native="linkClick">選べる5袋 お楽しみセット</NuxtLink>
							<NuxtLink class="border_h line_gray" to="/products/" @click.native="linkClick">選べる8袋 お楽しみセット</NuxtLink> -->
							<NuxtLink class="circle_arrow border_h line_gray" to="/products" @click.native="linkClick">商品一覧<i></i></NuxtLink>
						</div>
					</li>
					<!-- <li class="flex border_h">
						<h5>こだわり</h5>
						<div class="link_list">
							<NuxtLink class="" to="/secret" @click.native="linkClick">おいしさの秘密</NuxtLink>
						</div>
					</li> -->
					<li class="flex border_h">
						<h5>私たちについて</h5>
						<div class="link_list">
							<NuxtLink class="circle_arrow" to="/about/#us" @click.native="linkClick">阿部守商店について<i></i></NuxtLink>
							<NuxtLink class="circle_arrow border_h line_gray" to="/about/#miyagi-shiogama" @click.native="linkClick">宮城塩竈のこと<i></i></NuxtLink>
							<NuxtLink class="circle_arrow border_h line_gray" to="/about/#reason" @click.native="linkClick">美味しさの理由<i></i></NuxtLink>
						</div>
					</li>
					<li class="flex border_h">
						<h5>レシピ</h5>
						<div class="link_list">
							<NuxtLink class="circle_arrow" to="/recipe" @click.native="linkClick">おさかなレシピ<i></i></NuxtLink>
						</div>
					</li>
					<li class="flex border_h">
						<h5>お知らせ / ブログ</h5>
						<div class="link_list">
							<NuxtLink class="circle_arrow" :to="{ name: 'news', query: { tag: 'info' } }" @click.native="linkClick">お知らせ<i></i></NuxtLink>
							<NuxtLink class="circle_arrow border_h line_gray" :to="{ name: 'news', query: { tag: 'blog' } }" @click.native="linkClick">おさかなブログ<i></i></NuxtLink>
							<NuxtLink class="circle_arrow border_h line_gray" to="/news" @click.native="linkClick">お知らせ・ブログ一覧<i></i></NuxtLink>
						</div>
					</li>
					<li class="flex border_h">
						<h5>ご利用案内</h5>
						<div class="link_list">
							<NuxtLink class="circle_arrow" to="/guide/delivery" @click.native="linkClick">配送・送料<i></i></NuxtLink>
							<NuxtLink class="circle_arrow border_h line_gray" to="/guide/payment" @click.native="linkClick">お支払い方法・返品<i></i></NuxtLink>
							<NuxtLink class="circle_arrow border_h line_gray" to="/guide/gift" @click.native="linkClick">梱包・ギフト包装<i></i></NuxtLink>
							<NuxtLink class="circle_arrow border_h line_gray" to="/guide/qa" @click.native="linkClick">よくあるご質問<i></i></NuxtLink>
							<NuxtLink class="circle_arrow border_h line_gray" to="/guide/notation" @click.native="linkClick">特定商取引法に基づく記載<i></i></NuxtLink>
						</div>
					</li>
					<li class="flex border_h">
						<div class="link_list">
							<NuxtLink class="" to="/terms" @click.native="linkClick">利用規約</NuxtLink>
							<NuxtLink class="" to="/privacy" @click.native="linkClick">プライバシーポリシー</NuxtLink>
							<div class="sns_list flex flex-start align-center">
								<a class="" target="_blank" href="https://www.instagram.com/abemamoru_shouten/" @click="linkClick">
									<img width="100%" height="100%" alt="Instagramアイコン" src="~/assets/img/icon/instagram.svg" loading="lazy">
								</a>
								<a class="" target="_balnk" href="https://www.twitter.com/abemamoru_shop/" @click="linkClick">
									<img width="100%" height="100%" alt="Twitterアイコン" src="~/assets/img/icon/twitter.svg" loading="lazy">
								</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="header_button_wrap flex flex-center align-center smart">
				<NuxtLink id="cart_button" ref="cartButton" class="cart_button smart" :class="{ 'no_item': cartItems == 0, 'menu_opened': menuStatus != '' }" to="/cart" @click.native="linkClick">
					カート<span class="num">{{ cartItems }}</span>
				</NuxtLink>
				<div class="border_h line_2">
					<button class="menu_button flex align-center border_v line_2" :class="menuStatus" @click="menuClick">
						<div class="menu_line">
							<span class="line"></span>
							<span class="line"></span>
							<span class="line"></span>
						</div>
						<span class="menu_title">{{ this.menuButtonTitle }}</span>
					</button>
				</div>
			</div>
		</nav>
		<nav id="side_nav" class="side_nav flex align-start desktop">
			<ul class="side_menu">
				<li id="">
					<NuxtLink class="cart_button" :class="{ 'no_item': cartItems == 0 }" to="/cart" @click.native="linkClick">
						カート<span class="num">{{ cartItems }}</span>
					</NuxtLink>
				</li>
				<li id="">
					<a class="" href="//shop.abemamoru-shouten.com/account" @click="linkClick">マイページ</a>
				</li>
				<li id="">
					<a class="" href="//shop.abemamoru-shouten.com/pages/contact" @click="linkClick">お問い合わせ</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
	gsap.registerPlugin(ScrollTrigger)
}
export default {
	async asyncData({ params }) {
		
	},
	data() {
		return {
			windowW: 0,
			path: '',
			loadingClass: '',
			spriteClass: '',
			menuStatus: '',
			menuTitle: 'メニュー',
		}
	},
	head() {
		return {
			bodyAttrs: {
				class: this.loadingClass != '' ? this.loadingClass : this.menuStatus != '' ? 'body_fix' : this.spriteClass
			},
		}
	},
	mounted() {

		if (!sessionStorage.getItem('LoadingAnimation')) {
			if (this.$route.name == "index") {

				this.loadingClass = 'body_fix'

				const header = this.$refs.header
				header.classList.add('loading')
				setTimeout(() => {
					header.classList.remove('loading')
					this.loadingClass = ''
				}, 2500)


			}
		}
		this.setHeader()
		this.path = this.$route.path

		this.onResize()
		window.addEventListener('resize', this.onResize)

		// this.checkoutStatus()
		const checkoutId = this.$cookies.get('CheckoutId')
		if (checkoutId != '' && checkoutId != null && checkoutId != undefined) {
			try {
				this.$shopify.checkout.fetch(checkoutId).then((checkout) => {
					if (checkout.completedAt == '' || checkout.completedAt === null || checkout.completedAt === undefined) {
						const cookieItems = this.$cookies.get('CartItems') ? this.$cookies.get('CartItems') : 0
						this.$store.commit('update', cookieItems)
					} else {
						this.$cookies.remove('CheckoutId')
						this.$cookies.remove('CartItems')
						this.$store.commit('update', 0)
					}
				})
			} catch(error) {
				console.log(error)
			}
		}

		const headerLogo = this.$refs.headerLogo.$el
		const cartButton = this.$refs.cartButton.$el
		const headerNav = this.$refs.headerNav
		ScrollTrigger.create({
			trigger: 'body',
			start: 'top top',
			end: 'bottom top',
			onUpdate: ({ progress, direction, isActive }) => {
				if (direction == -1) {
					if (window.innerWidth < 980) {
						headerLogo.classList.add('to_top')
						cartButton.classList.add('to_top')
					} else {
						headerNav.classList.remove('scrolling')
						headerNav.classList.add('to_top')
					}
				} else {
					if (window.innerWidth < 980) {
						headerLogo.classList.add('scrolling')
						cartButton.classList.add('scrolling')
						headerLogo.classList.remove('to_top')
						cartButton.classList.remove('to_top')
					} else {
						headerNav.classList.add('scrolling')
						headerNav.classList.remove('to_top')
						
					}
				}
				if (this.$route.name == "index" && progress == 0) {
					headerNav.classList.add('index')
					headerNav.classList.remove('to_top')
				}
			}
		})
		
	},
	watch: {
		$route(to, from) {
			setTimeout(() => { 
				this.path = to.path
				this.setHeader()
			}, 700)
		}
	},
	computed: {
		cartItems: function() {
			return this.$store.state.cartItems ? this.$store.state.cartItems : 0
		},
		menuButtonTitle: function() {
			return this.menuTitle
		}
	},
	methods: {
		onResize: function() {
			const width = window.innerWidth
			const height = window.innerHeight
			const ratio = window.innerWidth / window.innerHeight
			if ( 980 < width ) {
				if ( width <= height * 1.7789072427 ) {
					this.spriteClass = 'desktop_2'
				} else {
					this.spriteClass = ''
				}
			}
		},
		setHeader: function() {

			if (this.$route.name == "index") {
				this.$refs.headerNav.classList.add('index')
				this.$refs.headerNav.classList.remove('to_top')
			} else {
				this.$refs.headerNav.classList.remove('index')
			}
		},
		menuClick: function() {
			this.menuStatus = this.menuStatus == '' ? 'menu_opened' : ''
			this.menuTitle = this.menuTitle == 'メニュー' ? '閉じる' : 'メニュー'
		},
		linkClick: function(e) {
			this.menuStatus = ''
			this.menuTitle = 'メニュー'
			if ((e.target.pathname == this.$route.path && this.$route.path == this.path) ||
				(e.target.tagName == 'IMG' && this.path == '/')) {
				this.$scrollTo('main')
			}
		},
		// async checkoutStatus() {
		// 	const checkoutId = this.$cookies.get('CheckoutId')
		// 	if (checkoutId != '' && checkoutId != null && checkoutId != undefined) {
		// 		try {
		// 			const checkout = this.$shopify.checkout.fetch(checkoutId).then((checkout) => {
		// 				if (checkout.completedAt == '' || checkout.completedAt === null || checkout.completedAt === undefined) {
		// 					const cookieItems = this.$cookies.get('CartItems') ? this.$cookies.get('CartItems') : 0
		// 					this.$store.commit('update', cookieItems)
		// 				} else {
		// 					this.$cookies.remove('CheckoutId')
		// 					this.$cookies.remove('CartItems')
		// 					this.$store.commit('update', 0)
		// 				}
		// 			})
		// 		} catch(error) {
		// 			console.log(error)
		// 		}
		// 	}
		// },
	}
}
</script>


<style lang="scss" scoped>

	header {
		position: relative;
		&.loading {
			.header_logo {
				transform: translate3d(0, -1.5rem, 0);
				opacity: 0;
			}
			.side_nav .side_menu li {
				transform: translate3d(0, 0.6rem, 0);
				opacity: 0;
			}
		}
		.header_menu_wrap {
			transform: translateY(0);
			opacity: 1;
			visibility: visible;
			transition: none;
			&.index {
				transform: translateY(-2rem);
				opacity: 0;
				visibility: hidden;
				transition: none;
			}
			&.scrolling {
				transform: translateY(-2rem);
				opacity: 0;
				visibility: hidden;
				transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, visibility 0.1s 0.2s;
			}
			&.to_top {
				transform: translateY(0);
				opacity: 1;
				visibility: visible;
				transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, visibility 0.1s 0.2s;
			}
		}
		.header_logo {
			position: fixed;
			top: 6rem;
			left: 4.2vw;
			z-index: 15;
			width: 6.4vw;
			transition: transform 0.6s ease-in-out, opacity 0.4s ease-in-out;
		}
		.cart_button {
			position: relative;
			padding-right: 2rem;
			.num {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				display: inline-block;
				margin: auto;
				width: 1.8rem;
				height: 1.8rem;
				font-size: 1.2rem;
				line-height: 1.8rem;
				color: #ffffff;
				text-align: center;
				background-color: #AA0813;
				border-radius: 50%;
			}
			&.no_item {
				.num {
					color: #000000;
					background-color: transparent;
					&:before {
						content: '（';
					}
					&:after {
						content: '）';
					}
				}
			}
		}
		.header_nav {
			position: fixed;
			top: 6rem;
			right: 4.2vw;
			z-index: 15;
			.header_menu_wrap {
				.border_h {
					&:before,
					&:after {
						content: none;
					}
				}
				.header_menu {
					margin-top: 0.8rem;
					&.desktop {
						display: flex;
						display: -webkit-flex;
					}
					li {
						margin-right: 3.5rem;
						a {
							font-size: 1.4rem;
							line-height: 1.75;
							.dot {
								display: inline-block;
								margin: 0 0.2rem;
								font-size: 1.4rem;
								line-height: 1.75;
								transform: scale(1);
							}
							&.now {
								position: relative;
								color: #AA0813;
								&:before {
									content: '';
									position: absolute;
									top: -0.8rem;
									left: 0;
									display: block;
									width: 1.7rem;
									height: 1px;
									background-color: #AA0813;
								}
							}
						}
						&:last-of-type {
							margin-right: 0;
						}
					}
				}
			}
		}
		.side_nav {
			position: fixed;
			left: 4.2vw;
			bottom: 6rem;
			z-index: 15;
			.side_menu {
				li {
					margin-bottom: 1.7rem;
					transition: transform 0.6s ease-in-out, opacity 0.4s ease-in-out;
					@for $i from 0 through 3 {
						&:nth-of-type(#{$i}) {
							transition-delay: #{0.1 * $i}s;
						}
					}
					a,
					a * {
						font-size: 1.5rem;
						line-height: 1;
						color: #818283;
						&:hover,
						&:hover * {
							color: #000000;
						}
						.num {
							font-size: 1.2rem;
							line-height: 1.8rem;
							color: #ffffff;
						}
						&.no_item {
							padding-right: 1rem;
							.num {
								width: 1.5rem;
								height: 1.5rem;
								font-size: 1.5rem;
								line-height: 1;
								color: #818283;
								&:before,
								&:after {
									font-size: 1.5rem;
									line-height: 1;
								}
							}
							&:hover * {
								color: #000000;
							}
						}
					}
					&:last-of-type {
						margin-bottom: 0;
					}
				}
			}
		}
		@media only screen and (max-width: 980px) {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			width: 100vw;
			height: 10.8rem;
			z-index: 15;
			// background-image: url('~/assets/img/item/bg_gray.svg');
			// background-repeat: repeat;
			.scrolling {
				transform: translateY(-1rem);
				opacity: 0;
				visibility: hidden;
				transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out, visibility 0.2s 0.2s;
				&.to_top {
					transform: translateY(0);
					opacity: 1;
					visibility: visible;
					transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out, visibility 0.2s 0.2s;
				}
			}
			.menu_opened {
				transform: translateY(0);
				opacity: 1 !important;
				visibility: visible !important;
			}
			.header_logo {
				top: 1.7rem;
				left: 4.2vw;
				width: 12vw;
				z-index: 20;
			}
			.header_nav {
				top: 0;
				left: 0;
				right: 0;
				// bottom: 0;
				.header_button_wrap {
					position: fixed;
					top: 3rem;
					right: 4.2vw;
					&.smart {
						display: flex;
						display: -webkit-flex;
					}
					.cart_button {
						margin-right: 3rem;
						&.no_item {
							padding-right: 0.8rem;
							.num {
								width: 1.3rem;
								height: 1.3rem;
								font-size: 1.3rem;
								line-height: 1;
								&:before,
								&:after {
									font-size: 1.3rem;
									line-height: 1;
								}
							}
						}
					}
					.menu_button {
						padding: 1.3rem;
						width: 7rem;
						background-image: url('~/assets/img/item/bg_gray.svg');
						background-repeat: repeat;
						.menu_line {
							width: 1.5rem;
							.line {
								position: relative;
								display: block;
								margin-bottom: 0.15rem;
								height: 2px;
								background-image: url('~/assets/img/item/line_2.svg');
								background-size: cover;
								background-repeat: no-repeat;
								&:last-of-type {
									margin-bottom: 0;
								}
							}
						}
						.menu_title {
							font-size: 1.2rem;
							line-height: 1;
						}
						&.menu_opened {
							.menu_line {
								.line {
									&:first-of-type {
										top: 3.5px;
										transform: rotate(45deg);
									}
									&:nth-of-type(2) {
										opacity: 0;
									}
									&:last-of-type {
										bottom: 3.5px;
										transform: rotate(-45deg);
									}
								}
							}
						}
					}
				}
				.header_menu_wrap {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 100%;
					// height: 100vh;
					overflow: scroll;
					// background-color: #ffffff;
					background-image: url('~/assets/img/item/bg_gray.svg');
					background-repeat: repeat;
					transform: translateY(-150%);
					transition: none;
					&.menu_opened {
						transform: translateY(0%);
					}
					.border_h {
						&:before {
							content: '';
							top: 0;
						}
					}
					.header_menu {
						padding: 9.6rem 4.2vw;
						&.desktop {
							display: none;
						}
						li {
							margin: 0 auto 1.3rem;
							h5 {
								margin-top: 1.6rem;
								width: 30%;
								font-size: 1.2rem;
								line-height: 1;
							}
							.link_list {
								margin-top: 0.4rem;
								margin-left: auto;
								width: 66%;
								a {
									display: block;
									padding: 1.2rem 0;
									font-size: 1.5rem;
									line-height: 1;
									i {
										bottom: 0;
										border-color: #000000;
										&:before,
										&:after {
											background-image: url('~/assets/img/icon/arrow_black_16.svg');
										}
									}
								}
							}
							&:last-of-type {
								margin-right: 0;
								padding-top: 2.4rem;
								.link_list {
									a {
										padding-top: 0;
										font-size: 1.3rem;
									}
								}
								.sns_list {
									a {
										width: 2rem;
										&:first-of-type {
											margin-right: 1.2rem;
										}
									}
								}
							}
						}
					}
				}
			}
			.side_nav {
				display: none;
			}
		}
	}


</style>