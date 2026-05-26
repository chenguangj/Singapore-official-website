<template>
	<div class="landing" :class="{ 'landing--light': isLight }" ref="landingRef">
		<!-- Hero Section -->
		<section class="hero" id="hero" @mousemove="onMouseMove">
			<div class="hero__grid"></div>
			<div class="hero__cursor-glow" :style="{ left: mouseX + 'px', top: mouseY + 'px' }"></div>
			<div class="hero__content">
				<p class="hero__tag">Powering the Next Generation of AI Agents</p>
				<h1 class="hero__title">
					We Build Autonomous<br />
					<span class="hero__title--gradient">AI Agents</span>
					<span class="typewriter">
						<span class="typewriter__text">{{ typedText }}</span
						><span class="typewriter__cursor">|</span></span
					>
				</h1>
				<p class="hero__sub">
					From planning and reasoning to tool calling and task execution — our platform enables enterprises to deploy AI agents that don't just respond, they deliver.
				</p>
				<div class="hero__actions">
					<a class="btn btn--primary" @click="navigateTo('Cases')">VIew Cases</a>
					<a class="btn btn--ghost" @click="navigateToContact">Explore Capabilities</a>
				</div>
			</div>
			<div class="hero__visual">
				<div class="hero__orb"></div>
				<div class="hero__orb hero__orb--2"></div>
			</div>
		</section>

		<!-- Trusted By / Partners Marquee -->
		<section class="marquee-section" id="partners">
			<p class="marquee-section__label">Trusted by Industry Leaders</p>
			<div class="marquee">
				<div class="marquee__track">
					<span v-for="n in 2" :key="n" class="marquee__group">
						<span class="marquee__item">Oracle</span>
						<span class="marquee__item">OpenAI</span>
						<span class="marquee__item">Google DeepMind</span>
						<span class="marquee__item">Anthropic</span>
						<span class="marquee__item">Meta AI</span>
						<span class="marquee__item">Microsoft</span>
						<span class="marquee__item">NVIDIA</span>
						<span class="marquee__item">Amazon Web Services</span>
					</span>
				</div>
			</div>
		</section>

		<!-- Capabilities Section -->
		<section class="capabilities" id="capabilities">
			<div class="section-container">
				<p class="section-tag reveal reveal--up">The Agent Evolution</p>
				<h2 class="section-title reveal reveal--up" style="--delay: 0.1s">Beyond Chatbots.<br />Into Autonomous Action.</h2>
				<p class="section-desc reveal reveal--up" style="--delay: 0.2s">
					Our AI agents go far beyond simple conversation. They plan, reason, call external tools, execute multi-step tasks, and learn from outcomes — all autonomously.
				</p>
				<div class="capabilities__grid">
					<div class="cap-card" v-for="(cap, i) in capabilities" :key="i" :style="`--delay: ${i * 0.08}s`">
						<img class="cap-card__icon" :src="cap.icon" alt="" style="width: 30px; height: 30px" />
						<h3 class="cap-card__title">{{ cap.title }}</h3>
						<p class="cap-card__desc">{{ cap.desc }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- 别的sg-ai页面 -->
		<section class="reveal reveal--up" id="cases">
			<Sgai />
		</section>

		<!-- Stats Section -->
		<section class="stats" id="stats">
			<div class="section-container">
				<div class="stats__grid">
					<div class="stats__item" v-for="(s, i) in stats" :key="i" :style="`--delay: ${i * 0.1}s`">
						<div class="stats__number">{{ s.number }}</div>
						<div class="stats__label">{{ s.label }}</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Trust / Research + Safety Section -->
		<section class="trust" id="research">
			<div class="section-container">
				<p class="section-tag reveal reveal--up">Trust & Safety</p>
				<h2 class="section-title reveal reveal--up" style="--delay: 0.1s">Built on Research.<br />Secured by Design.</h2>
				<div class="trust__grid">
					<div class="trust-card" v-for="(t, i) in trustItems" :key="i" :style="`--delay: ${i * 0.1}s`">
						<img class="trust-card__icon" :src="t.icon" alt="" style="width: 30px; height: 30px" />
						<h3 class="trust-card__title">{{ t.title }}</h3>
						<p class="trust-card__desc">{{ t.desc }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Enterprise Section -->
		<section class="enterprise" id="enterprise">
			<div class="section-container">
				<p class="section-tag reveal reveal--up">Enterprise Solutions</p>
				<h2 class="section-title reveal reveal--up" style="--delay: 0.1s">AI Agents for<br />Mission-Critical Operations.</h2>
				<p class="section-desc reveal reveal--up" style="--delay: 0.2s">
					We partner with Fortune 500 companies and leading tech firms to deploy production-grade AI agent systems. Our solutions are SOC 2 compliant, on-premise
					deployable, and built for scale.
				</p>
				<div class="enterprise__logos">
					<div class="enterprise__logo" v-for="(logo, i) in enterpriseLogos" :key="i" :style="`--delay: ${i * 0.06}s`">
						{{ logo }}
					</div>
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<section class="cta" id="contact">
			<div class="section-container">
				<h2 class="cta__title reveal reveal--up">Ready to Deploy<br />Your AI Agent Workforce?</h2>
				<p class="cta__desc reveal reveal--up" style="--delay: 0.1s">
					Talk to our solutions team and discover how autonomous AI agents can transform your enterprise operations.
				</p>
				<div class="hero__actions reveal reveal--up" style="--delay: 0.2s">
					<a class="btn btn--primary btn--lg" @click="navigateToContact">Contact Sales</a>
					<!-- <a class="btn btn--ghost btn--lg" href="javascript:void(0)">Read Documentation</a> -->
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Sgai from './sg_ai_cases_innovative.vue';

const landingRef = ref(null);
const isLight = ref(true);
const mouseX = ref(0);
const mouseY = ref(0);
const route = useRoute();
const router = useRouter();
const navigateToContact = () => {
	if (route.name === 'Contact') {
		document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
	} else {
		router.push({ name: 'Contact' }).then(() => {
			setTimeout(() => {
				document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
			}, 300);
		});
	}
};
function navigateTo(name) {
	router.push({ name });
}

// Typewriter — loops through phrases for "That Act." slot
const PHRASES = ['That Act.', 'That Think.', 'That Deliver.', 'That Scale.', 'That Learn.'];
const typedText = ref('');
let phraseIndex = 0;
let typingTimer = null;

const startTyping = () => {
	const phrase = PHRASES[phraseIndex % PHRASES.length];
	let i = 0;
	typedText.value = '';

	// Type forward
	const typeForward = () => {
		typingTimer = setInterval(() => {
			typedText.value = phrase.slice(0, i + 1);
			i++;
			if (i >= phrase.length) {
				clearInterval(typingTimer);
				// Pause, then erase
				typingTimer = setTimeout(eraseBack, 1400);
			}
		}, 80);
	};

	// Erase backward
	const eraseBack = () => {
		typingTimer = setInterval(() => {
			typedText.value = typedText.value.slice(0, -1);
			if (typedText.value.length === 0) {
				clearInterval(typingTimer);
				phraseIndex++;
				// Pause, then type next phrase
				typingTimer = setTimeout(startTyping, 400);
			}
		}, 45);
	};

	typeForward();
};

const onScroll = () => {};

const onMouseMove = (e) => {
	mouseX.value = e.clientX;
	mouseY.value = e.clientY;
};

onMounted(() => {
	window.addEventListener('mousemove', onMouseMove);

	// Intersection Observer — fade up, slide left/right
	const revealTimers = new WeakMap();
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const el = entry.target;
				if (entry.isIntersecting) {
					const delay = el.style.getPropertyValue('--delay') || '0s';
					const timer = setTimeout(
						() => {
							el.classList.add('in-view');
						},
						parseFloat(delay) * 1000
					);
					revealTimers.set(el, timer);
				}
			});
		},
		{ threshold: 0.08 }
	);

	document.querySelectorAll('.cap-card, .trust-card, .stats__item, .reveal, .enterprise__logo').forEach((el) => observer.observe(el));

	// Start typewriter after a short delay
	setTimeout(startTyping, 300);
});

