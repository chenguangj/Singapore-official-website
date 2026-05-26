<template>
	<footer class="footer">
		<canvas ref="canvasRef" class="footer__canvas"></canvas>
		<div class="section-container">
			<div class="footer__top">
				<div class="footer__brand">
					<div class="nav__logo">Nexora&nbsp;<span class="nav__logo-dot">Digital</span></div>
					<p class="footer__tagline">Autonomous AI Agents for the Enterprise.</p>
				</div>
				<div class="footer__links">
					<div class="footer__col">
						<h4>Home</h4>
						<a @click="scrollToSection('hero')">Home</a>
						<a @click="scrollToSection('partners')">Trusted Partners</a>
						<a @click="scrollToSection('capabilities')">AI Capabilities</a>
						<a @click="scrollToSection('cases')">Industry Cases</a>
						<a @click="scrollToSection('stats')">Our Impact</a>
						<a @click="scrollToSection('research')">Trust & Safety</a>
						<a @click="scrollToSection('enterprise')">Enterprise</a>
						<a @click="scrollToSection('contact')">Contact Us</a>
					</div>
					<div class="footer__col">
						<h4>Cases</h4>
						<div class="a_div" @click="navigateToCase()">All Case Studies</div>
						<div class="a_div" @click="navigateToCase('aiboost-case-001')">GOAT</div>
						<div class="a_div" @click="navigateToCase('aiboost-case-002')">Streamax</div>
						<div class="a_div" @click="navigateToCase('aiboost-case-003')">Nation Technologies</div>
						<div class="a_div" @click="navigateToCase('aiboost-case-004')">Hengfei Investment Group</div>
						<div class="a_div" @click="navigateToCase('aiboost-case-006')">realme</div>
						<div class="a_div" @click="navigateToCase('aiboost-case-007')">Zall Group</div>
					</div>
					<div class="footer__col">
						<h4>Contact Us</h4>
						<div class="a_div" @click="navigateToContact()">Get In Touch</div>
						<div class="a_div" @click="navigateToContact('contact-form')">Enterprise Trial</div>
						<div class="a_div" @click="navigateToContact('contact-offices')">Our Offices</div>
						<div class="a_div" @click="navigateToContact('contact-cta')">Schedule a Call</div>
					</div>
					<div class="footer__col">
						<h4>About Us</h4>
						<div class="a_div" @click="navigateTo('About.AboutCom')">About Us</div>
						<div class="a_div" @click="navigateToAbout('about-mission')">Our Mission</div>
						<div class="a_div" @click="navigateToAbout('about-features')">Features</div>
						<div class="a_div" @click="navigateToAbout('about-services')">Core Business</div>
						<div class="a_div" @click="navigateToAbout('about-why')">Why Us</div>
					</div>
				</div>
			</div>
			<div class="footer__bottom">
				<div class="footer__bottom-row1">
					<span style="padding-left: 2px">© 2026 Nexora Digital Pte. Ltd. All rights reserved. Singapore.</span>
					<a class="footer__website" href="https://aiboostapp.cloud" target="_blank" rel="noopener">
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10" />
							<line x1="2" y1="12" x2="22" y2="12" />
							<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
						</svg>
						<span>aiboostapp.cloud</span>
					</a>
				</div>
				<div class="footer__legal">
					<span class="footer__contact-item">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
							<circle cx="12" cy="10" r="3" />
						</svg>
						<span style="padding-bottom: 3px">531A Upper Cross Street#03-108 Hong Lim Complex Singapore 051531</span>
					</span>
					<span class="footer__contact-item">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path
								d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
							/>
						</svg>
						<span style="padding-bottom: 3px">+65 8688 1371 &nbsp; +852 469 14160</span>
					</span>
					<span class="footer__contact-item">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
							<polyline points="22,6 12,13 2,6" />
						</svg>
						<span style="padding-bottom: 3px">support@aiboostapp.cloud</span>
					</span>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref(null);
let frameId = 0;

