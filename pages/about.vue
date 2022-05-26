<template>
	<main>

		<section id="mv" class="mv">
			<div class="contents flex">
				<div class="img_wrap border_h">
					<div class="ratio-fixed border_v">
						<img src="~/assets/img/home/takikomi.jpg">
					</div>
				</div>
				<div class="text_wrap">
					<div class="title_wrap">
						<span class="sub_title">阿部守商店と宮城塩竃のこと</span>
						<h1 class="mincho">私たちについて</h1>
					</div>
					<div class="vertical_line border_v line_2"></div>
					<div class="sentence_wrap">
						<p class="sentence">おさかなの美味しさを余すことなく。</p>
						<p class="sentence">
							阿部守商店のルーツは、漁師。<br>
							世界中の海でさまざまな魚を獲ってきた。<br>
							どんな海がどんな魚を育てるのか。<br>
							見て、触れて、感じてきた。<br>
							もっと魚を深く知るために、<br>
							塩竈の魚市場で魚屋を始めた。<br>
							各地からとどく魚を扱い、<br>
							ますますその魅力を知ることになった。
						</p>
						<p class="sentence">
							各地からとどく魚が教えてくれた、<br>
							味の特徴や食べ方。<br>
							新しい美味しさを追求するために、<br>
							加工も手掛けるようになった。<br>
							いつ食べても、<br>
							何度食べても飽きのこない商品を目指して、<br>
							魚の食感や風味を最大限に活かした<br>
							商品を作り上げてきた。
						</p>
						<p class="sentence">
							残念なことに、塩竈の水揚げ量は減り続けている。<br>
							限られた資源を大切にするために、<br>
							獲れた魚は美味しく、無駄なくいただきたい。<br>
							そして、これからも魚食文化を受け継いでいくために、<br>
							環境負荷を極力減らし、<br>
							ふるさとの海を守っていきたい。<br>
							それが、私たち阿部守商店の使命だ。
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id="visual" class="visual">
			<div class="parallax_img ratio-fixed">
				<img src="">
			</div>
		</section>

		<section id="abe-mamoru" class="shop info">
			<div class="text_wrap">
				<h2 class="mincho">阿部守商店について</h2>
				<p class="description">阿部守商店は1971年創業。漁師として世界を巡り、海の色から魚の品質を見極める目を養いました。やがて魚市場で魚屋を開き、80年代には加工業に進出。より美味しく魚を食べる方法を追求する中で出会ったのが、愛知県の特産品である白醤油です。主原料に小麦を使った白醤油は甘みと香りに特徴があり、素材の味を活かすのに最適。焼き漬けという伝統的な技法と組み合わせ、魚を焼いてから白醤油に漬け込む独自の調理法を確立しました。創業から半世紀。魚を美味しく食べてほしいという思いは、これからも変わることはありません。</p>
			</div>
		</section>

		<section id="miyagi-shiogama" class="place info">
			<div class="flex">
				<div class="img_wrap border_h">
					<div class="ratio-fixed border_v">
						<img src="~/assets/img/home/chazuke.jpg">
					</div>
				</div>
				<div class="text_wrap">
					<h2 class="mincho">宮城塩竃について</h2>
					<p class="description">宮城県のほぼ中央に位置し、太平洋に面する港町である塩竈市。日本三景に数えられる松島湾を臨み、古今和歌集をはじめ多くの和歌に詠まれてきました。平安貴族の源融（みなもとのとおる）も風光明媚な塩竈に魅せられた一人。京に帰ったあともその感動が忘れられず、六条河原院に塩竈を模した庭を作ったとされています。また塩竈は、江戸時代に仙台の外港として水産業で栄え、現在では国内有数のマグロの水揚げ地となっています。一方で環境問題などを背景に水揚げ量は年々減少の一途をたどっており、地域の水産業は大きな課題に直面しています。</p>
				</div>
			</div>
		</section>

		<section id="reason" class="reason">
			<h2 id="fixed_title" ref="fixedTitle" class="mincho">おいしさの理由</h2>
			<div ref="fixedList" class="list_wrap border_h line_gray">
				<ul class="reason_list">
					<li id="one" class="flex border_h line_gray">
						<h4 class="mincho">其の１</h4>
						<h3 class="mincho">漁師と魚屋の目で<br>世界中から魚を厳選</h3>
						<p class="description">地元の塩竈はもちろんのこと、世界中の海の魚を吟味。漁師と魚屋の経験をもとにした目利きで、自信を持っておすすめできる素材を厳選しています。</p>
						<div class="img_wrap">
							<div class="ratio-fixed">
								<img src="~/assets/img/home/chazuke.jpg">
							</div>
						</div>
					</li>
					<li id="two" class="flex border_h line_gray">
						<h4 class="mincho">其の2</h4>
						<h3 class="mincho">絶妙な焼き加減で<br>ふっくら柔らか</h3>
						<p class="description">魚を美味しく味わっていただくために、火加減や焼き時間などの焼き方にも徹底的にこだわりました。旨みを閉じ込め、ふっくら柔らかに仕上げています。</p>
						<div class="img_wrap">
							<div class="ratio-fixed">
								<img src="~/assets/img/home/takikomi.jpg">
							</div>
						</div>
					</li>
					<li id="three" class="flex border_h line_gray">
						<h4 class="mincho">其の3</h4>
						<h3 class="mincho">骨を取ったほぐし身は<br>食べやすく、使いやすい</h3>
						<p class="description">骨を取ってあるので、お子さまからご高齢の方まで安心してお召し上がりいただけます。お茶漬けや炊き込みごはん、パスタなど、いろいろな料理にお使いください。</p>
						<div class="img_wrap">
							<div class="ratio-fixed">
								<img src="~/assets/img/home/set.jpg">
							</div>
						</div>
					</li>
					<li id="four" class="flex border_h line_gray">
						<h4 class="mincho">其の4</h4>
						<h3 class="mincho">骨を取ったほぐし身は<br>食べやすく、使いやすい</h3>
						<p class="description">骨を取ってあるので、お子さまからご高齢の方まで安心してお召し上がりいただけます。お茶漬けや炊き込みごはん、パスタなど、いろいろな料理にお使いください。</p>
						<div class="img_wrap">
							<div class="ratio-fixed">
								<img src="~/assets/img/home/set.jpg">
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

		const reasonList = [
			'#one',
			'#two',
			'#three',
			'#four'
		]

		gsap.to('#fixed_title', {
			scrollTrigger: {
				trigger: '#fixed_title',
				start: 'top top',
				endTrigger: reasonList[3],
				end: 'bottom 16%',
				scrub: true,
				pin: (window.innerWidth > 980),
				pinSpacing: false,
				onEnter: () => {
					this.$refs.fixedTitle.classList.add('fix')
					this.$refs.fixedList.classList.add('fix')
				},
				onEnterBack: () => {
					this.$refs.fixedTitle.classList.add('fix')
					this.$refs.fixedTitle.classList.remove('non-fix')
					this.$refs.fixedList.classList.add('fix')
				},
				onLeave: () => {
					this.$refs.fixedTitle.classList.remove('fix')
					this.$refs.fixedTitle.classList.add('non-fix')
					this.$refs.fixedList.classList.remove('fix')
				},
				onLeaveBack: () => {
					this.$refs.fixedTitle.classList.remove('fix')
					this.$refs.fixedTitle.classList.remove('non-fix')
					this.$refs.fixedList.classList.remove('fix')
				},
			}
		})

		reasonList.forEach((reason, index) => {
			gsap.to(reason, {
				scrollTrigger: {
					trigger: reasonList[index],
					start: 'top 16%',
					end: 'bottom 16%',
					scrub: true,
					pin: true, 
					pinSpacing: false
				}
			})
		})

	}
}
</script>

