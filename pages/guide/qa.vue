<template>
	<main class="guide template_mv">

		<section id="mv" class="mv">
			<div class="title_wrap">
				<span class="sub_title">ご利用案内</span>
				<h1 class="mincho">よくあるご質問</h1>
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

		<section id="qa" class="qa contents">
			<div class="flex">
				<div class="nav_wrap">
					<ul class="nav_menu">
						<li>
							<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'products'}" to="/products" @click.native="linkClick">お楽しみセットについて</NuxtLink>
						</li>
						<li>
							<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'secret'}" to="/secret" @click.native="linkClick">のしについて</NuxtLink>
						</li>
						<li>
							<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'about'}" to="/about" @click.native="linkClick">送料について</NuxtLink>
						</li>
						<li>
							<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'recipe'}" to="/recipe" @click.native="linkClick">お届けについて</NuxtLink>
						</li>
						<li>
							<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'recipe'}" to="/recipe" @click.native="linkClick">交換・キャンセルについて</NuxtLink>
						</li>
					</ul>
				</div>
				<div class="contents_wrap">
					<ul class="qa_list">
						<li class="border_h">
							<h3 class="mincho">お楽しみセットについて</h3>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(1)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[1]}">すべて同じ魚種にすることはできますか？</h4>
									<p v-show="statusList[1]" class="answer">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
								</div>
							</div>
						</li>
						<li class="border_h">
							<h3 class="mincho">のしについて</h3>
							<div class="qa_wrap border_h line_1">
								<div class="qa border_v line_1">
									<h4 class="question">のしは付けられますか？</h4>
									<p class="answer">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1">
								<div class="qa border_v line_1">
									<h4 class="question">のしはどんな種類のものがありますか？</h4>
									<p class="answer">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
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
	data() {
		return {
			statusList: Array(3).fill(false)
		}
	},
	mounted() {
		
	},
	methods: {
		toggleStatus: function(index) {
			this.statusList.splice(index, 1, !this.statusList[index])
		},
	}
}
</script>

<style lang="scss" scoped>
	main {

		.contents {
			.contents_wrap {
				.qa_list {
					li {
						margin-top: 8.6rem;
						padding-top: 8.6rem;
						&:after {
							content: none;
						}
						h3 {
							padding-bottom: 3rem;
							font-size: 2.5rem;
							line-height: 1.5;
						}
						.qa_wrap {
							margin-top: 1.8rem;
							background-color: #ffffff;
							cursor: pointer;
							.qa {
								padding: 3rem 3.5rem;
								.question {
									position: relative;
									padding-right: 3rem;
									font-size: 1.8rem;
									line-height: 1.5;
									&:after {
										content: '';
										position: absolute;
										top: 0;
										right: 0;
										bottom: 0;
										display: block;
										margin: auto;
										width: 2.4rem;
										height: 2.4rem;
										background-image: url('~/assets/img/icon/plus.svg');
										background-size: contain;
										background-repeat: no-repeat;
									}
									&.open {
										&:after {
											background-image: url('~/assets/img/icon/minus.svg');
										}
									}
								}
								.answer {
									padding: 2rem 4.6rem 0;
									font-size: 1.3rem;
								}
							}
						}
						&:first-of-type {
							margin-top: 0;
							padding-top: 0;
							&:before {
								content: none;
							}
						}
						@media only screen and (max-width: 980px) {
							margin-top: 4.8rem;
							padding-top: 4.8rem;
							h3 {
								padding-bottom: 0.6rem;
								font-size: 1.8rem;
							}
							.qa_wrap {
								.qa {
									padding: 2rem 2.4rem;
									.question {
										font-size: 1.6rem;
										&:after {
											
										}
										&:before {
											
										}
										&.active {
											&:after {
												content: '';

											}
										}
									}
									.answer {
										padding: 2rem 3.5rem 0;
										font-size: 1.1rem;
									}
								}
							}
						}
					}
				}
			}
		}

	}
</style>