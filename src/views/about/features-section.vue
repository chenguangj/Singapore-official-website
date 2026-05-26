<template>
	<section ref="sectionRef" class="features-section">
		<!-- Header -->
		<div class="features-section__header" :class="{ 'features-section__header--visible': isVisible }">
			<span class="features-section__tag">
				<span class="features-section__tag-line"></span>
				Capabilities
			</span>
			<h2 class="features-section__title">
				Everything you need.
				<br />
				<span class="features-section__title--muted">Nothing you don't.</span>
			</h2>
		</div>

		<!-- Features List -->
		<div>
			<FeatureCard v-for="(feature, index) in features" :key="feature.number" :feature="feature" :index="index" />
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import FeatureCard from './FeatureCard.vue';

const features = [
	{
		number: '01',
		title: 'Instant Deployment',
		description: 'Push to production in seconds. Our edge network ensures your applications load instantly, anywhere in the world.',
		visual: 'deploy'
	},
	{
		number: '02',
		title: 'AI-Native Workflows',
		description: 'Build intelligent applications with built-in AI capabilities. From inference to training, everything scales automatically.',
		visual: 'ai'
	},
	{
		number: '03',
		title: 'Real-time Collaboration',
		description: 'Work together seamlessly. Live preview, instant feedback, and version control that actually makes sense.',
		visual: 'collab'
	},
	{
		number: '04',
		title: 'Enterprise Security',
		description: 'Bank-grade encryption, SOC 2 compliance, and granular access controls. Your data stays yours.',
		visual: 'security'
	}
];

const isVisible = ref(false);
const sectionRef = ref(null);
let observer = null;

onMounted(() => {
	observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) isVisible.value = true;
		},
		{ threshold: 0.1 }
	);
	if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
	observer?.disconnect();
});
</script>

<style lang="scss" scoped>
.features-section {
	padding: 0;

	&__header {
		margin-bottom: 64px;
		opacity: 0;
		transform: translateY(16px);
		transition:
			opacity 0.7s ease,
			transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);

		&--visible {
			opacity: 1;
			transform: translateY(0);
		}
	}

	&__tag {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		font-size: 13px;
		font-family: monospace;
		color: #888;
		margin-bottom: 24px;
	}

	&__tag-line {
		display: inline-block;
		width: 32px;
		height: 1px;
		background: rgba(0, 0, 0, 0.3);
	}

	&__title {
		font-size: clamp(32px, 4.5vw, 56px);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.03em;
		color: #000;
	}

	&__title--muted {
		color: #999;
	}
}
</style>
