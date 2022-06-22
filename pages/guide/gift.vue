<template>
	<main class="guide template_mv">

		<section id="mv" class="mv">
			<div class="title_wrap">
				<span class="sub_title">ご利用案内</span>
				<h1 class="mincho">梱包・ギフト包装について</h1>
			</div>
			<div class="menu_wrap flex flex-start border_h line_gray">
				<h2 class="title">ご利用案内メニュー</h2>
				<ul id="guide_menu" class="mv_menu flex flex-start">
					<li>
						<NuxtLink class=" hover_red" to="/guide/delivery">配送・送料</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" to="/guide/payment">お支払い方法・返品</NuxtLink>
					</li>
					<li id="menu_gift">
						<NuxtLink class="now hover_red" to="/guide/gift">梱包・ギフト包装</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" to="/guide/qa">よくあるご質問</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" to="/guide/notation">特定商取引法に基づく記載</NuxtLink>
					</li>
				</ul>
				
			</div>
		</section>

		<section id="gift" class="gift contents">
			<div class="contents_wrap">
				<h2 class="mincho">梱包方法について</h2>
				<div class="inner_wrap">
					<p class="sentence">
						当店ではどの商品もそのままギフトとしてもご利用いただけるパッケージにてお届けいたします。<br>
						別途のしやギフトラッピングをご希望の際は、商品ページにてご指定ください。
					</p>
				</div>
			</div>
			<div class="contents_wrap border_h">
				<h2 class="mincho">ギフトラッピングについて</h2>
				<div class="inner_wrap">
					<p class="sentence">
						当店では、ご贈答用の包装として、商品のパッケージ上にあてるかけ紙をご用意しております。ご希望の場合は商品ページのプルダウンよりラッピング希望をご選択ください。<br>
						無料でご対応させていただきます。
					</p>
					<!-- <div class="ratio-fixed">
						<img src="~/assets/img/home/mv.jpg">
					</div> -->
				</div>
			</div>
			<div class="contents_wrap border_h">
				<h2 class="mincho">熨斗（のし）について</h2>
				<div class="inner_wrap">
					<p class="sentence">
						当店ではご希望のお客様に無料で熨斗（のし）をお付けいたします。<br>
						ご希望の場合は、商品ページから「のし」の種類をご選択の上、欄に「差出人のお名前」をご記載ください。
					</p>
					<div class="ratio-fixed">
						<img src="~/assets/img/home/mv.jpg">
					</div>
					<h3 class="">のし紙の種類と使い分け</h3>
					<ul class="text_list">
						<li>
							<span class="text">「紅白無地のし」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「粗品」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「御礼」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「御祝」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「内祝（出産）」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「内祝（婚礼）」紅白結び切り</span>
						</li>
						<li>
							<span class="text">「内祝（その他）」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「快気祝」紅白結び切り</span>
						</li>
						<li>
							<span class="text">「御見舞」紅白結び切り</span>
						</li>
						<li>
							<span class="text">「御挨拶」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「御年賀」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「御年始」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「御中元」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「御歳暮」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「暑中御見舞」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「残暑御見舞」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「寒中御見舞」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「誕生祝」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「寿」紅白結び切り</span>
						</li>
						<li>
							<span class="text">「出産祝」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「母の日」紅白蝶結び</span>
						</li>
						<li>
							<span class="text">「父の日」紅白蝶結び</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="contents_wrap border_h">
				<h2 class="mincho">手提げ袋（有料）について</h2>
				<div class="inner_wrap">
					<p class="sentence">
						オプション（別売・税込110円）で手提げ袋をお付け致します。ご希望の場合は、商品ご注文時にご選択ください。<br>
						※手提げ袋は、商品サイズに合わせた紙袋となります。
					</p>
					<div class="ratio-fixed">
						<img src="~/assets/img/home/mv.jpg">
					</div>
				</div>
			</div>
		</section>

	</main>
</template>

<script>
export default {
	name: 'GiftGuidePage',
	head() {
		return {
			title: '梱包・ギフト包装について - 阿部守商店',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: '梱包・ギフト包装について - 阿部守商店' },
				{ hid: 'og:url', property: 'og:url', content: 'https://abemamoru-shouten.com/guide/gift' },
			],
		}
	},
	mounted() {
		this.$scrollTo("#menu_gift", { container: "#guide_menu", offset: -25, duration: 0, x: true, y: false })
	}
}
</script>

<style lang="scss" scoped>
	main {

		.contents {
			.contents_wrap {
				.inner_wrap {
					h3 {
						margin-top: 2.4rem;
					}
					.ratio-fixed {
						margin-top: 2.4rem;
					}
					@media only screen and (max-width: 980px) {
						h3 {
							margin-top: 2rem;
						}
						.ratio-fixed {
							margin-top: 2rem;
						}
					}
				}
			}
		}


	}
</style>