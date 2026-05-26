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
					<!-- <div class="showcase-item__images reveal reveal--up" style="--delay: 0.18s">
						<img v-for="(img, i) in caseItem.case_image_url" :key="i" :src="img" :alt="caseItem.client_name" class="showcase-item__img" />
					</div> -->

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
// ── Bank / DBS ──
import Bank1 from '../../assets/pictures/bank/DBS银行智能财富管理与反洗钱合规方案 1.png';
import Bank2 from '../../assets/pictures/bank/DBS银行智能财富管理与反洗钱合规方案 (1) 1.png';
// ── Airlines ──
import Airlines1 from '../../assets/pictures/airlines/DBS银行智能财富管理与反洗钱合规方案 (3) 1.png';
import Airlines2 from '../../assets/pictures/airlines/DBS银行智能财富管理与反洗钱合规方案 (5) 1.png';
// ── CapitaLand ──
import Capita1 from '../../assets/pictures/capitaLand/新对话.png';
import Capita2 from '../../assets/pictures/capitaLand/新对话 (1).png';
// ── Keppel ──
import Keppel1 from '../../assets/pictures/keppel/新对话 (4).png';
import Keppel2 from '../../assets/pictures/keppel/新对话 (5).png';
// ── Wilmar：目录为空，沿用原 SVG ──
import Food1 from '../../assets/Food1.svg';
import Food2 from '../../assets/Food2.svg';
// ── Shopee ──
import Shopee1 from '../../assets/pictures/shopee/Shopee卖家自动化与营销优化方案 .png';
import Shopee2 from '../../assets/pictures/shopee/新对话 (7).png';
// ── BreadTalk ──
import Bread1 from '../../assets/pictures/breadtalk/新对话 (2).png';
import Bread2 from '../../assets/pictures/breadtalk/新对话 (3).png';
// ── Trafigura ──
import Traf1 from "../../assets/pictures/trafigura/Trafigura's Commodity Intelligence & Smart Manufacturing.png";
import Traf2 from '../../assets/pictures/trafigura/Shopee卖家自动化与营销优化方案.png';

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
		client_name: 'CMB',
		industry: 'Finance',
		case_image_url: [Bank1, Bank2],
		case_sum_info: 'Automated wealth advisory and AML compliance for high-net-worth clients across Singapore and Hong Kong.',
		challenge:
			'Relationship managers spent over 60% of their time on manual data gathering, portfolio reconciliation, and cross-border compliance checks — leaving little bandwidth for genuine client engagement. With MAS tightening AML requirements and HNW clients demanding real-time portfolio insights, the bank needed a scalable solution that could operate across SGD, HKD, and USD simultaneously without compromising regulatory integrity.',
		solution:
			"AIBoost deployed a dual-agent system deeply integrated with DBS's core banking infrastructure. The Wealth Management Agent continuously monitors market signals, rebalances asset allocations, and surfaces personalised product recommendations for each client tier. The AML Agent runs 24/7 transaction screening against global watchlists, flags suspicious patterns using behavioural analytics, and auto-generates SAR drafts — reducing the compliance team's manual review burden by nearly half.",
		keyFeatures: [
			'Real-time portfolio rebalancing across 12 asset classes',
			'Automated SAR generation with regulatory-grade audit trails',
			'Multi-currency support: SGD, HKD, USD, EUR',
			'MAS-compliant private deployment on DBS internal cloud'
		],
		impacts: [
			{ value: '70%', label: 'Reduction in advisory prep time' },
			{ value: '40%', label: 'Decrease in compliance workload' },
			{ value: '24/7', label: 'Multi-currency monitoring' }
		],
		tags: ['Wealth Management', 'AML', 'Multi-currency', 'MAS Compliant', 'Private Deployment'],
		testimonial_quote:
			"AIBoost's agents have fundamentally changed how we serve our HNW clients. The speed and accuracy are unmatched — our RMs now spend 70% of their time on client relationships, not paperwork.",
		testimonial_author: 'Head of Digital Wealth, DBS'
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
		client_name: 'Galanz',
		industry: 'Manufacturing & Appliances',
		case_image_url: [Capita1, Capita2],
		case_sum_info:
			'Smart manufacturing optimization and global supply chain intelligence for a leading home appliance manufacturer with production facilities across 3 continents.',
		challenge:
			"Galanz's production lines were generating massive volumes of sensor data from 5,000+ manufacturing equipment across microwave, refrigerator, and air conditioner facilities in China, Southeast Asia, and Europe. Quality control relied on manual sampling, missing defects until they reached customers. Supply chain teams struggled to optimize inventory levels across 200+ component suppliers, leading to frequent stockouts or excess inventory. Demand forecasting was based on historical patterns, unable to adapt to rapid market shifts.",
		solution:
			"AIBoost's Smart Factory Agent monitors real-time production data from all manufacturing lines, applying computer vision and sensor analytics to detect quality anomalies at the component level — flagging defects before assembly. The Supply Chain Intelligence Agent continuously analyzes supplier performance, logistics data, and market demand signals to optimize procurement timing and inventory levels. The Demand Forecasting Agent synthesizes e-commerce sales data, social media trends, and macroeconomic indicators to predict demand with 92% accuracy, enabling just-in-time production planning.",
		keyFeatures: [
			'Real-time quality control across 5,000+ manufacturing equipment',
			'AI-powered defect detection with computer vision integration',
			'Dynamic supply chain optimization across 200+ global suppliers',
			'92% demand forecast accuracy with multi-source data synthesis'
		],
		impacts: [
			{ value: '45%', label: 'Reduction in defect rates' },
			{ value: '30%', label: 'Inventory cost savings' },
			{ value: '25%', label: 'Production efficiency gain' }
		],
		tags: ['Smart Manufacturing', 'Quality Control', 'Supply Chain', 'Demand Forecasting', 'Industry 4.0'],
		testimonial_quote:
			'The AI agents have revolutionized our manufacturing operations. We now detect quality issues in real-time and our supply chain runs with unprecedented efficiency.',
		testimonial_author: 'Chief Operating Officer, Galanz Group'
	},
	{
		id: 'aiboost-case-004',
		client_name: 'ZTE',
		industry: 'Telecommunications',
		case_image_url: [Keppel1, Keppel2],
		case_sum_info:
			'Network optimization and intelligent customer service automation for a global telecommunications equipment provider serving 500+ telecom operators worldwide.',
		challenge:
			"ZTE's network operations teams were manually analyzing performance data from thousands of base stations across 160+ countries. Network optimization required expert engineers to review complex datasets, leading to slow response times for performance issues. Customer support teams handled 50,000+ technical inquiries monthly from telecom operators in multiple languages, with resolution times averaging 48 hours. Predictive maintenance was reactive, causing costly network downtime.",
		solution:
			"AIBoost's Network Intelligence Agent continuously monitors real-time performance data from 100,000+ base stations, automatically detecting anomalies, optimizing resource allocation, and predicting equipment failures before they impact service. The Technical Support Agent handles tier-1 and tier-2 inquiries from telecom operators in 12 languages, providing instant troubleshooting guidance and automatically escalating complex issues with full diagnostic context. The Capacity Planning Agent analyzes traffic patterns and growth trends to recommend optimal network expansion strategies.",
		keyFeatures: [
			'Real-time network optimization across 100,000+ base stations globally',
			'Predictive maintenance with 90% accuracy on equipment failures',
			'Multilingual technical support automation in 12 languages',
			'AI-powered capacity planning and expansion recommendations'
		],
		impacts: [
			{ value: '55%', label: 'Faster issue resolution' },
			{ value: '40%', label: 'Reduction in network downtime' },
			{ value: '60%', label: 'Support ticket automation' }
		],
		tags: ['Network Optimization', '5G', 'Predictive Maintenance', 'Technical Support', 'Telecom'],
		testimonial_quote:
			'The AI agents have transformed our network operations and customer support. We now detect and resolve issues proactively, and our operator satisfaction scores have improved significantly.',
		testimonial_author: 'VP of Global Operations, ZTE Corporation'
	},
	{
		id: 'aiboost-case-006',
		client_name: 'Xiaopeng',
		industry: 'Smart Electric Vehicles',
		case_image_url: [Shopee1, Shopee2],
		case_sum_info: 'Intelligent driving assistance and connected vehicle platform optimization for a leading Chinese smart EV manufacturer with 500,000+ vehicles on the road.',
		challenge:
			"Xiaopeng's connected vehicle platform was collecting massive telemetry data from 500,000+ vehicles across China and international markets, but manual analysis couldn't keep pace. Driver assistance features required continuous optimization based on real-world driving scenarios. Customer service teams struggled to diagnose vehicle issues remotely, leading to unnecessary service center visits. Over-the-air (OTA) update planning lacked data-driven prioritization of feature improvements.",
		solution:
			"AIBoost's Autonomous Driving Intelligence Agent analyzes real-time driving data from the entire fleet to identify edge cases, optimize XPILOT algorithms, and improve autonomous driving safety. The Connected Vehicle Agent monitors vehicle health across all systems, predicting component failures and proactively scheduling maintenance. The Customer Experience Agent provides instant remote diagnostics through the mobile app, resolving 70% of issues without service center visits. The OTA Strategy Agent analyzes user behavior and feature usage to prioritize software updates that maximize customer satisfaction.",
		keyFeatures: [
			'Fleet-wide driving data analysis for autonomous driving optimization',
			'Predictive vehicle maintenance across 500,000+ connected vehicles',
			'Remote diagnostics with 70% issue resolution rate',
			'Data-driven OTA update prioritization and rollout management'
		],
		impacts: [
			{ value: '45%', label: 'Reduction in service visits' },
			{ value: '35%', label: 'Improvement in XPILOT performance' },
			{ value: '50%', label: 'Faster issue diagnosis' }
		],
		tags: ['Smart EV', 'Autonomous Driving', 'Connected Vehicles', 'Predictive Maintenance', 'OTA'],
		testimonial_quote:
			'The AI agents have accelerated our autonomous driving development and transformed our customer service. We now learn from every vehicle on the road in real-time.',
		testimonial_author: 'VP of Intelligent Driving, Xiaopeng Motors'
	},
	{
		id: 'aiboost-case-007',
		client_name: 'TCL',
		industry: 'Consumer Electronics',
		case_image_url: [Bread1, Bread2],
		case_sum_info:
			'Smart manufacturing and global retail intelligence for a leading consumer electronics brand with production facilities across 4 continents and retail presence in 160+ countries.',
		challenge:
			"TCL's global operations spanned TV, smartphone, and home appliance manufacturing across China, Vietnam, Mexico, and Poland, with retail distribution in 160+ countries. Quality control across diverse product lines required extensive manual inspection. Retail performance data from thousands of partners worldwide was fragmented and delayed, making it difficult to optimize inventory and pricing strategies. Product development cycles averaged 18 months, too slow for rapidly evolving consumer preferences.",
		solution:
			"AIBoost's Smart Manufacturing Agent monitors production quality across all facilities using computer vision and IoT sensors, detecting defects in real-time and automatically adjusting production parameters. The Global Retail Intelligence Agent aggregates sales data, social media sentiment, and competitor pricing from 160+ markets, providing real-time insights for inventory optimization and dynamic pricing. The Product Innovation Agent analyzes consumer reviews, tech trends, and emerging technologies to identify new product opportunities and accelerate R&D cycles.",
		keyFeatures: [
			'Real-time quality control across 4 continents with computer vision',
			'Global retail analytics covering 160+ countries and 10,000+ retail partners',
			'AI-powered consumer sentiment analysis and trend forecasting',
			'Accelerated product development with market intelligence integration'
		],
		impacts: [
			{ value: '50%', label: 'Reduction in defect rates' },
			{ value: '35%', label: 'Faster product development' },
			{ value: '25%', label: 'Improvement in inventory turnover' }
		],
		tags: ['Consumer Electronics', 'Smart Manufacturing', 'Retail Analytics', 'Product Innovation', 'Global Operations'],
		testimonial_quote:
			'The AI agents have transformed our manufacturing quality and retail operations. We now respond to market changes in real-time and bring products to market faster than ever.',
		testimonial_author: 'Chief Operating Officer, TCL Technology'
	},
	{
		id: 'aiboost-case-008',
		client_name: 'Trafigura',
		industry: 'Trade & Manufacturing',
		case_image_url: [Traf1, Traf2],
		case_sum_info: "Commodity intelligence synthesis and smart manufacturing scheduling for one of the world's largest independent commodity trading and logistics companies.",
		challenge:
			"Trafigura's trading desks handle billions of dollars in commodity transactions daily across oil, metals, and minerals. Traders needed to synthesise geopolitical developments, weather events, shipping disruptions, and price movements from hundreds of sources simultaneously — an impossible task for human analysts alone. Concurrently, manufacturing partners across Asia were experiencing frequent unplanned equipment downtime that disrupted delivery commitments and eroded client trust. The cost of a single missed delivery window in LNG trading could run into tens of millions.",
		solution:
			'The Commodity Trading Intelligence Agent aggregates and cross-references data from 200+ sources — including Reuters, Bloomberg, AIS vessel tracking, satellite imagery of storage facilities, and geopolitical risk feeds — to build a continuously updated market intelligence picture. It surfaces arbitrage opportunities, flags supply disruption risks, and generates trade recommendations with confidence scores and supporting evidence. The Smart Factory Agent monitors production line IoT data from partner facilities across 8 countries, applying predictive maintenance models to schedule interventions during planned downtime windows — eliminating surprise failures.',
		keyFeatures: [
			'Real-time intelligence synthesis from 200+ global data sources',
			'Arbitrage opportunity detection with confidence scoring and evidence trails',
			'Predictive maintenance across partner manufacturing facilities in 8 countries',
			'Automated delivery risk alerts with recommended mitigation actions'
		],
		impacts: [
			{ value: '50%', label: 'Faster trading desk decisions' },
			{ value: '35%', label: 'Reduction in unplanned downtime' },
			{ value: '20%', label: 'Overall supply chain cost savings' }
		],
		tags: ['Commodity Intelligence', 'Predictive Maintenance', 'Global Logistics', 'Industry 4.0', 'Risk Management'],
		testimonial_quote:
			"In our world, information asymmetry is everything. AIBoost's intelligence agent has given our traders a decisive edge — we're seeing opportunities and risks hours before our competitors, and that translates directly to P&L.",
		testimonial_author: 'Senior Trading Manager, Trafigura'
	}
];

const industryIcons = {
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
	{ number: '8', label: 'Enterprise Clients' },
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
