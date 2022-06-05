<template>
	<main class="template_mv">

		<section id="mv" class="mv">
			<div class="title_wrap">
				<span class="sub_title">阿部守商店の</span>
				<h1 class="mincho">お知らせ/ブログ</h1>
			</div>
			<div class="menu_wrap flex flex-start border_h line_gray">
				<h2 class="title">カテゴリー</h2>
				<ul class="mv_menu flex">
					<li>
						<NuxtLink class="underline hover_red" :class="{'now': this.$route.name == 'products'}" to="/news/products" @click.native="linkClick">すべて</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'secret'}" to="/news/secret" @click.native="linkClick">お知らせ</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'about'}" to="/about" @click.native="linkClick">メディア掲載</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'recipe'}" to="/recipe" @click.native="linkClick">おさかなブログ</NuxtLink>
					</li>
				</ul>
			</div>
		</section>

		<section id="news" class="news">
			<div class="list_wrap">
				<ul class="news_list">
					<li id="" class="flex" v-for="article in news" :key="article[0].id">
						<div class="title_wrap">
							<span class="date">{{ $dateFns.format(article[0].published_at, 'yyyy.MM.dd') }}</span>
							<span class="category">{{ article[0].tags }}</span>
						</div>
						<div class="detail_wrap flex align-start border_h line_gray">
							<NuxtLink class="img_wrap border_h" :to="{ name: 'news-id', params: { id: article[0].handle, article: article[0] } }">
								<div class="ratio-fixed border_v">
									<img :src="article[0].iamge.src">
								</div>
							</NuxtLink>
							<div class="text_wrap">
								<h3 class="mincho">{{ article[0].title }}</h3>
								<p class="intro">{{ article[0].body_html.replace(/<([^>]+)>/g, '') }}</p>
								<NuxtLink class="underline" to="/news/aaa">詳しく見る</NuxtLink>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>

	</main>
</template>

<script>
import axios from 'axios'
export default {
	name: 'NewsIndexPage',
	async asyncData({ $axios, $shopify, params }) {
		try {
			const config = {
				headers: {
					'X-Shopify-Access-Token': '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',
					'Content-Type': 'application/json'
				}
			}
			return Promise.all([
				$axios.get('https://abezuke.myshopify.com/admin/api/2022-04/blogs/82775212260/articles.json', config),
			])
			.then((res) => {
				const news = res[0].data
				return { news }
			})
		} catch(error) {
			console.log(error)
		}
	},
	mounted() {

	}
}
</script>

<style lang="scss" scoped>
	main {

		.news {
			margin-top: 6rem;
			@media only screen and (max-width: 980px) {
				margin: 2.4rem 0 9.6rem;
			}
			.list_wrap {
				.news_list {
					li {
						.title_wrap {
							padding-top: 8rem;
							width: 25%;
							.date,
							.category {
								display: block;
							}
							
						}
						.detail_wrap {
							padding: 8rem 0;
							width: 75%;
							&:before {
								content: none;
							}
							.img_wrap {
								width: 33%;
								.ratio-fixed {
									padding-top: 100%;
									background-image: url('~/assets/img/item/no_image.svg');
									background-size: cover;
									background-repeat: no-repeat;
								}
							}
							.text_wrap {
								width: 55%;
								h3 {
									font-size: 2.5rem;
									line-height: 1.5;
								}
								.intro {
									margin-top: 0.8rem;
									font-size: 1.3rem;
								}
								.underline {
									display: inline-block;
									margin-top: 3.5rem;
									padding-bottom: 1.2rem;
									line-height: 1;
								}
							}
						}
						@media only screen and (max-width: 980px) {
							position: relative;
							.title_wrap {
								padding: 4.8rem 6.4vw 0;
								width: 100%;
								.date,
								.category {
									display: block;
								}

							}
							.detail_wrap {
								margin: auto;
								padding: 0 0 4.8rem;
								width: 87.2vw;
								.img_wrap {
									position: absolute;
									top: -5.1rem;
									right: 0;
									width: 12rem;
								}
								.text_wrap {
									padding-top: 9rem;
									width: 100%;
									h3 {
										font-size: 1.8rem;
									}
									.intro {
										margin-top: 0.4rem;
										font-size: 1.1rem;
									}
									.underline {
										margin-top: 3rem;
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