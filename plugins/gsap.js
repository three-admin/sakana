import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
	gsap.registerPlugin(ScrollTrigger)
}

export default (context, inject) => {
	var endless = ''
	inject('setHeaderEndless', (el) => {
		context.$endless = el
	}),
	inject('setHeaderGSAP', (start, scrollEnd) => {
		if (context.route.name == "index" && window.innerWidth > 980) {
			gsap.timeline({
				scrollTrigger: {
					trigger: '#business',
					start: start,
					end: () => '+=' + scrollEnd,
					pin: true,
					// horizontal: true,
					scrub: true,
				}
			})
		} else {
			gsap.timeline().invalidate()
		}
		gsap.to(
			'.header_nav', {
				top: '-50rem',
				overwrite: true,
				scrollTrigger: {
					trigger: 'footer',
					start: 'top 10%',
					scrub: true
				}
			}
		)
		if (context.route.name != "estates-id") {
			gsap.to(
				'.header_cta', {
					bottom: '-50rem',
					scrollTrigger: {
						trigger: 'footer',
						scrub: true
					}
				}
			)
		}
		if (window.innerWidth > 980) {
			gsap.to(
				'.endless_link', {
					scrollTrigger: {
						trigger: '.mv',
						start: 'bottom 15%',
						scrub: true,
						onEnter: () => {
							context.$endless.classList.add('bgWhite')
						},
						onEnterBack: () => {
							context.$endless.classList.remove('bgWhite')
						},
						onLeave: () => {
							context.$endless.classList.add('bgWhite')
						},
						onLeaveBack: () => {
							context.$endless.classList.remove('bgWhite')
						},
					}
				}
			)
		}
	})
}