onUnmounted(() => {
	window.removeEventListener('mousemove', onMouseMove);
	if (typingTimer) clearInterval(typingTimer);
});

import Autonomous from '../../assets/人工智能.png';
import ToolCalling from '../../assets/API开发.png';
import MultiStep from '../../assets/步骤.png';
import SelfCorrection from '../../assets/纠正.png';
import Guardrails from '../../assets/安全.png';
import MultiAgent from '../../assets/编排.png';
const capabilities = [
	{
		icon: Autonomous,
		title: 'Autonomous Planning',
		desc: 'Agents decompose complex goals into executable sub-tasks, dynamically adjusting plans based on real-time feedback and environmental changes.'
	},
	{
		icon: ToolCalling,
		title: 'Tool Calling & APIs',
		desc: 'Seamlessly invoke external tools, databases, APIs, and third-party services. Our agents orchestrate multi-tool workflows with zero human intervention.'
	},
	{
		icon: MultiStep,
		title: 'Multi-Step Execution',
		desc: 'Execute long-horizon tasks across multiple systems — from data retrieval and analysis to report generation and deployment pipelines.'
	},
	{
		icon: SelfCorrection,
		title: 'Self-Correction',
		desc: 'Built-in reflection loops allow agents to evaluate their own outputs, detect errors, and iteratively refine results before delivery.'
	},
	{
		icon: Guardrails,
		title: 'Guardrails & Safety',
		desc: 'Enterprise-grade safety layers ensure agents operate within defined boundaries. Full audit trails, permission controls, and kill switches included.'
	},
	{
		icon: MultiAgent,
		title: 'Multi-Agent Orchestration',
		desc: 'Deploy swarms of specialised agents that collaborate, delegate, and coordinate to tackle enterprise-scale challenges.'
	}
];