<style lang="scss" scoped>
	main {

		.mv {
			position: relative;
			padding-right: 13vw;
			.contents {
				position: relative;
				.img_wrap {
					position: sticky;
					top: 0;
					left: 0;
					width: 50vw;
					height: 100vh;
					overflow: hidden;
					.ratio-fixed {
						padding-top: 112%;
					}
				}
				.text_wrap {
					padding: 27rem 0 12rem;
					.title_wrap {
						.sub_title {
							line-height: 1.12;
						}
						h1 {
							margin-top: 1.6rem;
							font-size: 4.6rem;
							line-height: 1;
						}
					}
					.vertical_line {
						margin: 6rem auto 12rem 0;
						height: 15rem;
						&:before {
							left: 0.8rem;
						}
						&:after {
							content: none;
						}
					}
					.sentence_wrap {
						.sentence {
							margin-top: 3.5rem;
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding-right: 0;
				.contents {
					.img_wrap {
						position: relative;
						width: 100vw;
						height: auto;
						.ratio-fixed {
							padding-top: 133%;
						}
					}
					.text_wrap {
						padding: 4.8rem 6.4vw 6rem;
						.title_wrap {
							h1 {
								margin-top: 0.8rem;
								font-size: 2.4rem;
							}
						}
						.vertical_line {
							margin: 2.4rem auto 4.8rem 0;
							height: 9.6rem;
							&:before {
								left: 0.4rem;
							}
						}
						.sentence_wrap {
							.sentence {
								margin-top: 2.4rem;
							}
						}
					}
				}
			}
		}

		.visual {
			.parallax_img {
				padding-top: 49.6vw;
				@media only screen and (max-width: 980px) {
					padding-top: 133vw;
				}
			}
		}

		.info {
			padding-top: 18rem;
			h2 {
				margin-bottom: 2.4rem;
				font-size: 3.3rem;
				line-height: 1.25;
			}
			@media only screen and (max-width: 980px) {
				padding-top: 9.6rem;
				h2 {
					margin-bottom: 1.6rem;
					font-size: 2.2rem;
				}
			}
		}

		.shop {
			.text_wrap {
				margin: 0 auto;
				width: 46vw;
				h2 {
					text-align: center;
				}
				@media only screen and (max-width: 980px) {
					width: 75vw;
				}
			}
		}

		.place {
			padding-right: 20vw;
			.img_wrap {
				width: 39vw;
				.ratio-fixed {
					padding-top: 133%;
				}
			}
			.text_wrap {
				margin: auto 0;
				width: 30vw;
				
			}
			@media only screen and (max-width: 980px) {
				padding-right: 0;
				.img_wrap {
					width: 100vw;
				}
				.text_wrap {
					margin: 6rem 6.4vw 0;
					width: auto;

				}
			}
		}

		.reason {
			position: relative;
			padding: 12rem 0 18rem;
			h2 {
				padding: 6rem 0 2.4rem 16vw;
				font-size: 3.3rem;
				line-height: 1.25;
				color: #000000;
				z-index: 5;
				&.non-fix {
					color: transparent;
				}
			}
			.list_wrap {
				position: relative;
				&:before {
					content: none;
					top: 0;
					left: 0;
					display: block;
					width: 100vw;
					height: calc(16vh + 2px);
					z-index: 2;
					will-change: transform;
					background-image: url('~/assets/img/item/bg_gray.svg');
					background-repeat: repeat;
				}
				&:after {
					content: none;
				}
				&.fix {
					&:before {
						content: '';
						position: fixed;
					}
					&:after {
						content: '';
					}
				}
				.reason_list {
					padding-bottom: 83vh;
					li {
						padding: 4.8rem 10vw 9.6rem 16vw;
						overflow: hidden;
						will-change: transform;
						background-image: url('~/assets/img/item/bg_gray.svg');
						background-repeat: repeat;
						&:after {
							content: none;
						}
						h3, h4 {
							margin-bottom: 4.8rem;
							font-size: 3.3rem;
							line-height: 1.1;
						}
						h3 {
							width: 55%;
						}
						h4 {
							width: 30%;
						}
						.description {
							margin-top: auto;
							width: 30%;
							font-size: 1.6rem;
						}
						.img_wrap {
							width: 55%;
							.ratio-fixed {
								padding-top: 67.5%;
							}
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding: 7rem 0 9.6rem;
				h2 {
					padding: 2.4rem 6.4vw;
					font-size: 2.2rem;
					&.fix {

					}
				}
				.list_wrap {
					.reason_list {
						padding-bottom: calc(100vh - 15rem);
						li {
							padding: 3.5rem 6.4vw;
							overflow: hidden;
							background-image: url('~/assets/img/item/bg_gray.svg');
							background-repeat: repeat;
							&:after {
								content: none;
							}
							h3, h4 {
								margin-bottom: 2.4rem;
								font-size: 2.2rem;
								line-height: 1.1;
							}
							h3 {
								width: 75%;
							}
							h4 {
								width: 22%;
							}
							.description {
								margin-top: 2.4rem;
								width: 100%;
								font-size: 1.4rem;
								order: 1;
							}
							.img_wrap {
								width: 100%;
							}
						}
					}
				}
			}
		}


	}
</style>