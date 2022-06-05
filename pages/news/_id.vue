<template>
	<main>

		<section id="news" class="news">
			<div class="contents_wrap flex">
				<div class="title_wrap">
					<h1 class="mincho">{{ article.title }}</h1>
					<p class="info">{{ $dateFns.format(article.published_at, 'yyyy.MM.dd') }}<span class="dot">・</span>お知らせ</p>
					<div class="copy_wrap border_h line_gray">
						<button class="link_copy" @click="copyClick(article.handle)">
							<span v-show="copied" class="copied_text">リンクURLをコピーしました</span>
							この記事のリンクをコピー
						</button>
					</div>
				</div>
				<div class="contents">
					<div class="img_wrap border_h">
						<div class="ratio-fixed border_v">
							<img :src="article.image.src">
						</div>
					</div>
					<div class="sentence" v-html="article.body_html"></div>
				</div>
			</div>
		</section>

	</main>
</template>

<script>
import axios from 'axios'
export default {
	name: 'NewsDetailPage',
	async asyncData({ params }) {
		if (params.article) {
			const article = params.article
			return { article }
		} else {
			try {
				const config = {
					headers: {
						'X-Shopify-Access-Token': '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',
						'Content-Type': 'application/json'
					}
				}
				return Promise.all([
					axios.get('https://abezuke.myshopify.com/admin/api/2022-04/blogs/82775212260/articles.json', config),
				])
				.then((res) => {
					const news = res[0].data.articles
					var article = []
					news.forEach((news_article, index) => {
						if (params.id == news_article.handle) {
							article = news_article
						}
					})
					return { article }
				})
			} catch(error) {
				console.log(error)
			}
		}
	},
	head() {
		return {
			title: this.article.title + ' | ',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: this.article.title + ' | ' },
				{ hid: 'og:image', property: 'og:image', content: this.article.image ? this.article.image.src : 'https://abemamoru-shouten.com/no_img.jpg' },
				{ hid: 'og:url', property: 'og:url', content: 'https://abemamoru-shouten.com/news/' + this.article.handle },
			],
		}
	},
	data() {
		return {
			copied: false,
		}
	},
	methods: {
		copyClick: function(url) {
			this.$copyText('https://abemamoru-shouten.com/news/' + url);
			this.copied = true
			setTimeout(() => {
				this.copied = false
			}, 1500)
		},
	},

}
</script>

<style lang="scss" scoped>
	main {

		.news {
			padding: 22rem 10vw 18rem 22vw;
			.contents_wrap {
				.title_wrap {
					width: 30vw;
					h1 {
						font-size: 3.3rem;
						line-height: 1.5;
					}
					.info {
						margin-top: 2.4rem;
						.dot {
							margin: 0 0.4rem;
						}
					}
					.copy_wrap {
						margin-top: 4.8rem;
						padding-top: 2.4rem;
						&:after {
							content: none;
						}
						.link_copy {
							position: relative;
							padding-left: 2.4rem;
							font-size: 1.3rem;
							line-height: 1;
							&:before {
								content: '';
								position: absolute;
								top: 0;
								left: 0;
								bottom: 0;
								display: block;
								margin: auto;
								width: 1.8rem;
								height: 1.8rem;
								background-image: url('~/assets/img/icon/link.svg');
								background-size: contain;
								background-repeat: no-repeat;
							}
							.copied_text {
								position: absolute;
								left: -0.4rem;
								bottom: 2.4rem;
								display: block;
								padding: 0.8rem;
								font-size: 1.1rem;
								line-height: 1;
								background-color: #ffffff;
								border: 1px solid #C4C4C4;
								z-index: 1;
								&:before,
								&:after {
									content: '';
									position: absolute;
									left: 8px;
									display: block;
									border: 6px solid transparent;
								}
								&:before {
									bottom: -12px;
									border-top: 6px solid #C4C4C4;
								}
								&:after {
									bottom: -10.5px;
									border-top: 6px solid #ffffff;
								}
							}
						}
					}
				}
				.contents {
					width: 35vw;
					.img_wrap {
						.ratio-fixed {
							padding-top: 100%;
						}
					}
					.sentence {
						margin-top: 6rem;
						&::v-deep {
							img {
								margin: 2.4rem auto;
							}
							h2, h3, h4, h5, h6 {
								margin: 1.6rem auto;
								font-size: 2.7rem;
								line-height: 1.5;
							}
							p, a {
								margin: 1.2rem auto;
							}
							p {
								font-feature-settings: initial;
								-webkit-font-feature-settings: initial;
							}
							a {
								color: #AA0813;
							}
						}
					}
				}
				
			}
			@media only screen and (max-width: 980px) {
				padding: 13rem 6.4vw 9.6rem;
				.contents_wrap {
					.title_wrap {
						width: 100%;
						h1 {
							font-size: 2.4rem;
						}
						.info {
							margin-top: 1.6rem;
						}
						.copy_wrap {
							margin-top: 2.4rem;
							.link_copy {
								
							}
						}
					}
					.contents {
						margin-top: 6rem;
						width: 100%;
						.sentence {
							margin-top: 3.5rem;
							&::v-deep {
								h2, h3, h4, h5, h6 {
									margin: 1.2rem auto;
									font-size: 2.1rem;
								}
								p, a {
									margin: 0.8rem auto;
								}
							}
						}
					}
				}
			}
		}


	}
</style>