const stats = [
	{ number: '500+', label: 'Enterprise Deployments' },
	{ number: '12B+', label: 'Agent Actions Executed' },
	{ number: '99.97%', label: 'Uptime SLA' },
	{ number: '8', label: 'Global AI Partners' }
];

import PublishedResearch from '../../assets/PublishedResearch.png';
import SecurityFirst from '../../assets/SecurityFirst.png';
import ProductionGrade from '../../assets/ProductionGrade.png';
import StrategicPartnerships from '../../assets/StrategicPartnerships.png';
const trustItems = [
	{
		icon: PublishedResearch,
		title: 'Published Research',
		desc: 'Our team has co-authored papers with researchers from OpenAI, Google DeepMind, and NUS on agent architectures, tool-use, and safety alignment.'
	},
	{
		icon: SecurityFirst,
		title: 'Security First',
		desc: 'SOC 2 Type II certified. End-to-end encryption. On-premise deployment options. We meet the strictest compliance requirements across APAC and globally.'
	},
	{
		icon: ProductionGrade,
		title: 'Production Grade',
		desc: 'Battle-tested infrastructure handling millions of agent actions daily. Built on top of Oracle Cloud Infrastructure and AWS for maximum reliability.'
	},
	{
		icon: StrategicPartnerships,
		title: 'Strategic Partnerships',
		desc: 'Official technology partners with Oracle, OpenAI, Anthropic, NVIDIA, and Microsoft — giving us early access to cutting-edge models and infrastructure.'
	}
];

const enterpriseLogos = ['Oracle', 'OpenAI', 'Anthropic', 'NVIDIA', 'Microsoft', 'Google Cloud', 'AWS', 'Meta'];
</script>

<style lang="scss" scoped>
// ─── Variables ───
$black: #000000;
$white: #ffffff;
$gray-100: #f5f5f5;
$gray-200: #e5e5e5;
$gray-400: #a1a1a1;
$gray-600: #6b6b6b;
$gray-800: #1a1a1a;
$gray-900: #0a0a0a;
$accent: #ffffff;

