<template>
	<div class="about" @mousemove="onMouseMove">
		<!-- Cursor Glow -->
		<div class="cursor-glow" :style="{ left: mouseX + 'px', top: mouseY + 'px' }"></div>
		<!-- Hero -->
		<section class="about-hero" id="about-hero">
			<div class="about-hero__grid"></div>
			<div class="about-hero__content">
				<p class="section-tag reveal reveal--up">Singapore · Est. 2026</p>
				<h1 class="about-hero__title reveal reveal--up" style="--delay: 0.1s">
					Driving Enterprise<br />
					<span class="about-hero__title--gradient">Intelligence</span>
				</h1>
				<p class="about-hero__sub reveal reveal--up" style="--delay: 0.2s">
					Nexora Digital was born in Singapore — Asia's hub for technology and business innovation. We specialise in the research, development, and commercial deployment
					of cutting-edge AI Agent technology.
				</p>
			</div>
			<div class="about-hero__orb"></div>
			<div class="about-hero__orb about-hero__orb--2"></div>
		</section>

		<!-- Mission -->
		<section class="mission" id="about-mission">
			<div class="section-container">
				<div class="mission__inner reveal reveal--up">
					<p class="section-tag">" Our Mission "</p>
					<h2 class="mission__quote">Let every enterprise own its own superintelligent brain.</h2>
					<p class="mission__body">
						We believe AI should not remain as code in a laboratory — it should become real productivity that empowers enterprise growth. By combining frontier large
						language models with deeply customised AI Agent architectures, Nexora Digital helps organisations break through efficiency bottlenecks and leap from
						"digitalisation" to true "intelligentisation".
					</p>
				</div>
			</div>
		</section>

		<!-- Features -->
		<section class="features" id="about-features">
			<div class="section-container">
				<featuresSection />
			</div>
		</section>

		<!-- howit -->
		<section class="howit">
			<div>
				<howItWorksSection />
			</div>
		</section>

		<!-- What We Do -->
		<section class="services" id="about-services">
			<div class="section-container">
				<p class="section-tag reveal reveal--up">Core Business</p>
				<h2 class="section-title reveal reveal--up" style="--delay: 0.1s">End-to-End AI Agent<br />Solutions</h2>
				<p class="section-desc reveal reveal--up" style="--delay: 0.2s">
					From requirements discovery and model customisation to full system deployment — we cover the entire lifecycle.
				</p>
				<div class="services__grid">
					<div v-for="(s, i) in services" :key="i" class="svc-card reveal reveal--up" :style="`--delay: ${0.1 + i * 0.1}s`">
						<div class="svc-card__num">{{ String(i + 1).padStart(2, '0') }}</div>
						<h3 class="svc-card__title">{{ s.title }}</h3>
						<p class="svc-card__desc">{{ s.desc }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Why Us -->
		<section class="why" id="about-why">
			<div class="section-container">
				<p class="section-tag reveal reveal--up">Why Nexora Digital</p>
				<h2 class="section-title reveal reveal--up" style="--delay: 0.1s">Built Different.<br />Delivered Better.</h2>
				<div class="why__grid">
					<div v-for="(w, i) in whyItems" :key="i" class="why-card reveal reveal--up" :style="`--delay: ${0.1 + i * 0.12}s`">
						<div class="why-card__icon"><img style="width: 50px; height: 50px" :src="w.icon" alt="" /></div>
						<h3 class="why-card__title">{{ w.title }}</h3>
						<p class="why-card__desc">{{ w.desc }}</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mouseX = ref(0);
const mouseY = ref(0);
const onMouseMove = (e) => {
	mouseX.value = e.clientX;
	mouseY.value = e.clientY;
};
import featuresSection from './features-section.vue';
import howItWorksSection from './how-it-works-section.vue';

const services = [
	{
		title: 'Enterprise AI Agent Customisation',
		desc: 'Based on your business scenarios — intelligent customer service, automated marketing, HR management, smart data analytics — we build bespoke AI Agents with contextual understanding and task execution capabilities.'
	},
	{
		title: 'Intelligent Workflow Automation',
		desc: 'Seamlessly integrate AI Agents into your existing systems (ERP, CRM, Ticketing) to enable cross-platform task planning and execution, dramatically reducing manual intervention costs.'
	},
	{
		title: 'Private Deployment & Data Security',
		desc: 'We understand the importance of enterprise data assets. We provide highly secure cloud and hybrid architecture solutions, ensuring your business data operates in a compliant, secure environment.'
	}
];

import diqiu from '../../assets/地球.png';
import jingyan from '../../assets/经验.png';
import eatrh from '../../assets/Eatrh-Support.png';

const whyItems = [
	{
		icon: diqiu,
		title: 'Rooted in Singapore, Spanning Asia-Pacific',
		desc: "Headquartered in Singapore's commercial core, we deeply understand the diverse business logic of Southeast Asia. Through nodes in Hong Kong and beyond, we serve enterprises across the entire APAC region."
	},
	{
		icon: jingyan,
		title: 'Geek Spirit & Battle-Tested Experience',
		desc: 'Our technical team comprises senior AI algorithm engineers and enterprise architects with deep hands-on experience — covering Python concurrency, automated data workflows, and API integration — ensuring systems that are both smart and stable.'
	},
	{
		icon: eatrh,
		title: 'Agile, Always-On Support',
		desc: 'Technology for good, service at heart. We provide round-the-clock technical support to ensure your AI systems remain in peak operating condition at all times.'
	}
];

onMounted(() => {
	const revealTimers = new WeakMap();
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const el = entry.target;
				if (entry.isIntersecting) {
					const delay = el.style.getPropertyValue('--delay') || '0s';
					const timer = setTimeout(() => el.classList.add('in-view'), parseFloat(delay) * 1000);
					revealTimers.set(el, timer);
				}
			});
		},
		{ threshold: 0.08 }
	);
	document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
