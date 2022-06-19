<template>
	<header>
		<NuxtLink class="header_logo" to="/">
			<img src="~/assets/img/item/logo.svg">
		</NuxtLink>
		<nav class="header_nav flex align-start" ref="headerNav">
			<div id="header_nav" class="header_menu_wrap" :class="menuStatus">
				<ul class="header_menu flex" v-if="isDesktop">
					<li id="">
						<NuxtLink class="mincho hover_red" :class="{'now': this.$route.name == 'products'}" to="/products" @click.native="linkClick">商品紹介</NuxtLink>
					</li>
					<li id="">
						<NuxtLink class="mincho hover_red" :class="{'now': this.$route.name == 'about'}" to="/about" @click.native="linkClick">私たちについて</NuxtLink>
					</li>
					<li id="">
						<NuxtLink class="mincho hover_red" :class="{'now': this.$route.name == 'about#reason'}" to="/about#reason" @click.native="linkClick">おいしさの理由</NuxtLink>
					</li>
					<li id="">
						<NuxtLink class="mincho hover_red" :class="{'now': this.$route.name == 'recipe'}" to="/recipe" @click.native="linkClick">おさかなレシピ</NuxtLink>
					</li>
				</ul>
				<ul class="header_menu" v-else>
					<li class="flex">
						<div class="linkList">
							<NuxtLink class="" to="//shop.abemamoru-shouten.com/account" @click.native="linkClick">マイページ</NuxtLink>
							<NuxtLink class="border_h line_1" to="https://shop.abemamoru-shouten.com/pages/contact" @click.native="linkClick">お問い合わせ</NuxtLink>
						</div>
					</li>
					<li class="flex border_h">
						<h5>商品紹介</h5>
						<div class="linkList">
							<NuxtLink class="" to="/products/" @click.native="linkClick">お茶漬けセット</NuxtLink>
							<NuxtLink class="border_h line_1" to="/products/" @click.native="linkClick">炊き込みご飯セット</NuxtLink>
							<NuxtLink class="border_h line_1" to="/products/" @click.native="linkClick">選べる5袋 お楽しみセット</NuxtLink>
							<NuxtLink class="border_h line_1" to="/products/" @click.native="linkClick">選べる8袋 お楽しみセット</NuxtLink>
							<NuxtLink class="border_h line_1" to="/products" @click.native="linkClick">商品一覧</NuxtLink>
						</div>
					</li>
					<!-- <li class="flex border_h">
						<h5>こだわり</h5>
						<div class="linkList">
							<NuxtLink class="" to="/secret" @click.native="linkClick">おいしさの秘密</NuxtLink>
						</div>
					</li> -->
					<li class="flex border_h">
						<h5>私たちについて</h5>
						<div class="linkList">
							<NuxtLink class="" to="/about/#us" @click.native="linkClick">阿部守商店について</NuxtLink>
							<NuxtLink class="border_h line_1" to="/about/#shiogama" @click.native="linkClick">宮城塩竈のこと</NuxtLink>
							<NuxtLink class="border_h line_1" to="/about/#reason" @click.native="linkClick">おいしさの理由</NuxtLink>
						</div>
					</li>
					<li class="flex border_h">
						<h5>レシピ</h5>
						<div class="linkList">
							<NuxtLink class="" to="/recipe" @click.native="linkClick">おさかなレシピ</NuxtLink>
						</div>
					</li>
					<li class="flex border_h">
						<h5>ご利用案内</h5>
						<div class="linkList">
							<NuxtLink class="" to="/delivery" @click.native="linkClick">お届けについて</NuxtLink>
							<NuxtLink class="border_h line_1" to="/guide/payment" @click.native="linkClick">お支払い方法</NuxtLink>
							<NuxtLink class="border_h line_1" to="/guide/gift" @click.native="linkClick">ギフトのお荷物について</NuxtLink>
							<NuxtLink class="border_h line_1" to="/guide/qa" @click.native="linkClick">よくあるご質問</NuxtLink>
							<NuxtLink class="border_h line_1" to="/guide/notation" @click.native="linkClick">特定商取引法に基づく記載</NuxtLink>
						</div>
					</li>
					<li class="flex border_h">
						<div class="linkList">
							<NuxtLink class="" to="/terms" @click.native="linkClick">利用規約</NuxtLink>
							<NuxtLink class="" to="/privacy" @click.native="linkClick">プライバシーポリシー</NuxtLink>
							<div class="flex">
								<NuxtLink class="" to="/" @click.native="linkClick">
									
								</NuxtLink>
								<NuxtLink class="" to="/" @click.native="linkClick">
									
								</NuxtLink>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="header_button_wrap flex flex-center align-center" v-if="!isDesktop">
				<NuxtLink class="cart_button" to="/cart" @click.native="linkClick" v-if="!isDesktop">
					カート<span class="num" :class="{ 'no_item': cartItemNum == 0 }">{{ cartItemNum }}</span>
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
		<nav id="side_nav" class="side_nav flex align-start" ref="sideNav" v-if="isDesktop">
			<ul class="side_menu">
				<li id="">
					<NuxtLink class="cart_button" to="/cart">
						カート<span class="num" :class="{ 'no_item': cartItemNum == 0 }">{{ cartItemNum }}</span>
					</NuxtLink>
				</li>
				<li id="">
					<a class="" href="//shop.abemamoru-shouten.com/account">マイページ</a>
				</li>
				<li id="">
					<a class="" href="//shop.abemamoru-shouten.com/pages/contact">お問い合わせ</a>
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
	layout: 'estate',
	async asyncData({ params }) {
		
	},
	data() {
		return {
			windowW: 0,
			menuStatus: '',
			menuTitle: 'メニュー',
			cartItems: 0,
		}
	},
	head() {
		return {
			bodyAttrs: {
				class: this.menuStatus != '' ? 'body_fix' : ''
			},
		}
	},
	mounted() {
		if (this.$route.name == "index") {
			if (!sessionStorage.getItem('LoadingAnimation')) {
			}
			gsap.set('#header_nav', {
				opacity: 0,
			})
		} else if (!sessionStorage.getItem('LoadingAnimation')) {
			sessionStorage.setItem('LoadingAnimation', true)
		} else {
			gsap.set('#header_nav', {
				opacity: 1,
			})
		}

		this.cartItems = sessionStorage.getItem('CartItems') ? sessionStorage.getItem('CartItems') : 0
		
		ScrollTrigger.create({
			trigger: 'body',
			start: 'top top',
			end: 'bottom top',
			onUpdate: ({ progress, direction, isActive }) => {
				if (direction == -1) {
					gsap.to('#header_nav', {
						opacity: 1,
						duration: 0.1
					})
				} else {
					gsap.to('#header_nav', {
						opacity: 0,
						duration: 0.1
					})
				}
				if (this.$route.name == "index" && progress == 0) {
					gsap.to('#header_nav', {
						opacity: 0,
						duration: 0.1
					})
				}
			}
		})
		
		
		this.windowW = window.innerWidth
		if (this.$device.isDesktop) {
			window.addEventListener('resize', this.windowResizeEvent)
		}
	},
	computed: {
		isDesktop: function() {
			return 980 < this.windowW
		},
		cartItemNum: function() {
			return this.cartItems
		},
		menuButtonTitle: function() {
			return this.menuTitle
		}
	},
	methods: {
		windowResizeEvent: function() {
			this.windowW = window.innerWidth
		},
		menuClick: function() {
			this.menuStatus = this.menuStatus == '' ? 'opened' : ''
			this.menuTitle = this.menuTitle == 'メニュー' ? '閉じる' : 'メニュー'
		},
		linkClick: function() {
			this.menuStatus = ''
			this.menuTitle = 'メニュー'
		},
	}
}
</script>