// ─── Base ───
.landing {
	background: $black;
	color: $white;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	overflow-x: hidden;
	-webkit-font-smoothing: antialiased;
	transition:
		background 0.3s ease,
		color 0.3s ease;

	&--light {
		background: $white;
		color: $black;

		.hero__grid {
			background-image: linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
		}
		.hero__tag,
		.hero__sub {
			color: #666;
		}
		.hero__title--gradient {
			padding-right: 2px;
			background: linear-gradient(135deg, #000000 0%, #888888 100%);
			-webkit-background-clip: text;
			background-clip: text;
		}
		.hero__orb {
			background: radial-gradient(circle, rgba(0, 0, 0, 0.04) 0%, transparent 70%);
			&--2 {
				background: radial-gradient(circle, rgba(0, 0, 0, 0.02) 0%, transparent 70%);
			}
		}

		.btn--primary {
			background: $black;
			color: $white;
			&:hover {
				background: #333;
			}
		}
		.btn--ghost {
			color: $black;
			border-color: rgba(0, 0, 0, 0.2);
			&:hover {
				border-color: rgba(0, 0, 0, 0.5);
			}
		}

		.marquee-section {
			border-color: rgba(0, 0, 0, 0.08);
			&__label {
				color: #999;
			}
		}
		.marquee__item {
			color: rgba(0, 0, 0, 0.2);
		}

		.section-tag {
			color: #888;
		}
		.section-desc {
			color: #555;
		}

		.cap-card {
			background: $gray-100;
			border-color: rgba(0, 0, 0, 0.08);
			&:hover {
				border-color: rgba(0, 0, 0, 0.2);
				background: rgba(0, 0, 0, 0.03);
			}
			&__desc {
				color: #555;
			}
		}

		.narrative__block {
			border-top-color: rgba(0, 0, 0, 0.08);
		}

		.stats {
			border-color: rgba(0, 0, 0, 0.08);
			&__label {
				color: #888;
			}
		}

		.trust-card {
			background: $gray-100;
			border-color: rgba(0, 0, 0, 0.08);
			&:hover {
				border-color: rgba(0, 0, 0, 0.2);
			}
			&__desc {
				color: #555;
			}
		}

		.enterprise {
			border-top-color: rgba(0, 0, 0, 0.08);
			&__logo {
				background: $gray-100;
				border-color: rgba(0, 0, 0, 0.08);
				color: #888;
				&:hover {
					border-color: rgba(0, 0, 0, 0.3);
					color: $black;
				}
			}
		}

		.cta {
			border-top-color: rgba(0, 0, 0, 0.08);
			background: radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0, 0, 0, 0.03) 0%, transparent 100%);
			&__desc {
				color: #555;
			}
		}

		.hero__cursor-glow {
			background: radial-gradient(circle, rgba(0, 0, 0, 0.04) 0%, transparent 65%);
		}

		.enterprise__logo:hover {
			box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
		}

		.marquee__item:hover {
			color: rgba(0, 0, 0, 0.5);
		}

		.trust-card::before {
			background: radial-gradient(circle at 50% 0%, rgba(0, 0, 0, 0.03) 0%, transparent 60%);
		}
		.btn::after {
			background: rgba(0, 0, 0, 0.06);
		}
	}
}

// ─── Utility ───
.section-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 24px;
}

.section-tag {
	font-size: 13px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: $gray-400;
	margin-bottom: 16px;
}

.section-title {
	font-size: clamp(36px, 5vw, 64px);
	font-weight: 700;
	line-height: 1.1;
	letter-spacing: -0.03em;
	margin-bottom: 24px;
}

.section-desc {
	font-size: 18px;
	line-height: 1.7;
	color: $gray-400;
	max-width: 640px;
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
	background: $white;
	color: $black;
	&:hover {
		background: $gray-200;
		transform: translateY(-1px);
	}
}

.btn--ghost {
	background: transparent;
	color: $white;
	border: 1px solid rgba(255, 255, 255, 0.2);
	&:hover {
		border-color: rgba(255, 255, 255, 0.5);
		transform: translateY(-1px);
	}
}