onMounted(() => {
	const canvas = canvasRef.value;
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	if (!ctx) return;

	const chars = '·∘○◯◌';
	let time = 0;

	const resize = () => {
		const dpr = window.devicePixelRatio || 1;
		const rect = canvas.getBoundingClientRect();
		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;
		ctx.scale(dpr, dpr);
	};

	resize();
	window.addEventListener('resize', resize);

	const render = () => {
		const rect = canvas.getBoundingClientRect();
		ctx.clearRect(0, 0, rect.width, rect.height);
		ctx.font = '9px monospace';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		const cols = Math.floor(rect.width / 28);
		const rows = Math.floor(rect.height / 28);

		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				const px = (x + 0.5) * (rect.width / cols);
				const py = (y + 0.5) * (rect.height / rows);

				const wave1 = Math.sin(x * 0.2 + time * 2) * Math.cos(y * 0.15 + time);
				const wave2 = Math.sin((x + y) * 0.1 + time * 1.5);
				const wave3 = Math.cos(x * 0.1 - y * 0.1 + time * 0.8);

				const combined = (wave1 + wave2 + wave3) / 3;
				const normalized = (combined + 1) / 2;

				const charIndex = Math.floor(normalized * (chars.length - 1));
				const alpha = 0.08 + normalized * 0.2;

				ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
				ctx.fillText(chars[charIndex], px, py);
			}
		}

		time += 0.03;
		frameId = requestAnimationFrame(render);
	};

	render();

	onUnmounted(() => {
		window.removeEventListener('resize', resize);
		cancelAnimationFrame(frameId);
	});
});
const router = useRouter();
function navigateTo(name) {
	router.push({ name });
}
function navigateToAbout(id) {
	const HEADER_OFFSET = 80;
	const doScroll = () => {
		const el = document.getElementById(id);
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
		window.scrollTo({ top, behavior: 'smooth' });
	};
	if (router.currentRoute.value.name !== 'About.AboutCom') {
		router.push({ name: 'About.AboutCom' }).then(() => {
			setTimeout(doScroll, 300);
		});
	} else {
		doScroll();
	}
}
function navigateToContact(id) {
	const HEADER_OFFSET = 80;
	const doScroll = () => {
		if (!id) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}
		const el = document.getElementById(id);
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
		window.scrollTo({ top, behavior: 'smooth' });
	};
	if (router.currentRoute.value.name !== 'Contact') {
		router.push({ name: 'Contact' }).then(() => setTimeout(doScroll, 350));
	} else {
		doScroll();
	}
}
function navigateToCase(id) {
	const HEADER_OFFSET = 88;
	const doScroll = () => {
		if (!id) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}
		const el = document.getElementById(id);
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
		window.scrollTo({ top, behavior: 'smooth' });
	};
	if (router.currentRoute.value.name !== 'Cases') {
		router.push({ name: 'Cases' }).then(() => setTimeout(doScroll, 350));
	} else {
		doScroll();
	}
}
function scrollToSection(id) {
	const HEADER_OFFSET = 80;
	const doScroll = () => {
		const el = document.getElementById(id);
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
		window.scrollTo({ top, behavior: 'smooth' });
	};
	if (router.currentRoute.value.name !== 'Home') {
		router.push({ name: 'Home' }).then(() => {
			setTimeout(doScroll, 300);
		});
	} else {
		doScroll();
	}
}
</script>

<style lang="scss" scoped>
$white: #000;
$gray-400: #000;
$gray-600: #999;

.section-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 24px;
}

.nav__logo {
	font-size: 22px;
	font-weight: 700;
	letter-spacing: -0.02em;
}

.nav__logo-dot {
	color: #666;
}

.footer {
	position: relative;
	border-top: 1px solid #00000014;
	padding: 80px 0 40px;
	overflow: hidden;

	@media (max-width: 768px) {
		padding: 48px 0 32px;
	}

	&__canvas {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
	}

	.section-container {
		position: relative;
		z-index: 1;
	}

	&__top {
		display: flex;
		justify-content: space-between;
		margin-bottom: 64px;

		@media (max-width: 768px) {
			flex-direction: column;
			gap: 40px;
			margin-bottom: 40px;
		}
	}

	&__brand {
		max-width: 300px;
	}

	&__tagline {
		font-size: 14px;
		color: $gray-600;
		margin-top: 12px;
		line-height: 1.6;
	}

	&__links {
		display: flex;
		gap: 80px;

		@media (max-width: 768px) {
			gap: 0;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 32px 24px;
		}
	}

	&__col {
		display: flex;
		flex-direction: column;
		gap: 12px;

		h4 {
			font-size: 14px;
			font-weight: 600;
			margin-bottom: 8px;
			color: $white;
		}

		a,
		.a_div {
			cursor: pointer;
			font-size: 14px;
			color: $gray-600;
			text-decoration: none;
			transition: color 0.2s;

			&:hover {
				color: $gray-400;
			}
		}
	}

	&__bottom {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding-top: 32px;
		border-top: 1px solid #00000014;
		font-size: 13px;
		color: $gray-600;
	}

	&__bottom-row1 {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media (max-width: 768px) {
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
		}
	}

	&__website {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-size: 13px;
		color: $gray-600;
		text-decoration: none;
		transition: color 0.2s;

		svg {
			opacity: 0.5;
			flex-shrink: 0;
			display: block;
		}

		&:hover {
			color: $gray-400;
			svg {
				opacity: 0.7;
			}
		}
	}

	&__legal {
		display: flex;
		gap: 24px;
		flex-wrap: wrap;

		@media (max-width: 768px) {
			flex-direction: column;
			gap: 12px;
		}

		a {
			color: $gray-600;
			text-decoration: none;
			transition: color 0.2s;

			&:hover {
				color: $gray-400;
			}
		}
	}

	&__contact-item {
		display: flex;
		align-items: center;
		gap: 6px;
		color: $gray-600;
		font-size: 13px;

		svg {
			flex-shrink: 0;
			opacity: 0.5;
			display: block;
		}

		a {
			color: $gray-600;
			text-decoration: none;
			transition: color 0.2s;

			&:hover {
				color: $gray-400;
			}
		}
	}
}
</style>
