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
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'news'}" to="/news" @click.native="linkClick">すべて</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'info'}" to="/news/info" @click.native="linkClick">お知らせ</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'blog'}" to="/news/blog" @click.native="linkClick">おさかなブログ</NuxtLink>
					</li>
				</ul>
			</div>
		</section>

		<section id="news" class="news">
			<div class="list_wrap">
				<ul class="news_list">
					<li id="" class="flex" v-for="article in news" :key="article.id">
						<div class="title_wrap">
							<span class="date">{{ $dateFns.format(article.publishedAt, 'yyyy.MM.dd') }}</span>
							<span class="category" v-for="tag in article.tags">{{ tag }}</span>
						</div>
						<div class="detail_wrap flex align-start border_h line_gray">
							<NuxtLink class="img_wrap border_h" :to="{ name: 'news-id', params: { id: article.handle, article: article } }">
								<div class="ratio-fixed border_v">
									<img v-if="article.image.src" :src="article.image.src">
								</div>
							</NuxtLink>
							<div class="text_wrap">
								<h3 class="mincho">{{ article.title }}</h3>
								<p class="intro">{{ article.content.substr(0, 70) }}...</p>
								<NuxtLink class="underline" :to="{ name: 'news-id', params: { id: article.handle, article: article } }">詳しく見る</NuxtLink>
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
	async asyncData({ params }) {
		try {
			return Promise.all([
				axios.post(
					'https://abezuke.myshopify.com/api/2022-04/graphql.json',
					{
						query: 
							`query {     
								news: blog(handle: "news") {
									articles(first: 100) {
										nodes {
											id
											title
											handle
											publishedAt
											tags
											image {
												src
											}
											content
											contentHtml
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
				const news = res[0].data.data.news.articles.nodes
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
									font-size: 1.4rem;
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
										font-size: 1.2rem;
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