.btn--lg {
	padding: 18px 40px;
	font-size: 16px;
}

// ─── Typewriter ───
.typewriter {
	display: inline;

	&__cursor {
		display: inline-block;
		font-weight: 300;
		color: $gray-400;
		margin-left: 2px;
		animation: blink-fast 0.6s step-end infinite;

		&--blink {
			animation: blink 1.1s step-end infinite;
		}
	}
}

@keyframes blink-fast {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
}

@keyframes blink {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
}

// ─── Hero ───
.hero {
	position: relative;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 120px 24px 80px;
	overflow: hidden;

	&__grid {
		position: absolute;
		inset: 0;
		background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
		background-size: 60px 60px;
		mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%);
	}

	&__content {
		position: relative;
		z-index: 2;
		max-width: 900px;
	}

	&__tag {
		font-size: 13px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: $gray-400;
		margin-bottom: 32px;
	}

	&__title {
		font-size: clamp(40px, 7vw, 88px);
		font-weight: 700;
		line-height: 1.05;
		letter-spacing: -0.04em;
		margin-bottom: 28px;

		&--gradient {
			background: linear-gradient(135deg, #ffffff 0%, #666666 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
		}
	}

	&__sub {
		font-size: 19px;
		line-height: 1.7;
		color: $gray-400;
		max-width: 620px;
		margin: 0 auto 48px;
	}

	&__actions {
		display: flex;
		gap: 16px;
		justify-content: center;
		flex-wrap: wrap;
	}

	&__visual {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	&__orb {
		position: absolute;
		width: 600px;
		height: 600px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 70%);
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		animation: pulse 8s ease-in-out infinite;

		&--2 {
			width: 400px;
			height: 400px;
			background: radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%);
			top: 30%;
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

// ─── Marquee ───
.marquee-section {
	padding: 60px 0;
	border-top: 1px solid rgba(255, 255, 255, 0.06);
	border-bottom: 1px solid rgba(255, 255, 255, 0.06);

	&__label {
		text-align: center;
		font-size: 13px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: $gray-600;
		margin-bottom: 32px;
	}
}

.marquee {
	overflow: hidden;
	white-space: nowrap;

	&__track {
		display: inline-flex;
		animation: scroll 30s linear infinite;
	}

	&__group {
		display: inline-flex;
		gap: 80px;
		padding-right: 80px;
	}

	&__item {
		font-size: 20px;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.15);
		letter-spacing: -0.01em;
	}
}

@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
}

// ─── Capabilities ───
.capabilities {
	padding: 140px 0;

	&__grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		margin-top: 64px;
	}
}

.cap-card {
	background: $gray-900;
	border: 1px solid rgba(255, 255, 255, 0.06);
	border-radius: 16px;
	padding: 40px 32px;
	transition: all 0.4s ease;
	opacity: 0;
	transform: translateY(40px);

	&.in-view {
		opacity: 1;
		transform: translateY(0);
	}

	&:hover {
		border-color: rgba(255, 255, 255, 0.15);
		transform: translateY(-4px);
		background: rgba(255, 255, 255, 0.03);
	}

	&__icon {
		font-size: 32px;
		margin-bottom: 20px;
	}

	&__title {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 12px;
		letter-spacing: -0.01em;
	}

	&__desc {
		font-size: 14px;
		line-height: 1.7;
		color: $gray-400;
	}
}

// ─── Stats ───
.stats {
	padding: 100px 0;
	border-top: 1px solid rgba(255, 255, 255, 0.06);
	border-bottom: 1px solid rgba(255, 255, 255, 0.06);

	&__grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 24px;
		text-align: center;
	}

	&__item {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.5s ease;

		&.in-view {
			opacity: 1;
			transform: translateY(0);
		}
	}

	&__number {
		font-size: clamp(40px, 5vw, 64px);
		font-weight: 700;
		letter-spacing: -0.03em;
		margin-bottom: 8px;
	}

	&__label {
		font-size: 14px;
		color: $gray-400;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
}