<style lang="scss" scoped>

	header {
		position: relative;
		.header_logo {
			position: fixed;
			top: 6rem;
			left: 4.2vw;
			z-index: 15;
			width: 6.4vw;
		}
		.cart_button {
			.num {
				background-color: #AA0813;
				border-radius: 50%;
			}
			.no_item {
				background-color: transparent;
				&:before {
					content: '（';
				}
				&:after {
					content: '）';
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
					li {
						margin-right: 3.5rem;
						a {
							font-size: 1.4rem;
							line-height: 1.75;
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
					a,
					a * {
						font-size: 1.5rem;
						line-height: 1;
						color: #818283;
						&:hover,
						&:hover * {
							color: #000000;
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
					.cart_button {
						margin-right: 2.4rem;

					}
					.menu_button {
						padding: 1.3rem;
						width: 7rem;
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
						&.opened {
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
					height: 100vh;
					overflow: scroll;
					background-color: #ffffff;
					transform: translateY(-150%);
					&.opened {
						opacity: 1 !important;
						transform: translateY(0%);
					}
					.border_h {
						&:before {
							content: '';
							top: 0;
						}
					}
					.header_menu {
						padding: 9.6rem 4.2vw 0;
						li {
							margin: 0 auto 1.3rem;
							h5 {
								margin-top: 1.4rem;
								width: 30%;
								font-size: 1.2rem;
								line-height: 1;
							}
							.linkList {
								margin-left: auto;
								width: 66%;
								a {
									display: block;
									padding: 1.2rem 0;
									font-size: 1.5rem;
									line-height: 1;
								}
							}
							&:last-of-type {
								margin-right: 0;
								padding-top: 2.4rem;
								.linkList {
									a {
										padding-top: 0;
										font-size: 1.3rem;
									}
								}
							}
						}
					}
				}
			}
			.side_nav {
				// position: relative;
				// left: initial;
				// bottom: initial;
				z-index: 15;
				.side_menu {
					li {
						margin-bottom: 1.7rem;
						a {
							font-size: 1.5rem;
							line-height: 1;
						}
						&:last-of-type {
							margin-bottom: 0;
						}
					}
				}
			}
		}
	}


</style>