</script>

<style lang="scss" scoped>
$black: #000000;
$white: #ffffff;
$gray-100: #f5f5f5;
$gray-400: #a1a1a1;
$gray-600: #6b6b6b;
$gray-900: #0a0a0a;

.about {
	background: $white;
	color: $black;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	overflow-x: hidden;
	-webkit-font-smoothing: antialiased;
}

.section-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 24px;
}

.section-tag {
	font-size: 13px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #888;
	margin-bottom: 16px;
}

.section-title {
	font-size: clamp(32px, 4.5vw, 58px);
	font-weight: 700;
	line-height: 1.1;
	letter-spacing: -0.03em;
	margin-bottom: 24px;
	color: $black;
}

.section-desc {
	font-size: 17px;
	line-height: 1.7;
	color: #555;
	max-width: 580px;
	margin-bottom: 64px;

	@media (max-width: 768px) {
		margin-bottom: 40px;
		font-size: 15px;
	}
}

// ─── Buttons ───
.btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 14px 32px;
	border-radius: 8px;
	font-size: 15px;
	font-weight: 500;
	text-decoration: none;
	transition: all 0.2s ease;
	cursor: pointer;
	border: none;
}
.btn--primary {
	background: $black;
	color: $white;
	&:hover {
		background: #333;
		transform: translateY(-1px);
	}
}
.btn--ghost {
	background: transparent;
	color: $black;
	border: 1px solid rgba(0, 0, 0, 0.2);
	&:hover {
		border-color: rgba(0, 0, 0, 0.5);
		transform: translateY(-1px);
	}
}

// ─── Hero ───
.about-hero {
	position: relative;
	min-height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 140px 24px 100px;
	overflow: hidden;

	&__grid {
		position: absolute;
		inset: 0;
		background-image: linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
		background-size: 60px 60px;
		mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%);
	}

	&__content {
		position: relative;
		z-index: 2;
		max-width: 860px;
	}

	&__title {
		font-size: clamp(36px, 6.5vw, 82px);
		font-weight: 700;
		line-height: 1.05;
		letter-spacing: -0.04em;
		margin-bottom: 28px;
		color: $black;

		&--gradient {
			padding: 0 5px;
			background: linear-gradient(135deg, #000000 0%, #888888 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
		}
	}

	&__sub {
		font-size: 18px;
		line-height: 1.7;
		color: #666;
		max-width: 600px;
		margin: 0 auto;
	}

	&__orb {
		position: absolute;
		width: 600px;
		height: 600px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 70%);
		top: 5%;
		left: 50%;
		transform: translateX(-50%);
		animation: pulse 8s ease-in-out infinite;
		pointer-events: none;

		&--2 {
			width: 380px;
			height: 380px;
			background: radial-gradient(circle, rgba(0, 0, 0, 0.02) 0%, transparent 70%);
			top: 25%;
			animation-delay: 4s;
		}
	}
}