// ─── Trust ───
.trust {
	padding: 140px 0;

	&__grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 24px;
		margin-top: 64px;
	}
}

.trust-card {
	background: $gray-900;
	border: 1px solid rgba(255, 255, 255, 0.06);
	border-radius: 16px;
	padding: 48px 40px;
	transition: all 0.4s ease;
	opacity: 0;
	transform: translateY(40px);

	&.in-view {
		opacity: 1;
		transform: translateY(0);
	}

	&:hover {
		border-color: rgba(255, 255, 255, 0.15);
	}

	&__icon {
		font-size: 28px;
		margin-bottom: 20px;
	}

	&__title {
		font-size: 22px;
		font-weight: 600;
		margin-bottom: 12px;
		letter-spacing: -0.01em;
	}

	&__desc {
		font-size: 15px;
		line-height: 1.7;
		color: $gray-400;
	}
}

// ─── Enterprise ───
.enterprise {
	padding: 140px 0;
	border-top: 1px solid rgba(255, 255, 255, 0.06);

	&__logos {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		margin-top: 64px;
	}

	&__logo {
		padding: 20px 36px;
		background: $gray-900;
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		font-size: 16px;
		font-weight: 600;
		color: $gray-400;
		transition: all 0.3s ease;

		&:hover {
			border-color: rgba(255, 255, 255, 0.2);
			color: $white;
		}
	}
}

// ─── CTA ───
.cta {
	padding: 160px 0;
	text-align: center;
	border-top: 1px solid rgba(255, 255, 255, 0.06);
	background: radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255, 255, 255, 0.03) 0%, transparent 100%);

	&__title {
		font-size: clamp(40px, 5vw, 72px);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.03em;
		margin-bottom: 24px;
	}

	&__desc {
		font-size: 18px;
		line-height: 1.7;
		color: $gray-400;
		max-width: 560px;
		margin: 0 auto 48px;
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
	&--left {
		transform: translateX(-64px);
	}
	&--right {
		transform: translateX(64px);
	}

	&.in-view {
		opacity: 1;
		transform: translate(0, 0);
	}
}

// ─── Scroll-driven card animations ───
.cap-card {
	&:nth-child(1) {
		transition-delay: 0s;
	}
	&:nth-child(2) {
		transition-delay: 0.08s;
	}
	&:nth-child(3) {
		transition-delay: 0.16s;
	}
	&:nth-child(4) {
		transition-delay: 0.24s;
	}
	&:nth-child(5) {
		transition-delay: 0.32s;
	}
	&:nth-child(6) {
		transition-delay: 0.4s;
	}
}

.trust-card {
	&:nth-child(odd) {
		transform: translateX(-48px);
		opacity: 0;
	}
	&:nth-child(even) {
		transform: translateX(48px);
		opacity: 0;
	}
	&.in-view {
		transform: translateX(0);
		opacity: 1;
	}
}

.stats__item {
	&:nth-child(1) {
		transition-delay: 0s;
	}
	&:nth-child(2) {
		transition-delay: 0.1s;
	}
	&:nth-child(3) {
		transition-delay: 0.2s;
	}
	&:nth-child(4) {
		transition-delay: 0.3s;
	}
}

.enterprise__logo {
	opacity: 0;
	transform: scale(0.88);
	transition:
		opacity 0.5s ease,
		transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
		border-color 0.3s,
		color 0.3s,
		box-shadow 0.3s;

	&.in-view {
		opacity: 1;
		transform: scale(1);
	}

	&:hover {
		transform: scale(1.05) translateY(-2px);
		box-shadow: 0 8px 24px rgba(255, 255, 255, 0.06);
	}

	&:active {
		transform: scale(0.97);
	}
}

// ─── Hero cursor glow ───
.hero {
	&__cursor-glow {
		position: fixed;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.055) 0%, transparent 65%);
		transform: translate(-50%, -50%);
		pointer-events: none;
		z-index: 1;
		transition:
			left 0.12s ease,
			top 0.12s ease;
	}
}

