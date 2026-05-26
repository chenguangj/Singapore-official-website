<style scoped>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
:root {
	--dur: 0.7s;
	--ease: cubic-bezier(0.25, 0.1, 0.25, 1);
	--ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
}

.shell {
	display: flex;
	min-height: 700px;
	font-family: var(--font-sans);
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 24px;
}

@media (max-width: 768px) {
	.shell {
		flex-direction: column;
		min-height: auto;
		padding: 0 16px;
	}
}

.sidebar {
	width: 220px;
	flex-shrink: 0;
	border-right: 0.5px solid var(--color-border-tertiary);
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	gap: 2px;
	position: relative;
}

@media (max-width: 768px) {
	.sidebar {
		width: 100%;
		border-right: none;
		border-bottom: 0.5px solid var(--color-border-tertiary);
		padding: 1rem 0;
		flex-direction: row;
		flex-wrap: nowrap;
		overflow-x: auto;
		gap: 0;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.s-head {
		display: none;
	}

	.s-item {
		flex-shrink: 0;
		padding: 8px 14px;
		border-radius: 100px;
		border: 1px solid transparent;
		white-space: nowrap;

		&.active {
			background: var(--color-background-secondary);
			border-color: var(--color-border-tertiary);
		}
	}

	.s-count {
		display: none;
	}

	.s-highlight {
		display: none;
	}

	.main {
		min-height: 600px;
	}

	.p-hero {
		padding: 1.5rem 1.25rem 1rem;
	}

	.agents {
		padding: 1rem 1.25rem;
	}

	.ov-hero {
		padding: 1.5rem 1.25rem 1rem;
	}

	.ov-grid {
		grid-template-columns: 1fr 1fr;
	}

	.p-metrics {
		grid-template-columns: 1fr;
	}
}
.s-highlight {
	position: absolute;
	left: 0;
	right: 0;
	background: var(--color-background-secondary);
	border-radius: 0;
	pointer-events: none;
	transition:
		transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
		height 0.25s cubic-bezier(0.22, 1, 0.36, 1),
		opacity 0.2s ease;
	z-index: 0;
}
.s-head {
	font-size: 11px;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: var(--color-text-tertiary);
	padding: 0 1.5rem 0.75rem;
}
.s-item {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 9px 1.5rem;
	cursor: pointer;
	border-radius: 0;
	transition: padding-left 0.45s cubic-bezier(0.22, 1, 0.36, 1);
	position: relative;
	border: none;
	background: none;
	width: 100%;
	text-align: left;
	z-index: 1;
}
.s-item:hover {
	padding-left: 1.7rem;
}
.s-item.active {
	background: var(--color-background-secondary);
}
.s-item.active::before {
	content: '';
	position: absolute;
	left: 0;
	top: 20%;
	bottom: 20%;
	width: 2px;
	background: linear-gradient(180deg, #6366f1, #a78bfa);
	border-radius: 0 2px 2px 0;
	box-shadow: 0 0 8px rgba(99, 102, 241, 0.5);
	animation: glowPulse 3.5s ease-in-out infinite;
	z-index: 2;
}
@keyframes glowPulse {
	0%,
	100% {
		box-shadow: 0 0 4px rgba(99, 102, 241, 0.3);
	}
	50% {
		box-shadow: 0 0 12px rgba(99, 102, 241, 0.55);
	}
}
.s-icon {
	width: 28px;
	height: 28px;
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 13px;
	flex-shrink: 0;
	transition: transform 0.6s var(--ease-soft);
}
.s-item:hover .s-icon,
.s-item.active .s-icon {
	transform: scale(1.08);
}
.s-label {
	font-size: 13px;
	color: var(--color-text-secondary);
	font-weight: 400;
	transition:
		color 0.6s var(--ease-soft),
		letter-spacing 0.8s var(--ease-soft);
}
.s-item:hover .s-label {
	color: var(--color-text-primary);
}
.s-item.active .s-label {
	color: var(--color-text-primary);
	font-weight: 500;
	letter-spacing: 0.02em;
}
.s-count {
	margin-left: auto;
	font-size: 11px;
	color: var(--color-text-tertiary);
	background: var(--color-background-secondary);
	padding: 1px 6px;
	border-radius: 99px;
	border: 0.5px solid var(--color-border-tertiary);
	transition:
		border-color 0.5s var(--ease-soft),
		color 0.5s var(--ease-soft);
}
.s-item:hover .s-count {
	border-color: var(--color-border-secondary, var(--color-border-tertiary));
	color: var(--color-text-secondary);
}

.main {
	flex: 1;
	overflow: hidden;
	position: relative;
}

.panel {
	position: absolute;
	inset: 0;
	display: flex;
	height: 100%;
	flex-direction: column;
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
	transition:
		opacity 0.45s var(--ease-soft),
		visibility 0.45s var(--ease-soft);
}
.panel.active {
	opacity: 1;
	visibility: visible;
	pointer-events: auto;
	animation: panelReveal 0.7s var(--ease-soft) both;
}
@keyframes panelReveal {
	from {
		opacity: 0;
		transform: translateY(8px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.p-hero {
	padding: 2.5rem 2.5rem 1.5rem;
	border-bottom: 0.5px solid var(--color-border-tertiary);
}
.p-industry {
	font-size: 11px;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: var(--color-text-tertiary);
	margin-bottom: 0.5rem;
	display: flex;
	align-items: center;
	gap: 8px;
}
.p-dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	display: inline-block;
	animation: dotFadeIn 1.2s var(--ease-soft) 0.6s both;
}
@keyframes dotFadeIn {
	0% {
		transform: scale(0.5);
		opacity: 0;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}
.p-title {
	font-size: 1.5rem;
	font-weight: 500;
	color: var(--color-text-primary);
	line-height: 1.25;
	margin-bottom: 0.5rem;
}
.panel.active .p-title {
	animation: textSlideUp 0.9s var(--ease-soft) 0.2s both;
}
.p-subtitle {
	font-size: 14px;
	color: var(--color-text-secondary);
	line-height: 1.65;
	max-width: 480px;
}
.panel.active .p-subtitle {
	animation: textSlideUp 0.9s var(--ease-soft) 0.4s both;
}
@keyframes textSlideUp {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.p-metrics {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1px;
	background: var(--color-border-tertiary);
	border-top: 0.5px solid var(--color-border-tertiary);
	border-bottom: 0.5px solid var(--color-border-tertiary);
}
.metric {
	background: var(--color-background-primary);
	padding: 1.25rem 1.5rem;
	position: relative;
	overflow: hidden;
}
.panel.active .metric {
	animation: metricReveal 0.8s var(--ease-soft) both;
}
.panel.active .metric:nth-child(1) {
	animation-delay: 0.3s;
}
.panel.active .metric:nth-child(2) {
	animation-delay: 0.5s;
}
.panel.active .metric:nth-child(3) {
	animation-delay: 0.7s;
}
@keyframes metricReveal {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.metric::after {
	content: '';
	position: absolute;
	inset: 0;
	background: linear-gradient(135deg, rgba(99, 102, 241, 0.04), transparent);
	opacity: 0;
	transition: opacity 0.6s var(--ease-soft);
}
.metric:hover::after {
	opacity: 1;
}
.metric-v {
	font-size: 1.75rem;
	font-weight: 500;
	color: var(--color-text-primary);
	line-height: 1;
	transition: transform 0.5s var(--ease-soft);
	transition:
		transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
		height 0.25s cubic-bezier(0.22, 1, 0.36, 1),
		opacity 0.2s ease;
}
.metric:hover .metric-v {
	transform: scale(1.03);
}
.metric-l {
	font-size: 11px;
	color: var(--color-text-tertiary);
	margin-top: 4px;
	letter-spacing: 0.04em;
}

/* ─── Agents section ─── */
.agents {
	flex: 1;
	overflow-y: auto;
	padding: 1.5rem 2rem;
}
.agents-head {
	font-size: 11px;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: var(--color-text-tertiary);
	margin-bottom: 1rem;
}
.agent-list {
	display: flex;
	flex-direction: column;
	gap: 1px;
	background: var(--color-border-tertiary);
	border: 0.5px solid var(--color-border-tertiary);
	border-radius: var(--border-radius-lg);
	overflow: hidden;
}
.agent {
	background: var(--color-background-primary);
	padding: 1rem 1.25rem;
	cursor: pointer;
	transition: background 0.4s var(--ease-soft);
	display: flex;
	align-items: flex-start;
	gap: 12px;
	position: relative;
}
.agent::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 2px;
	background: var(--color-text-primary);
	opacity: 0;
	transform: scaleY(0);
	transition:
		opacity 0.5s var(--ease-soft),
		transform 0.5s var(--ease-soft);
}
.agent:hover::before {
	opacity: 0.15;
	transform: scaleY(1);
}
.agent.open::before {
	opacity: 0.3;
	transform: scaleY(1);
}
.agent:hover {
	background: var(--color-background-secondary);
}
.agent.open {
	background: var(--color-background-secondary);
}
.agent-num {
	font-size: 11px;
	color: var(--color-text-tertiary);
	min-width: 18px;
	padding-top: 2px;
	font-variant-numeric: tabular-nums;
	transition:
		transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
		color 0.4s var(--ease-soft);
}
.agent:hover .agent-num,
.agent.open .agent-num {
	color: var(--color-text-secondary);
	transform: translateX(4px);
}
.agent-content {
	flex: 1;
	transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.agent:hover .agent-content,
.agent.open .agent-content {
	transform: translateX(4px);
}
.agent-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
}
.agent-name {
	font-size: 14px;
	font-weight: 500;
	color: var(--color-text-primary);
	transition: letter-spacing 0.5s var(--ease-soft);
}
.agent:hover .agent-name {
	letter-spacing: 0.01em;
}
.agent-toggle {
	font-size: 16px;
	color: var(--color-text-tertiary);
	transition:
		transform 0.8s var(--ease-soft),
		color 0.4s var(--ease-soft);
	line-height: 1;
}
.agent:hover .agent-toggle {
	color: var(--color-text-secondary);
	transform: rotate(15deg);
}
.agent.open .agent-toggle {
	color: var(--color-text-secondary);
	transform: rotate(45deg);
}

/* ─── Collapsible detail (grid-row trick for smooth height) ─── */
.agent-detail {
	display: grid;
	grid-template-rows: 0fr;
	transition: grid-template-rows 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}
.agent.open .agent-detail {
	grid-template-rows: 1fr;
}
.agent-detail-inner {
	overflow: hidden;
}
.agent-detail-body {
	padding: 0.75rem 0 0.25rem;
	border-top: 0.5px solid var(--color-border-tertiary);
	margin-top: 0.75rem;
}

/* stagger children: tags → problem → impact */
.agent-tags,
.agent-problem,
.agent-impact {
	opacity: 0;
	transform: translateY(6px);
	transition:
		opacity 0.38s var(--ease-soft),
		transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.agent.open .agent-tags {
	opacity: 1;
	transform: translateY(0);
	transition-delay: 0.12s;
}
.agent.open .agent-problem {
	opacity: 1;
	transform: translateY(0);
	transition-delay: 0.22s;
}
.agent.open .agent-impact {
	opacity: 1;
	transform: translateY(0);
	transition-delay: 0.32s;
}

.agent-tags {
	display: flex;
	gap: 5px;
	margin-bottom: 0.75rem;
	flex-wrap: wrap;
}
.atag {
	font-size: 11px;
	padding: 2px 8px;
	border-radius: 99px;
	border: 0.5px solid var(--color-border-secondary);
	color: var(--color-text-secondary);
}
.agent-problem {
	font-size: 13px;
	color: var(--color-text-secondary);
	line-height: 1.65;
	margin-bottom: 0.75rem;
}
.agent-impact {
	display: flex;
	gap: 8px;
}
.impact-chip {
	font-size: 12px;
	padding: 3px 10px;
	border-radius: var(--border-radius-md);
	background: var(--color-background-secondary);
	color: var(--color-text-secondary);
	transition:
		background 0.4s var(--ease-soft),
		transform 0.4s var(--ease-soft);
}
.agent.open .impact-chip:hover {
	transform: translateY(-1px);
}

/* ─── Overview panel ─── */
.overview-panel {
	position: absolute;
	inset: 0;
	display: flex;
	height: 100%;
	flex-direction: column;
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
	transition:
		opacity 0.45s var(--ease-soft),
		visibility 0.45s var(--ease-soft);
}
.overview-panel.active {
	opacity: 1;
	visibility: visible;
	pointer-events: auto;
	animation: panelReveal 1s var(--ease-soft) both;
}
.ov-hero {
	padding: 2.5rem;
	border-bottom: 0.5px solid var(--color-border-tertiary);
}
.ov-tag {
	font-size: 11px;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: var(--color-text-tertiary);
	margin-bottom: 0.75rem;
}
.overview-panel.active .ov-title {
	animation: textSlideUp 0.9s var(--ease-soft) 0.2s both;
}
.overview-panel.active .ov-sub {
	animation: textSlideUp 0.9s var(--ease-soft) 0.4s both;
}
.ov-title {
	font-size: 1.6rem;
	font-weight: 500;
	color: var(--color-text-primary);
	margin-bottom: 0.5rem;
}
.ov-sub {
	font-size: 14px;
	color: var(--color-text-secondary);
	line-height: 1.7;
	max-width: 460px;
}
.ov-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 1px;
	background: var(--color-border-tertiary);
	flex: 1;
}
.ov-card {
	background: var(--color-background-primary);
	padding: 1.75rem;
	cursor: pointer;
	transition:
		background 0.5s var(--ease-soft),
		transform 0.5s var(--ease-soft);
	display: flex;
	flex-direction: column;
	gap: 10px;
	border: none;
	position: relative;
	overflow: hidden;
}
.overview-panel.active .ov-card {
	animation: cardFadeIn 0.9s var(--ease-soft) both;
}
.overview-panel.active .ov-card:nth-child(1) {
	animation-delay: 0.3s;
}
.overview-panel.active .ov-card:nth-child(2) {
	animation-delay: 0.45s;
}
.overview-panel.active .ov-card:nth-child(3) {
	animation-delay: 0.6s;
}
.overview-panel.active .ov-card:nth-child(4) {
	animation-delay: 0.75s;
}
.overview-panel.active .ov-card:nth-child(5) {
	animation-delay: 0.9s;
}
.overview-panel.active .ov-card:nth-child(6) {
	animation-delay: 1.05s;
}
@keyframes cardFadeIn {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.ov-card::before {
	content: '';
	position: absolute;
	inset: 0;
	background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(99, 102, 241, 0.05), transparent 60%);
	opacity: 0;
	transition: opacity 0.6s var(--ease-soft);
	pointer-events: none;
}
.ov-card:hover::before {
	opacity: 1;
}
.ov-card:hover {
	background: var(--color-background-secondary);
	transform: translateY(-1px);
}
.ov-card-icon {
	width: 36px;
	height: 36px;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	transition: transform 0.6s var(--ease-soft);
	transition:
		transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
		height 0.25s cubic-bezier(0.22, 1, 0.36, 1),
		opacity 0.2s ease;
}
.ov-card:hover .ov-card-icon {
	transform: scale(1.08);
}
.ov-card-name {
	font-size: 14px;
	font-weight: 500;
	color: var(--color-text-primary);
}
.ov-card-count {
	font-size: 12px;
	color: var(--color-text-tertiary);
}
.ov-arrow {
	margin-left: auto;
	font-size: 14px;
	color: var(--color-text-tertiary);
	opacity: 0;
	transform: translateX(-8px);
	transition: all 0.5s var(--ease-soft);
}
.ov-card:hover .ov-arrow {
	opacity: 1;
	transform: translateX(0);
}
.ov-card-row {
	display: flex;
	align-items: center;
}
</style>

<template>
	<div class="shell">
		<nav class="sidebar" ref="sidebarRef" @mouseleave="onSidebarLeave">
			<div class="s-head">Industries</div>
			<div class="s-highlight" :style="highlightStyle"></div>
			<button v-for="tab in tabs" :key="tab.id" class="s-item" :class="{ active: activePanel === tab.id }" @click="switchPanel(tab.id)" @mouseenter="onItemHover($event)">
				<div class="s-icon" :style="{ background: tab.iconBg }">{{ tab.icon }}</div>
				<span class="s-label">{{ tab.label }}</span>
				<span v-if="tab.count" class="s-count">{{ tab.count }}</span>
			</button>
		</nav>

		<div class="main">
			<!-- Overview -->
			<div class="overview-panel" :class="{ active: activePanel === 'overview' }">
				<div class="ov-hero">
					<div class="ov-tag">Singapore · AI Agent Platform</div>
					<div class="ov-title">Enterprise AI for SEA's top companies</div>
					<div class="ov-sub">30+ tailored agents across 8 industries — built for multilingual, cross-border, MAS-compliant operations.</div>
				</div>
				<div class="ov-grid">
					<div v-for="card in overviewCards" :key="card.id" class="ov-card" @click="switchPanel(card.id)" @mousemove="trackMouse">
						<div class="ov-card-row">
							<div class="ov-card-icon" :style="{ background: card.bg, fontSize: '16px' }">{{ card.icon }}</div>
							<div class="ov-arrow">→</div>
						</div>
						<div class="ov-card-name">{{ card.name }}</div>
						<div class="ov-card-count">{{ card.desc }}</div>
					</div>
				</div>
			</div>

			<!-- Industry panels -->
			<div v-for="p in panels" :key="p.id" class="panel" :class="{ active: activePanel === p.id }">
				<div class="p-hero">
					<div class="p-industry"><span class="p-dot" :style="{ background: p.color }"></span>{{ p.industry }}</div>
					<div class="p-title">{{ p.title }}</div>
					<div class="p-subtitle">{{ p.subtitle }}</div>
				</div>
				<div class="p-metrics">
					<div v-for="(m, mi) in p.metrics" :key="mi" class="metric">
						<div class="metric-v" v-html="m.value"></div>
						<div class="metric-l">{{ m.label }}</div>
					</div>
				</div>
				<div class="agents">
					<div class="agents-head">Agents deployed</div>
					<div class="agent-list">
						<div v-for="(a, i) in data[p.id]" :key="i" class="agent" :class="{ open: openAgent === p.id + '-' + i }" @click="toggleAgent(p.id + '-' + i)">
							<div class="agent-num">{{ String(i + 1).padStart(2, '0') }}</div>
							<div class="agent-content">
								<div class="agent-row">
									<div class="agent-name">{{ a.name }}</div>
									<div class="agent-toggle">+</div>
								</div>
								<div class="agent-detail">
									<div class="agent-detail-inner">
										<div class="agent-detail-body">
											<div class="agent-tags">
												<span v-for="(t, ti) in a.tags" :key="ti" class="atag">{{ t }}</span>
											</div>
											<div class="agent-problem">{{ a.problem }}</div>
											<div class="agent-impact">
												<span v-for="(imp, ii) in a.impacts" :key="ii" class="impact-chip">{{ imp }}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activePanel = ref('overview');
const openAgent = ref(null);

// sidebar floating highlight
const sidebarRef = ref(null);
const highlightTop = ref(0);
const highlightHeight = ref(0);
const highlightVisible = ref(false);

const highlightStyle = computed(() => ({
	transform: `translateY(${highlightTop.value}px)`,
	height: `${highlightHeight.value}px`,
	opacity: highlightVisible.value ? 1 : 0
}));

const onItemHover = (e) => {
	const nav = sidebarRef.value;
	if (!nav) return;
	const navRect = nav.getBoundingClientRect();
	const itemRect = e.currentTarget.getBoundingClientRect();
	highlightTop.value = itemRect.top - navRect.top;
	highlightHeight.value = itemRect.height;
	highlightVisible.value = true;
};

const onSidebarLeave = () => {
	highlightVisible.value = false;
};

const tabs = [
	{ id: 'overview', icon: '⬡', iconBg: 'var(--color-background-secondary)', label: 'Overview' },
	{ id: 'finance', icon: '◆', iconBg: '#e6f1fb', label: 'Finance', count: 4 },
	{ id: 'aviation', icon: '▲', iconBg: '#eaf3de', label: 'Aviation', count: 4 },
	{ id: 'realestate', icon: '■', iconBg: '#eeedfe', label: 'Real estate', count: 4 },
	{ id: 'maritime', icon: '●', iconBg: '#faece7', label: 'Maritime', count: 4 },
	{ id: 'agri', icon: '◇', iconBg: '#e1f5ee', label: 'Agriculture', count: 4 },
	{ id: 'tech', icon: '○', iconBg: '#faeeda', label: 'Tech & internet', count: 5 },
	{ id: 'retail', icon: '△', iconBg: '#fbeaf0', label: 'Retail', count: 4 },
	{ id: 'trade', icon: '▽', iconBg: '#f1efe8', label: 'Trade & mfg', count: 4 }
];

const overviewCards = [
	{ id: 'finance', icon: '◆', bg: '#e6f1fb', name: 'Finance', desc: 'DBS · OCBC · UOB · Temasek · Great Eastern · 4 agents' },
	{ id: 'aviation', icon: '▲', bg: '#eaf3de', name: 'Aviation', desc: 'Streamax · Changi Airport · 4 agents' },
	{ id: 'realestate', icon: '■', bg: '#eeedfe', name: 'Real estate', desc: 'Galanz · CDL · Far East · 4 agents' },
	{ id: 'maritime', icon: '●', bg: '#faece7', name: 'Maritime & energy', desc: 'Keppel · Sembcorp · 4 agents' },
	{ id: 'tech', icon: '○', bg: '#faeeda', name: 'Tech & internet', desc: 'Xiaopeng · Singtel · Razer · 5 agents' },
	{ id: 'retail', icon: '△', bg: '#fbeaf0', name: 'Retail & consumer', desc: 'TCL · Charles & Keith · OSIM · 4 agents' }
];

const panels = [
	{
		id: 'finance',
		color: '#378add',
		industry: 'Finance · DBS · OCBC · UOB · Temasek',
		title: 'Financial services AI agents',
		subtitle: 'Automating wealth advisory, AML compliance, and investment research — built for MAS regulatory requirements and cross-border operations.',
		metrics: [
			{ value: '70%', label: 'Advisory automation' },
			{ value: '–40%', label: 'Compliance risk' },
			{ value: '50%', label: 'Risk review speed' }
		]
	},
	{
		id: 'aviation',
		color: '#639922',
		industry: 'Aviation · Streamax · Changi Airport Group',
		title: 'Aviation & airport AI agents',
		subtitle: 'From passenger journey to commercial retail optimization — seconds-level response across 5 languages for millions of global travellers.',
		metrics: [
			{ value: '&lt;5s', label: 'Response time' },
			{ value: '30%', label: 'Ops efficiency' },
			{ value: '25%', label: 'Retail yield uplift' }
		]
	},
	{
		id: 'realestate',
		color: '#7f77dd',
		industry: 'Real estate · Galanz · CDL · Far East',
		title: 'Real estate & property AI agents',
		subtitle: 'Automating leasing, facility management, and market expansion research across global commercial and residential portfolios.',
		metrics: [
			{ value: '–40%', label: 'Admin workload' },
			{ value: '–60%', label: 'Fault response time' },
			{ value: '40%', label: 'Decision speed' }
		]
	},
	{
		id: 'maritime',
		color: '#d85a30',
		industry: 'Maritime & energy · ZTE · Sembcorp',
		title: 'Maritime & energy AI agents',
		subtitle: 'Engineering design validation, renewable asset monitoring, and safety compliance automation for complex industrial operations.',
		metrics: [
			{ value: '50%', label: 'Design time saved' },
			{ value: '–40%', label: 'Safety incidents' },
			{ value: '35%', label: 'Supply chain efficiency' }
		]
	},
	{
		id: 'agri',
		color: '#1d9e75',
		industry: 'Agriculture · Wilmar · Olam International',
		title: 'Agri-food supply chain AI agents',
		subtitle: 'End-to-end commodity visibility across global supply chains — from farmgate price monitoring to food safety compliance.',
		metrics: [
			{ value: '–25%', label: 'Price volatility loss' },
			{ value: '30%', label: 'Production efficiency' },
			{ value: 'Full chain', label: 'Visibility' }
		]
	},
	{
		id: 'tech',
		color: '#ba7517',
		industry: 'Tech & internet · Xiaopeng · Singtel · Razer',
		title: 'Tech & internet AI agents',
		subtitle: "Shopee seller automation, Garena player engagement, Singtel network optimization — powering SEA's fastest-growing digital ecosystem.",
		metrics: [
			{ value: '80%', label: 'CS automation rate' },
			{ value: '+30%', label: 'Marketing ROI' },
			{ value: '7', label: 'Markets covered' }
		]
	},
	{
		id: 'retail',
		color: '#d4537e',
		industry: 'Retail · TCL · Charles & Keith · OSIM',
		title: 'Retail & consumer AI agents',
		subtitle: 'Global store operations, AI-powered buying guidance, and product R&D acceleration for brands expanding across 3 continents.',
		metrics: [
			{ value: '–40%', label: 'Ops manual work' },
			{ value: '+20%', label: 'Conversion rate' },
			{ value: '–30%', label: 'R&D cycle time' }
		]
	},
	{
		id: 'trade',
		color: '#888780',
		industry: 'Trade & manufacturing · Trafigura · Flextronics',
		title: 'Trade & manufacturing AI agents',
		subtitle: 'Commodity intelligence, smart production scheduling, and global supply chain management for high-velocity industrial operations.',
		metrics: [
			{ value: '50%', label: 'Decision speed' },
			{ value: '+35%', label: 'Production throughput' },
			{ value: '–20%', label: 'Supply chain cost' }
		]
	}
];

const data = {
	finance: [
		{
			name: 'Wealth management agent',
			tags: ['High-net-worth', 'Multi-currency', 'MAS compliant'],
			problem: 'Automates asset allocation advice and cross-border product matching for HNW clients — replacing manual initial consultations.',
			impacts: ['70% advisory automation', '–40% advisory cost']
		},
		{
			name: 'AML & compliance agent',
			tags: ['Anti-money laundering', 'Cross-border', 'RegTech'],
			problem: 'Simultaneous cross-border transaction screening against AML rules across multiple jurisdictions, with real-time regulatory updates.',
			impacts: ['–60% review workload', '24/7 monitoring']
		},
		{
			name: 'Multilingual customer service agent',
			tags: ['7×24', '5 languages', 'Retail banking'],
			problem: 'Handles account queries, transfers, and product FAQs across SEA time zones — reducing branch and call centre pressure.',
			impacts: ['70% CS automation', '<5s response']
		},
		{
			name: 'Investment research agent (Temasek)',
			tags: ['Sovereign fund', 'Global markets', 'Post-investment'],
			problem: 'Deep-dives global target company data, tracks industry trends, and monitors portfolio company KPIs to support investment decisions.',
			impacts: ['40% research speed', 'Automated monitoring']
		}
	],
	aviation: [
		{
			name: 'Passenger service agent',
			tags: ['Multilingual', 'Rebooking', 'Changi navigation'],
			problem: 'Real-time help with rebooking, baggage, immigration, and terminal navigation for millions of transit passengers across dozens of languages.',
			impacts: ['<5s response time', '5+ languages']
		},
		{
			name: 'Flight operations optimization agent',
			tags: ['On-time performance', 'Fuel cost', 'Ground ops'],
			problem: 'Predicts passenger load, optimizes fuel consumption, and coordinates ground services to improve on-time performance.',
			impacts: ['30% ops efficiency', 'Fuel cost reduction']
		},
		{
			name: 'Airport retail operations agent',
			tags: ['Changi', 'Yield management', 'Inventory'],
			problem: 'Analyzes tenant foot traffic, dynamically prices retail space, and coordinates duty-free inventory to maximize commercial yield.',
			impacts: ['25% retail yield uplift', 'Real-time analytics']
		},
		{
			name: 'Premium traveller concierge agent',
			tags: ['First class', 'Gold card', 'Personalization'],
			problem: "Handles bespoke itinerary, airport transfers, lounge booking, and in-flight meal customization for SIA's high-value passengers.",
			impacts: ['NPS improvement', 'Premium retention']
		}
	],
	realestate: [
		{
			name: 'Commercial property operations agent',
			tags: ['Leasing', 'Mall analytics', 'Tenant mgmt'],
			problem: "Automates leasing match, footfall analysis, event ROI forecasting, and lease renewal management across CapitaLand's commercial portfolio.",
			impacts: ['–40% admin workload', '+20% tenant retention']
		},
		{
			name: 'Residential concierge agent',
			tags: ['Luxury residential', 'Facilities', 'Service'],
			problem: 'Handles maintenance requests, housekeeping bookings, and facility guidance — replacing manual concierge for high-end developments.',
			impacts: ['24/7 coverage', '–60% response time']
		},
		{
			name: 'Overseas market expansion agent',
			tags: ['China', 'SEA', 'Land acquisition'],
			problem: 'Interprets local real estate policy, models land value, and benchmarks competitors to support new market entry decisions.',
			impacts: ['40% faster decisions', 'Multi-market coverage']
		},
		{
			name: 'Facility maintenance agent',
			tags: ['IoT', 'Predictive', 'HVAC / lifts'],
			problem: 'Monitors elevators, HVAC, and fire systems in real time — triggering fault alerts and scheduling maintenance before failures occur.',
			impacts: ['–60% fault response', 'Reduced downtime']
		}
	],
	maritime: [
		{
			name: 'Engineering design assistant',
			tags: ['Offshore platforms', 'IMO compliance', 'BOM'],
			problem: 'Validates offshore platform design parameters, checks IMO standards compliance, and optimizes materials bills of quantity.',
			impacts: ['50% design time saved', '–30% design errors']
		},
		{
			name: 'Energy asset operations agent',
			tags: ['Solar', 'Wind', 'Predictive maintenance'],
			problem: 'Continuously monitors distributed renewable assets, optimizes energy output, and predicts component failures before they cause outages.',
			impacts: ['–40% downtime', '+35% efficiency']
		},
		{
			name: 'Cross-border supply chain agent',
			tags: ['Procurement', 'Logistics', 'Customs'],
			problem: 'Matches global marine and engineering materials suppliers, tracks shipments, and manages customs clearance across SEA and beyond.',
			impacts: ['35% supply chain efficiency', '–25% lead time']
		},
		{
			name: 'Safety & compliance agent',
			tags: ['HSE', 'Site inspection', 'Training'],
			problem: 'Monitors safety protocol adherence across shipyards and power plants, flags hazards, and delivers real-time safety training.',
			impacts: ['–40% safety incidents', 'Automated audits']
		}
	],
	agri: [
		{
			name: 'Global commodity supply chain agent',
			tags: ['Palm oil', 'Coffee', 'Price monitoring'],
			problem: 'Tracks commodity prices across global markets, optimizes logistics routing, and rebalances inventory ahead of price swings.',
			impacts: ['–25% price loss', 'Full chain visibility']
		},
		{
			name: 'Production optimization agent',
			tags: ['Wilmar', 'Processing lines', 'Quality'],
			problem: 'Optimizes palm oil and grain processing line parameters, controls energy use, and detects quality deviations in real time.',
			impacts: ['30% efficiency gain', '–15% defect rate']
		},
		{
			name: 'Market intelligence agent',
			tags: ['Demand forecasting', 'Pricing', 'Competitive intel'],
			problem: 'Forecasts global commodity supply and demand, analyzes SEA and China consumer trends, and tracks competitor pricing.',
			impacts: ['Better price discovery', 'Faster procurement']
		},
		{
			name: 'Traceability & compliance agent',
			tags: ['Provenance', 'EU standards', 'China GB'],
			problem: 'Traces agricultural product origin end-to-end and validates compliance with EU, China, and global food safety standards.',
			impacts: ['Compliance automation', 'Consumer trust']
		}
	],
	tech: [
		{
			name: 'E-commerce operations agent (Shopee)',
			tags: ['Seller tools', 'Multilingual listings', 'GMV'],
			problem: 'Recommends products, optimizes multilingual listing content, handles order CS, and matches logistics for 7-market Shopee sellers.',
			impacts: ['80% CS automation', '+30% conversion']
		},
		{
			name: 'Gaming community agent (Garena)',
			tags: ['Player retention', 'Anti-cheat', 'Community'],
			problem: 'Answers player queries, recommends in-game items, manages community events, and identifies cheating behaviour patterns.',
			impacts: ['Player retention boost', 'Community health']
		},
		{
			name: 'Telco customer & network agent',
			tags: ['Singtel', 'Fault diagnostics', 'Network opt'],
			problem: 'Handles multilingual plan advisory and fault troubleshooting while optimizing network traffic allocation across SEA markets.',
			impacts: ['–35% fault rate', '5+ languages']
		},
		{
			name: 'Gaming hardware R&D agent (Razer)',
			tags: ['Product design', 'User research', 'Global support'],
			problem: 'Mines gamer feedback for product insights, optimizes peripheral design parameters, and handles global after-sales support.',
			impacts: ['25% faster R&D', 'Global CS coverage']
		},
		{
			name: 'Digital marketing agent',
			tags: ['Meta', 'Shopee Ads', 'ROI optimization'],
			problem: 'Optimizes cross-platform ad spend across Facebook, Shopee, and Instagram with real-time conversion prediction and audience segmentation.',
			impacts: ['+30% marketing ROI', 'Real-time optimization']
		}
	],
	retail: [
		{
			name: 'Global store operations agent',
			tags: ['Inventory', 'Staffing', 'Promotions'],
			problem: 'Analyzes traffic, optimizes stock, schedules staff, and predicts promotion outcomes across hundreds of global stores.',
			impacts: ['–40% ops workload', 'Automated reorder']
		},
		{
			name: 'AI shopper guide agent',
			tags: ['In-store', 'Online', 'Personalization'],
			problem: 'Guides customers via in-store QR or e-commerce chat — personalizing product recommendations based on taste and purchase history.',
			impacts: ['+20% conversion', 'Cross-sell uplift']
		},
		{
			name: 'Product R&D intelligence agent',
			tags: ['Trend mining', 'Pricing', 'Competitive'],
			problem: 'Mines consumer trends for new flavour/style ideas, optimizes price positioning, and benchmarks competitors — shortening development cycles.',
			impacts: ['–30% R&D cycle', 'Better hit rate']
		},
		{
			name: 'After-sales service agent (OSIM)',
			tags: ['Installation', 'Repair', 'Global network'],
			problem: 'Handles massage chair installation, fault reporting, and warranty queries — routing to the nearest global service point automatically.',
			impacts: ['24/7 coverage', 'NPS improvement']
		}
	],
	trade: [
		{
			name: 'Commodity trading intelligence agent',
			tags: ['Energy', 'Metals', 'FX hedging'],
			problem: 'Tracks global energy and metals prices, screens cross-border contract compliance, and models FX exposure for trading decisions.',
			impacts: ['50% faster decisions', 'Compliance automation']
		},
		{
			name: 'Electronics manufacturing agent',
			tags: ['Flextronics', 'Scheduling', 'Quality'],
			problem: 'Optimizes production scheduling, coordinates component inventory, detects quality variation, and tracks customer order status in real time.',
			impacts: ['+35% throughput', '–30% defect rate']
		},
		{
			name: 'Global supply chain agent',
			tags: ['Supplier matching', 'Customs', 'Cost'],
			problem: 'Matches global suppliers, tracks shipments, calculates tariffs, and manages customs clearance to reduce total supply chain cost.',
			impacts: ['–20% supply chain cost', 'Real-time tracking']
		},
		{
			name: 'Smart factory monitoring agent',
			tags: ['Industry 4.0', 'IoT', 'Predictive maint'],
			problem: 'Monitors production equipment in real time, predicts failures, and schedules preventive maintenance to minimize unplanned downtime.',
			impacts: ['–35% unplanned downtime', 'Automated scheduling']
		}
	]
};

const switchPanel = (id) => {
	activePanel.value = id;
	openAgent.value = null;
};

const toggleAgent = (key) => {
	openAgent.value = openAgent.value === key ? null : key;
};

const trackMouse = (e) => {
	const rect = e.currentTarget.getBoundingClientRect();
	const x = ((e.clientX - rect.left) / rect.width) * 100;
	const y = ((e.clientY - rect.top) / rect.height) * 100;
	e.currentTarget.style.setProperty('--mx', x + '%');
	e.currentTarget.style.setProperty('--my', y + '%');
};
</script>
