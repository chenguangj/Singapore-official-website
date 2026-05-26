<template>
	<div class="cases-page" @mousemove="onMouseMove">
		<!-- Cursor Glow -->
		<div class="cursor-glow" :style="{ left: mouseX + 'px', top: mouseY + 'px' }"></div>
		<!-- Hero -->
		<section class="cases-hero">
			<div class="cases-hero__grid"></div>
			<div class="cases-hero__content">
				<p class="cases-hero__tag reveal reveal--up">Client Success Stories</p>
				<h1 class="cases-hero__title reveal reveal--up" style="--delay: 0.1s">
					Real Enterprises.<br />
					<span class="cases-hero__title--gradient">Real Results.</span>
				</h1>
				<p class="cases-hero__sub reveal reveal--up" style="--delay: 0.2s">
					From Singapore's financial giants to global supply chain leaders — see how AIBoost transforms enterprise operations with autonomous AI agents that think, act,
					and deliver at scale.
				</p>
			</div>
			<div class="cases-hero__orb"></div>
			<div class="cases-hero__orb cases-hero__orb--2"></div>
		</section>

		<!-- Sticky Scroll Cases Section -->
		<section class="showcase-section">
			<div
				v-for="(caseItem, index) in cases"
				:key="caseItem.id"
				:id="caseItem.id"
				class="showcase-row"
				:ref="
					(el) => {
						if (el) itemRefs[index] = el;
					}
				"
			>
				<!-- 左侧：position:absolute，JS 控制 top，限制在本 row 内 -->
				<div class="showcase-row__left">
					<div class="showcase-row__left-inner" :style="leftInnerStyles[index]">
						<span class="showcase-row__icon" v-html="getIndustryIcon(caseItem.industry)"></span>
						<p class="showcase-row__industry">{{ caseItem.industry }}</p>
						<h2 class="showcase-row__title">{{ caseItem.client_name }}</h2>
						<p class="showcase-row__desc">{{ caseItem.case_sum_info }}</p>
					</div>
				</div>

				<!-- 右侧：正常流，内容多高就多高 -->
				<div class="showcase-row__right">
					<!-- 核心指标 -->
					<div class="showcase-item__metrics reveal reveal--up">
						<div v-for="(impact, i) in caseItem.impacts" :key="i" class="showcase-item__metric">
							<span class="showcase-item__metric-val">{{ impact.value }}</span>
							<span class="showcase-item__metric-label">{{ impact.label }}</span>
						</div>
					</div>

					<!-- Challenge & Solution -->
					<div class="showcase-item__body reveal reveal--up" style="--delay: 0.08s">
						<div class="showcase-item__block">
							<p class="showcase-item__block-label">Challenge</p>
							<p class="showcase-item__block-text">{{ caseItem.challenge }}</p>
						</div>
						<div class="showcase-item__block">
							<p class="showcase-item__block-label">Solution</p>
							<p class="showcase-item__block-text">{{ caseItem.solution }}</p>
						</div>
					</div>

					<!-- Key Features -->
					<div class="showcase-item__features reveal reveal--up" style="--delay: 0.14s">
						<p class="showcase-item__block-label">Key Capabilities</p>
						<ul class="showcase-item__feature-list">
							<li v-for="(f, i) in caseItem.keyFeatures" :key="i">{{ f }}</li>
						</ul>
					</div>

					<!-- Images -->
					<div class="showcase-item__images reveal reveal--up" style="--delay: 0.18s">
						<img v-for="(img, i) in caseItem.case_image_url" :key="i" :src="img" :alt="caseItem.client_name" class="showcase-item__img" />
					</div>

					<!-- Tags -->
					<div class="showcase-item__tags reveal reveal--up" style="--delay: 0.22s">
						<span v-for="tag in caseItem.tags" :key="tag" class="showcase-item__tag">{{ tag }}</span>
					</div>

					<!-- 引言 -->
					<div class="showcase-item__quote reveal reveal--up" style="--delay: 0.26s">
						<p class="showcase-item__quote-text">"{{ caseItem.testimonial_quote }}"</p>
						<p class="showcase-item__quote-author">— {{ caseItem.testimonial_author }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Stats bar -->
		<section class="cases-stats">
			<div class="cases-stats__inner">
				<div v-for="(s, i) in stats" :key="i" class="cases-stats__item reveal reveal--up" :style="`--delay: ${i * 0.08}s`">
					<div class="cases-stats__num">{{ s.number }}</div>
					<div class="cases-stats__label">{{ s.label }}</div>
				</div>
			</div>
		</section>

		<!-- CTA -->
		<section class="cases-cta">
			<div class="cases-cta__inner">
				<h2 class="cases-cta__title reveal reveal--up">Ready to be the next success story?</h2>
				<p class="cases-cta__desc reveal reveal--up" style="--delay: 0.1s">
					Talk to our solutions team and discover how autonomous AI agents can transform your enterprise operations.
				</p>
				<div class="cases-cta__actions reveal reveal--up" style="--delay: 0.2s">
					<a class="btn btn--primary" @click="navigateToContact">Contact Sales</a>
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
// ── GOAT ──
import Bank1 from '../../assets/cases/Bank1.jpg';
import Bank2 from '../../assets/cases/Bank2.jpg';
// ── Streamax - Smart Transportation ──
import Airlines1 from '../../assets/cases/Airlines1.jpg';
import Airlines2 from '../../assets/cases/Airlines2.jpg';
// ── Nation Technologies - Semiconductor ──
import Capita1 from '../../assets/cases/Capita1.jpg';
const Capita2 = 'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=800&h=600&fit=crop'; // 半导体芯片制造
// ── Hengfei Investment Group ──
import Keppel1 from '../../assets/cases/Keppel1.jpg';
import Keppel2 from '../../assets/cases/Keppel2.jpg';
// ── realme - Smart Devices ──
import Shopee1 from '../../assets/cases/Shopee1.jpg';
const Shopee2 = 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=600&fit=crop'; // 智能手机特写
// ── Zall Group - Supply Chain ──
import Bread1 from '../../assets/cases/Bread1.jpg';
import Bread2 from '../../assets/cases/Bread2.jpg';

const itemRefs = ref([]);
const leftInnerStyles = ref([]);

const HEADER_H = 88;
const LERP = 0.1; // 缓动系数，越小越丝滑

// 每个 row 的当前渲染值和目标值
let currentTops = [];
let targetTops = [];
let rafId = null;

const calcTargets = () => {
	const isMobile = window.innerWidth <= 900;
	itemRefs.value.forEach((rowEl, i) => {
		if (!rowEl) return;
		const innerEl = rowEl.querySelector('.showcase-row__left-inner');
		if (!innerEl) return;

		if (isMobile) {
			targetTops[i] = 0;
			return;
		}

		const rowRect = rowEl.getBoundingClientRect();
		const innerH = innerEl.offsetHeight;
		const rowH = rowEl.offsetHeight;

		let t = HEADER_H - rowRect.top;
		t = Math.max(0, Math.min(t, rowH - innerH));
		targetTops[i] = t;
	});
};

const tick = () => {
	let needsUpdate = false;

	currentTops.forEach((cur, i) => {
		const target = targetTops[i] ?? cur;
		const diff = target - cur;
		if (Math.abs(diff) < 0.2) {
			currentTops[i] = target;
		} else {
			currentTops[i] = cur + diff * LERP;
			needsUpdate = true;
		}
		leftInnerStyles.value[i] = { transform: `translateY(${Math.round(currentTops[i])}px)` };
	});

	if (needsUpdate) {
		rafId = requestAnimationFrame(tick);
	} else {
		rafId = null;
	}
};

const onScroll = () => {
	calcTargets();
	if (!rafId) {
		rafId = requestAnimationFrame(tick);
	}
};

onMounted(() => {
	const count = 8;
	currentTops = new Array(count).fill(0);
	targetTops = new Array(count).fill(0);
	leftInnerStyles.value = new Array(count).fill({});
	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onScroll, { passive: true });
	onScroll();

	// Reveal animations (IntersectionObserver)
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

onUnmounted(() => {
	window.removeEventListener('scroll', onScroll);
	window.removeEventListener('resize', onScroll);
	if (rafId) cancelAnimationFrame(rafId);
});

const cases = [
	{
		id: 'aiboost-case-001',
		client_name: 'GOAT',
		industry: 'E-commerce',
		case_image_url: [Bank1, Bank2],
		case_sum_info: "AI-powered authentication and marketplace optimization for the world's largest sneaker and apparel resale platform.",
		challenge:
			"GOAT's authentication teams were manually verifying thousands of sneakers and luxury items daily across multiple authentication centers. Counterfeit detection required expert authenticators to inspect every detail, creating bottlenecks during peak sales periods. Pricing optimization relied on manual market analysis, missing real-time opportunities. Customer service teams struggled to handle authentication inquiries and order tracking across global markets.",
		solution:
			"AIBoost deployed a multi-agent system integrated with GOAT's authentication workflow and marketplace platform. The Authentication Intelligence Agent uses computer vision to analyze product images, comparing against a database of authentic items to flag potential counterfeits with 95% accuracy. The Dynamic Pricing Agent monitors real-time market demand, competitor pricing, and inventory levels to optimize seller pricing recommendations. The Customer Experience Agent handles authentication status inquiries, shipping updates, and product questions in multiple languages.",
		keyFeatures: [
			'Computer vision-powered authentication with 95% accuracy',
			'Real-time dynamic pricing optimization across 500,000+ listings',
			'Multilingual customer support automation in 8 languages',
			'Fraud detection and seller verification automation'
		],
		impacts: [
			{ value: '50%', label: 'Faster authentication process' },
			{ value: '30%', label: 'Increase in marketplace GMV' },
			{ value: '70%', label: 'Customer inquiry automation' }
		],
		tags: ['E-commerce', 'Computer Vision', 'Authentication', 'Dynamic Pricing', 'Marketplace'],
		testimonial_quote:
			'The AI agents have transformed our authentication process and marketplace efficiency. We can now scale authentication without proportionally increasing headcount.',
		testimonial_author: 'VP of Operations, GOAT Group'
	},
	{
		id: 'aiboost-case-002',
		client_name: 'Streamax',
		industry: 'Smart Transportation',
		case_image_url: [Airlines1, Airlines2],
		case_sum_info: 'AI-powered fleet management and intelligent video analytics for commercial vehicle monitoring across Asia-Pacific transportation networks.',
		challenge:
			"Streamax's fleet management teams were manually reviewing thousands of hours of vehicle footage daily across bus, taxi, and logistics fleets in 50+ cities. Driver behavior analysis, accident investigation, and compliance reporting required extensive human review time. Real-time incident detection was limited, and predictive maintenance relied on reactive service schedules rather than actual vehicle condition data.",
		solution:
			"AIBoost deployed a multi-agent system integrated with Streamax's vehicle telematics and video platforms. The Fleet Intelligence Agent continuously analyzes video streams from 100,000+ vehicles, automatically detecting harsh braking, lane departures, driver fatigue, and collision risks in real-time. The Predictive Maintenance Agent monitors vehicle sensor data to forecast component failures and optimize service schedules. The Compliance Agent auto-generates incident reports with timestamped video evidence for insurance claims and regulatory submissions.",
		keyFeatures: [
			'Real-time video analytics across 100,000+ commercial vehicles',
			'AI-powered driver behavior scoring and coaching recommendations',
			'Predictive maintenance with 85% accuracy on component failures',
			'Automated incident report generation with video evidence'
		],
		impacts: [
			{ value: '60%', label: 'Reduction in manual review time' },
			{ value: '35%', label: 'Decrease in accident rates' },
			{ value: '40%', label: 'Maintenance cost savings' }
		],
		tags: ['Fleet Management', 'Video Analytics', 'Predictive Maintenance', 'Driver Safety', 'IoT'],
		testimonial_quote:
			'The AI agents have transformed our fleet operations. We now detect and respond to incidents in real-time, and our predictive maintenance has dramatically reduced vehicle downtime.',
		testimonial_author: 'VP of Product Operations, Streamax'
	},
	{
		id: 'aiboost-case-003',
		client_name: 'Nation Technologies',
		industry: 'Semiconductor',
		case_image_url: [Capita1, Capita2],
		case_sum_info: 'AI-powered chip design optimization and smart manufacturing for a leading semiconductor company specializing in secure chips and SoC solutions.',
		challenge:
			"Nation Technologies' chip design teams were manually verifying complex circuit designs and running thousands of simulation tests, taking weeks to complete each iteration. Manufacturing yield optimization relied on reactive analysis of defect patterns, missing opportunities to prevent issues during production. Quality control across wafer fabrication required extensive manual inspection and testing. Supply chain coordination with foundries and packaging partners lacked real-time visibility, causing delays in production schedules.",
		solution:
			"AIBoost's Chip Design Intelligence Agent automates design rule checking (DRC) and layout versus schematic (LVS) verification, reducing verification time by 60%. The Manufacturing Optimization Agent analyzes real-time production data from fabrication equipment to predict yield issues and automatically adjust process parameters. The Quality Intelligence Agent uses computer vision to inspect wafer defects at nanometer scale, detecting anomalies that human inspectors would miss. The Supply Chain Coordination Agent monitors foundry capacity, material availability, and logistics to optimize production scheduling and minimize lead times.",
		keyFeatures: [
			'Automated chip design verification with AI-powered DRC and LVS checking',
			'Real-time manufacturing yield optimization and defect prediction',
			'Nanometer-scale wafer defect detection with computer vision',
			'Intelligent supply chain coordination across foundries and packaging partners'
		],
		impacts: [
			{ value: '60%', label: 'Faster verification' },
			{ value: '35%', label: 'Improvement in manufacturing yield' },
			{ value: '45%', label: 'Reduction in defect rates' }
		],
		tags: ['Semiconductor', 'Chip Design', 'Smart Manufacturing', 'Quality Control', 'Supply Chain'],
		testimonial_quote:
			'The AI agents have transformed our chip design and manufacturing processes. We now iterate faster and achieve higher yields with unprecedented quality control.',
		testimonial_author: 'VP of Operations, Nation Technologies'
	},
	{
		id: 'aiboost-case-004',
		client_name: 'Hengfei Investment Group',
		industry: 'Real Estate & Investment',
		case_image_url: [Keppel1, Keppel2],
		case_sum_info:
			'AI-powered property investment analysis and portfolio management for a leading real estate investment group with assets across commercial, residential, and industrial properties in Guangdong.',
		challenge:
			"Hengfei Investment Group's portfolio management teams were manually analyzing market data, property valuations, and investment opportunities across hundreds of properties in Guangdong province. Due diligence for new acquisitions required extensive manual research and financial modeling, taking weeks to complete. Tenant management across commercial properties was reactive, with lease renewals and rent adjustments based on outdated market data. Risk assessment for property investments lacked real-time market intelligence.",
		solution:
			"AIBoost's Investment Intelligence Agent continuously monitors real estate market trends, property valuations, and economic indicators across Guangdong to identify high-potential investment opportunities. The Portfolio Management Agent analyzes property performance, tenant quality, and market conditions to optimize asset allocation and recommend strategic acquisitions or disposals. The Tenant Intelligence Agent automates lease management, predicts tenant churn, and recommends optimal pricing strategies based on market comparables. The Risk Assessment Agent evaluates investment risks using multi-factor analysis including market volatility, regulatory changes, and economic forecasts.",
		keyFeatures: [
			'Real-time property market intelligence across Guangdong province',
			'AI-powered investment opportunity scoring and due diligence automation',
			'Predictive tenant churn analysis and dynamic lease pricing',
			'Multi-factor risk assessment for property investments'
		],
		impacts: [
			{ value: '60%', label: 'Faster investment decision-making' },
			{ value: '35%', label: 'Improvement in portfolio ROI' },
			{ value: '45%', label: 'Reduction in tenant vacancy rates' }
		],
		tags: ['Real Estate', 'Investment Management', 'Portfolio Optimization', 'Market Intelligence', 'Risk Assessment'],
		testimonial_quote:
			'The AI agents have transformed our investment analysis and portfolio management. We now identify opportunities faster and make data-driven decisions with confidence.',
		testimonial_author: 'Chief Investment Officer, Hengfei Investment Group'
	},
	{
		id: 'aiboost-case-006',
		client_name: 'realme',
		industry: 'Smart Devices',
		case_image_url: [Shopee1, Shopee2],
		case_sum_info: 'AI-powered quality control and customer experience optimization for a fast-growing smartphone brand with 100M+ users globally.',
		challenge:
			"realme's rapid growth to 100M+ users created massive quality control and customer service challenges. Manufacturing lines across multiple facilities struggled to maintain consistent quality standards during high-volume production. Customer service teams were overwhelmed with device troubleshooting, warranty claims, and software update inquiries across 60+ markets. Product feedback from millions of users was scattered across social media, forums, and support channels, making it difficult to identify and prioritize improvements.",
		solution:
			"AIBoost's Quality Intelligence Agent monitors production lines using computer vision and sensor data, detecting defects in real-time and automatically adjusting manufacturing parameters to maintain quality standards. The Customer Experience Agent provides instant device diagnostics, troubleshooting guidance, and warranty processing in 15 languages. The Product Feedback Agent aggregates and analyzes user feedback from all channels, identifying common issues and feature requests to inform product roadmap decisions. The Supply Chain Agent optimizes component sourcing and inventory levels across global markets.",
		keyFeatures: [
			'Real-time quality control with computer vision across manufacturing facilities',
			'Multilingual customer support automation in 15 languages',
			'AI-powered product feedback analysis from 100M+ users',
			'Dynamic supply chain optimization for global markets'
		],
		impacts: [
			{ value: '40%', label: 'Reduction in defect rates' },
			{ value: '55%', label: 'Faster customer issue resolution' },
			{ value: '30%', label: 'Improvement in customer satisfaction' }
		],
		tags: ['Smartphones', 'Quality Control', 'Customer Experience', 'Product Analytics', 'Global Operations'],
		testimonial_quote:
			'The AI agents have enabled us to scale quality and customer service while maintaining the high standards our users expect. We now respond to market feedback faster than ever.',
		testimonial_author: 'VP of Product Operations, realme'
	},
	{
		id: 'aiboost-case-007',
		client_name: 'Zall Group',
		industry: 'Supply Chain & Logistics',
		case_image_url: [Bread1, Bread2],
		case_sum_info:
			'AI-powered supply chain finance and logistics intelligence for a leading commercial trading and supply chain service platform connecting manufacturers with distributors across China.',
		challenge:
			"Zall Group's platform was connecting thousands of manufacturers with distributors across multiple industries, but manual credit assessment and logistics coordination created inefficiencies. Supply chain financing decisions required extensive manual review of trading partner creditworthiness, slowing capital deployment. Demand forecasting relied on historical patterns, leading to frequent stockouts or excess inventory. Logistics routing was suboptimal, increasing delivery times and costs across the platform.",
		solution:
			"AIBoost's Supply Chain Finance Agent uses machine learning to assess trading partner creditworthiness and automate financing approval decisions, enabling faster capital deployment to qualified partners. The Logistics Intelligence Agent dynamically routes shipments based on real-time traffic, weather, and capacity data to minimize delivery times and costs. The Demand Forecasting Agent analyzes real-time market signals, inventory levels, and transaction patterns to optimize order matching and inventory allocation. The Risk Management Agent monitors commodity prices, supply disruptions, and partner performance to provide early warnings and mitigation recommendations.",
		keyFeatures: [
			'AI-powered supply chain finance credit assessment and approval automation',
			'Dynamic logistics routing with real-time traffic and weather integration',
			'Intelligent demand forecasting and order matching across platform',
			'Real-time risk monitoring for commodity prices and supply disruptions'
		],
		impacts: [
			{ value: '50%', label: 'Faster financing approval' },
			{ value: '35%', label: 'Reduction in delivery times' },
			{ value: '40%', label: 'Improvement in inventory turnover' }
		],
		tags: ['Supply Chain Finance', 'Logistics', 'B2B Platform', 'Credit Risk', 'Commercial Trading'],
		testimonial_quote:
			'The AI agents have transformed our platform efficiency and financing operations. We now assess credit risk and deploy capital faster while optimizing logistics in real-time.',
		testimonial_author: 'Chief Operating Officer, Zall Group'
	}
];

const industryIcons = {
	'E-commerce': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
	</svg>`,
	'Smart Transportation': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
	</svg>`,
	'Semiconductor': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
	</svg>`,
	'Real Estate & Investment': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
	</svg>`,
	'Smart Devices': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.-linecap="round" stroke-linejoin="round">
		<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
	</svg>`,
	'Supply Chain & Logistics': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
	</svg>`,
	Finance: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<rect x="3" y="10" width="18" height="11" rx="1"/><path d="M3 10l9-7 9 7"/><line x1="9" y1="21" x2="9" y2="14"/><line x1="15" y1="21" x2="15" y2="14"/>
	</svg>`,
	Aviation: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<path d="M22 16.5H2l4-8h3l-1 4h4l3-8h3l-1 8h4a2 2 0 0 1 0 4z"/><line x1="2" y1="20" x2="22" y2="20"/>
	</svg>`,
	'Real Estate': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<rect x="4" y="2" width="16" height="20" rx="1"/><line x1="9" y1="22" x2="9" y2="12"/><line x1="15" y1="22" x2="15" y2="12"/><rect x="9" y="12" width="6" height="10"/><line x1="8" y1="6" x2="8" y2="6.01"/><line x1="12" y1="6" x2="12" y2="6.01"/><line x1="16" y1="6" x2="16" y2="6.01"/><line x1="8" y1="10" x2="8" y2="10.01"/><line x1="16" y1="10" x2="16" y2="10.01"/>
	</svg>`,
	'Maritime & Energy': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<path d="M12 2v6l3 3-3 1-3-1 3-3"/><path d="M5 20h14"/><path d="M6 16l1-6h10l1 6"/><path d="M3 20c0-2 2-4 4-4h10c2 0 4 2 4 4"/>
	</svg>`,
	'Agriculture & Food': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<path d="M12 22V12"/><path d="M5 12C5 7 8 3 12 3s7 4 7 9"/><path d="M5 12c0-3 3-5 7-5"/><path d="M19 12c0-3-3-5-7-5"/>
	</svg>`,
	'Tech & Internet': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
	</svg>`,
	'Retail & Consumer': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
	</svg>`,
	'Trade & Manufacturing': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
		<rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
	</svg>`
};

const getIndustryIcon = (industry) =>
	industryIcons[industry] ||
	`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

const stats = [
	{ number: '6', label: 'Enterprise Clients' },
	{ number: '6+', label: 'Industries Served' },
	{ number: '500+', label: 'Agent Deployments' },
	{ number: 'APAC', label: 'Regional Coverage' }
];
</script>

<style lang="scss" scoped>
$black: #000000;
$white: #ffffff;
$gray-100: #f5f5f5;
$gray-200: #e5e5e5;
$gray-400: #a1a1a1;
$gray-600: #6b6b6b;

.cases-page {
	background: $white;
	color: $black;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	overflow-x: hidden;
	-webkit-font-smoothing: antialiased;
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
.cases-hero {
	position: relative;
	min-height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 140px 24px 80px;
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
		max-width: 800px;
	}

	&__tag {
		font-size: 13px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: $gray-600;
		margin-bottom: 24px;
	}

	&__title {
		font-size: clamp(36px, 6.5vw, 80px);
		font-weight: 700;
		line-height: 1.05;
		letter-spacing: -0.04em;
		margin-bottom: 24px;

		&--gradient {
			background: linear-gradient(135deg, #000 0%, #888 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
		}
	}

	&__sub {
		font-size: 18px;
		line-height: 1.7;
		color: #666;
		max-width: 580px;
		margin: 0 auto;
	}

	&__orb {
		position: absolute;
		width: 500px;
		height: 500px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 70%);
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		animation: orbPulse 8s ease-in-out infinite;
		pointer-events: none;

		&--2 {
			width: 320px;
			height: 320px;
			top: 30%;
			animation-delay: 4s;
		}
	}
}

@keyframes orbPulse {
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

// ─── Showcase Section ───
.showcase-section {
	border-top: 1px solid rgba(0, 0, 0, 0.08);
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 24px;

	@media (max-width: 900px) {
		padding: 0 20px;
	}
}

// ─── Each row = left sticky + right content ───
.showcase-row {
	display: grid;
	grid-template-columns: 260px 1fr;
	// stretch（默认）：左列高度 = 右列高度，sticky 才有足够空间滚动
	align-items: stretch;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);

	&:last-child {
		border-bottom: none;
	}

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}

	&__left {
		position: relative; // inner 相对于此定位
		border-right: 1px solid rgba(0, 0, 0, 0.08);
		padding: 0 32px 0 0;

		@media (max-width: 900px) {
			border-right: none;
			border-bottom: 1px solid rgba(0, 0, 0, 0.08);
			padding: 32px 0 24px;
		}
	}

	// JS 用 translateY 控制位置，will-change 提示 GPU 合成
	&__left-inner {
		position: absolute;
		top: 0;
		left: 0;
		right: 32px;
		will-change: transform;
		padding: 48px 0;

		@media (max-width: 900px) {
			position: static;
			padding-top: 0;
			will-change: auto;
		}
	}

	&__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border: 1px solid rgba(0, 0, 0, 0.12);
		border-radius: 8px;
		background: $gray-100;
		color: $black;
		margin-bottom: 16px;

		svg {
			display: block;
		}
	}

	&__industry {
		font-size: 11px;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: $gray-600;
		margin-bottom: 10px;
	}

	&__title {
		font-size: clamp(18px, 1.8vw, 24px);
		font-weight: 700;
		line-height: 1.25;
		letter-spacing: -0.03em;
		color: $black;
		margin-bottom: 12px;
	}

	&__desc {
		font-size: 13px;
		line-height: 1.7;
		color: $gray-600;
	}

	// 右侧：正常流
	&__right {
		padding: 48px 0 48px 48px;

		@media (max-width: 900px) {
			padding: 32px 0;
		}
	}
}

// ─── showcase-item sub-elements (inside showcase-row__right) ───
.showcase-item {
	// Metrics row
	&__metrics {
		display: flex;
		gap: 0;
		margin-bottom: 24px;
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 10px;
		overflow: hidden;
	}

	&__metric {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 16px 12px;
		border-right: 1px solid rgba(0, 0, 0, 0.08);
		background: $gray-100;

		&:last-child {
			border-right: none;
		}
	}

	&__metric-val {
		font-size: 22px;
		font-weight: 700;
		letter-spacing: -0.03em;
		color: $black;
		line-height: 1;
		margin-bottom: 4px;
	}

	&__metric-label {
		font-size: 11px;
		color: $gray-600;
		text-align: center;
		line-height: 1.4;
	}

	// Images
	&__images {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		margin-bottom: 20px;
		border-radius: 10px;
		overflow: hidden;
		border: 1px solid rgba(0, 0, 0, 0.08);

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
		}
	}

	&__img {
		width: 100%;
		display: block;
		object-fit: cover;
		aspect-ratio: 16 / 9;
	}

	// Challenge & Solution
	&__body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
		margin-bottom: 20px;

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
		}
	}

	&__block {
		background: $gray-100;
		border: 1px solid rgba(0, 0, 0, 0.06);
		border-radius: 10px;
		padding: 20px;
	}

	&__block-label {
		font-size: 10px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: $gray-600;
		margin-bottom: 10px;
	}

	&__block-text {
		font-size: 13px;
		line-height: 1.75;
		color: #333;
	}

	// Key Features
	&__features {
		margin-bottom: 20px;
		background: $gray-100;
		border: 1px solid rgba(0, 0, 0, 0.06);
		border-radius: 10px;
		padding: 20px;
	}

	&__feature-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px 24px;

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
		}

		li {
			font-size: 13px;
			line-height: 1.6;
			color: #333;
			padding-left: 14px;
			position: relative;

			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 8px;
				width: 5px;
				height: 5px;
				border-radius: 50%;
				background: $black;
			}
		}
	}

	// Tags
	&__tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-bottom: 20px;
	}

	&__tag {
		font-size: 11px;
		padding: 4px 12px;
		border-radius: 100px;
		border: 1px solid rgba(0, 0, 0, 0.12);
		color: $gray-600;
		letter-spacing: 0.02em;
	}

	// Quote
	&__quote {
		padding-top: 20px;
		border-top: 1px solid rgba(0, 0, 0, 0.06);
	}

	&__quote-text {
		font-size: 14px;
		line-height: 1.7;
		color: #444;
		font-style: italic;
		margin-bottom: 8px;
	}

	&__quote-author {
		font-size: 12px;
		color: $gray-600;
		letter-spacing: 0.02em;
	}

	@media (max-width: 900px) {
		padding: 40px 0;
	}
}

// ─── Stats ───
.cases-stats {
	border-top: 1px solid rgba(0, 0, 0, 0.08);
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	padding: 80px 24px;

	&__inner {
		max-width: 900px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 24px;
		text-align: center;

		@media (max-width: 640px) {
			grid-template-columns: repeat(2, 1fr);
			gap: 40px;
		}
	}

	&__num {
		font-size: clamp(36px, 4vw, 56px);
		font-weight: 700;
		letter-spacing: -0.03em;
		margin-bottom: 8px;
	}

	&__label {
		font-size: 13px;
		color: $gray-600;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
}

// ─── CTA ───
.cases-cta {
	padding: 140px 24px;
	text-align: center;

	@media (max-width: 768px) {
		padding: 80px 20px;
	}

	&__inner {
		max-width: 640px;
		margin: 0 auto;
	}

	&__title {
		font-size: clamp(32px, 4.5vw, 56px);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.03em;
		margin-bottom: 20px;
	}

	&__desc {
		font-size: 17px;
		line-height: 1.7;
		color: #555;
		margin-bottom: 40px;
	}

	&__actions {
		display: flex;
		gap: 16px;
		justify-content: center;
		flex-wrap: wrap;

		@media (max-width: 480px) {
			flex-direction: column;
			align-items: center;

			.btn {
				width: 100%;
				max-width: 320px;
			}
		}
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

// ─── Mobile Responsive ───
@media (max-width: 768px) {
	.cases-hero {
		padding: 100px 20px 60px;
		min-height: auto;

		&__title {
			font-size: clamp(28px, 10vw, 44px);
		}

		&__sub {
			font-size: 15px;
		}
	}

	.cases-stats {
		padding: 60px 20px;
	}
}
</style>
