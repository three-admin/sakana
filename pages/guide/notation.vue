<template>
	<main class="guide template_mv">

		<section id="mv" class="mv">
			<div class="title_wrap">
				<span class="sub_title">ご利用案内</span>
				<h1 class="mincho">特定商取引法に基づく記載</h1>
			</div>
			<div class="menu_wrap flex flex-start border_h line_gray">
				<h2 class="title">ご利用案内メニュー</h2>
				<ul class="mv_menu flex flex-start">
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'products'}" to="/products" @click.native="linkClick">お届けについて</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'secret'}" to="/secret" @click.native="linkClick">支払い方法</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'about'}" to="/about" @click.native="linkClick">ギフトのお荷物について</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'recipe'}" to="/recipe" @click.native="linkClick">よくあるご質問</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'recipe'}" to="/recipe" @click.native="linkClick">特定商取引法に基づく記載</NuxtLink>
					</li>
				</ul>
				
			</div>
		</section>

		<section id="notation" class="notation contents">
			<div class="contents_wrap">
				<ul class="notation_list">
					<li class="flex flex-start border_h line_gray">
						<h3>販売業者</h3>
						<p class="content">有限会社 阿部守商店</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>運営統括責任者</h3>
						<p class="content">阿部守</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>所在地</h3>
						<p class="content">985-0061<br>宮城県塩釜市清水沢2-26-13</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>電話番号</h3>
						<p class="content">022-364-9725</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>URL</h3>
						<p class="content">https://aaaaaaaaaaaaaaaaa.com</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>商品代金以外の必要料金</h3>
						<p class="content">消費税・送料(配送地域をもとに別途計算)・支払いに関する手数料など</p>
					</li>
				</ul>
			</div>
		</section>

		


	</main>
</template>

<script>
import axios from 'axios'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
if (process.client) {
	gsap.registerPlugin(ScrollTrigger)
	gsap.registerPlugin(ScrollToPlugin)
}
export default {
	name: 'IndexPage',
	mounted() {
		const productList = [
			'#chazuke',
			'#takikomi',
			'#set'
		]
		const itemList = [
			'#chazuke .img_wrap',
			'#takikomi .img_wrap',
			'#set .img_wrap'
		]
		itemList.forEach((productItem, index) => {
			gsap.to(productItem, {
				y: '50%',
				scrollTrigger: {
					trigger: productList[index],
					start: 'top top',
					end: 'bottom top',
					scrub: true
				}
			})
		})
		
		const thumbnailList = [
			'#chazuke .img_wrap img',
			'#takikomi .img_wrap img',
			'#set .img_wrap img'
		]
		thumbnailList.forEach((thumbnailImg, index) => {
			gsap.to(thumbnailImg, {
				scale: 0.8,
				scrollTrigger: {
					trigger: productList[index],
					start: 'top bottom',
					end: 'bottom top',
					scrub: true
				}
			})
		})
	}
}
</script>

<style lang="scss" scoped>
	main {

		.contents {
			.contents_wrap {
				.notation_list {
					li {
						padding: 2rem 0;
						&:before {
							content: none;
						}
						h3 {
							width: 33%;
							font-size: 1.4rem;
						}
						.content {
							font-size: 1.4rem;
						}
						&:first-of-type {
							padding-top: 0;
						}
						@media only screen and (max-width: 980px) {
							padding: 1.6rem 0;
							h3 {
								padding-bottom: 0.6rem;
								font-size: 1.2rem;
							}
							.content {
								width: 75%;
								font-size: 1.2rem;
							}
						}
					}
				}
			}
		}


	}
</style>