// ─── Enhanced button interactions ───
.btn {
	position: relative;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(255, 255, 255, 0.08);
		opacity: 0;
		transition: opacity 0.2s;
		border-radius: inherit;
	}

	&:active::after {
		opacity: 1;
	}
	&:active {
		transform: translateY(1px) scale(0.98) !important;
	}
}

// ─── Cap card enhanced hover ───
.cap-card {
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.04) 0%, transparent 60%);
		opacity: 0;
		transition: opacity 0.3s;
		border-radius: inherit;
		pointer-events: none;
	}

	&:hover::before {
		opacity: 1;
	}
	&:active {
		transform: translateY(-2px) scale(0.99) !important;
	}

	&__icon {
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	&:hover &__icon {
		transform: scale(1.3);
		transform-origin: center center;
	}
}

// ─── Trust card enhanced hover ───
.trust-card {
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.04) 0%, transparent 60%);
		opacity: 0;
		transition: opacity 0.3s;
		border-radius: inherit;
		pointer-events: none;
	}

	&:hover::before {
		opacity: 1;
	}
	&:hover {
		transform: translateY(-4px);
	}
	&:active {
		transform: translateY(-2px) scale(0.99);
	}

	&__icon {
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	&:hover &__icon {
		// transform: scale(1.2);
	}
}

// ─── Stats number pop ───
.stats__item {
	cursor: default;

	&:hover .stats__number {
		transform: scale(1.08);
	}

	.stats__number {
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
}

// ─── Marquee pause on hover ───
.marquee:hover .marquee__track {
	animation-play-state: paused;
}

.marquee__item {
	transition: color 0.25s;
	cursor: default;

	&:hover {
		color: rgba(255, 255, 255, 0.5);
	}
}

// ─── Responsive ───
@media (max-width: 768px) {
	.hero {
		padding: 90px 20px 60px;
		min-height: auto;

		&__tag {
			font-size: 11px;
			letter-spacing: 1.5px;
			margin-bottom: 20px;
		}

		&__title {
			font-size: clamp(32px, 10vw, 48px);
		}

		&__sub {
			font-size: 15px;
			margin-bottom: 36px;
		}

		&__actions {
			flex-direction: column;
			align-items: center;
			gap: 12px;

			.btn {
				width: 100%;
				max-width: 320px;
			}
		}

		&__orb {
			width: 300px;
			height: 300px;
		}
	}

	.section-title {
		font-size: clamp(28px, 8vw, 42px);
	}

	.section-desc {
		font-size: 15px;
	}

	.capabilities {
		padding: 80px 0;

		&__grid {
			grid-template-columns: 1fr;
		}
	}

	.cap-card {
		padding: 28px 24px;
	}

	.trust {
		padding: 80px 0;

		&__grid {
			grid-template-columns: 1fr;
		}
	}

	.trust-card {
		padding: 32px 24px;
	}

	.stats {
		padding: 60px 0;

		&__grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 40px;
		}
	}

	.enterprise {
		padding: 80px 0;

		&__logos {
			gap: 10px;
			justify-content: center;
		}

		&__logo {
			padding: 14px 20px;
			font-size: 14px;
		}
	}

	.cta {
		padding: 80px 0;

		&__title {
			font-size: clamp(28px, 8vw, 48px);
		}

		&__desc {
			font-size: 15px;
		}

		.hero__actions {
			flex-direction: column;
			align-items: center;

			.btn {
				width: 100%;
				max-width: 320px;
			}
		}
	}

	.marquee-section {
		padding: 40px 0;
	}

	.marquee__item {
		font-size: 16px;
	}

	.marquee__group {
		gap: 48px;
		padding-right: 48px;
	}

	.narrative__inner {
		flex-direction: column !important;
		gap: 40px;
	}

	.nav__links {
		display: none;
	}

	.footer__top {
		flex-direction: column;
		gap: 48px;
	}

	.footer__links {
		gap: 40px;
		flex-wrap: wrap;
	}

	.footer__bottom {
		flex-direction: column;
		gap: 16px;
		text-align: center;
	}
}
</style>