@keyframes pulse {
	0%,
	100% {
		transform: translateX(-50%) scale(1);
		opacity: 1;
	}
	50% {
		transform: translateX(-50%) scale(1.15);
		opacity: 0.6;
	}
}

// ─── Mission ───
.mission {
	padding: 120px 0;
	border-top: 1px solid rgba(0, 0, 0, 0.08);

	&__inner {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	&__quote {
		font-size: clamp(24px, 3.5vw, 42px);
		font-weight: 600;
		line-height: 1.25;
		letter-spacing: -0.02em;
		margin-bottom: 32px;
		color: $black;
	}

	&__body {
		font-size: 17px;
		line-height: 1.8;
		color: #555;
	}
}

.features {
	padding: 120px 0;
	border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.howit {
	border-top: 1px solid rgba(0, 0, 0, 0.08);
}

// ─── Services ───
.services {
	padding: 120px 0;
	border-top: 1px solid rgba(0, 0, 0, 0.08);

	&__grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: rgba(0, 0, 0, 0.08);
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 16px;
		overflow: hidden;
	}
}

.svc-card {
	background: $gray-100;
	padding: 40px 32px;
	transition: background 0.3s ease;

	&:hover {
		background: rgba(0, 0, 0, 0.03);
	}

	&__num {
		font-size: 11px;
		letter-spacing: 0.1em;
		color: #aaa;
		margin-bottom: 20px;
		font-variant-numeric: tabular-nums;
	}

	&__title {
		font-size: 18px;
		font-weight: 600;
		letter-spacing: -0.01em;
		margin-bottom: 14px;
		color: $black;
	}

	&__desc {
		font-size: 14px;
		line-height: 1.7;
		color: #555;
	}
}

// ─── Why ───
.why {
	padding: 120px 0;
	border-top: 1px solid rgba(0, 0, 0, 0.08);

	&__grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		margin-top: 64px;
	}
}

.why-card {
	background: $gray-100;
	border: 1px solid rgba(0, 0, 0, 0.08);
	border-radius: 16px;
	padding: 40px 32px;
	transition: all 0.3s ease;

	&:hover {
		border-color: rgba(0, 0, 0, 0.2);
		transform: translateY(-3px);
	}

	&__icon {
		font-size: 28px;
		margin-bottom: 20px;
	}

	&__title {
		font-size: 17px;
		font-weight: 600;
		letter-spacing: -0.01em;
		margin-bottom: 12px;
		color: $black;
	}

	&__desc {
		font-size: 14px;
		line-height: 1.7;
		color: #555;
	}
}

// ─── Reveal Animations ───
.reveal {
	opacity: 0;
	transition:
		opacity 0.7s ease,
		transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);

	&--up {
		transform: translateY(48px);
	}

	&.in-view {
		opacity: 1;
		transform: translate(0, 0);
	}
}

// ─── Cursor Glow ───
.cursor-glow {
	position: fixed;
	width: 400px;
	height: 400px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(0, 0, 0, 0.04) 0%, transparent 65%);
	transform: translate(-50%, -50%);
	pointer-events: none;
	z-index: 0;
	transition:
		left 0.12s ease,
		top 0.12s ease;
}

// ─── Responsive ───
@media (max-width: 768px) {
	.about-hero {
		padding: 100px 20px 60px;
		min-height: auto;

		&__title {
			font-size: clamp(36px, 10vw, 56px);
		}

		&__sub {
			font-size: 15px;
		}
	}

	.mission {
		padding: 64px 0;

		&__quote {
			font-size: clamp(20px, 6vw, 30px);
		}
	}

	.features {
		padding: 64px 0;
	}

	.services {
		padding: 64px 0;

		&__grid {
			grid-template-columns: 1fr;
		}
	}

	.svc-card {
		padding: 28px 24px;
	}

	.why {
		padding: 64px 0;

		&__grid {
			grid-template-columns: 1fr;
			margin-top: 40px;
		}
	}

	.why-card {
		padding: 28px 24px;
	}
}
</style>
