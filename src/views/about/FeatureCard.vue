<template>
	<div ref="cardRef" class="feature-card" :class="{ 'feature-card--visible': isVisible }" :style="{ transitionDelay: `${index * 100}ms` }">
		<div class="feature-card__inner">
			<!-- Number -->
			<div class="feature-card__num">{{ feature.number }}</div>

			<!-- Content -->
			<div class="feature-card__content">
				<div class="feature-card__text">
					<h3 class="feature-card__title">{{ feature.title }}</h3>
					<p class="feature-card__desc">{{ feature.description }}</p>
				</div>
				<div class="feature-card__visual">
					<AnimatedVisual :type="feature.visual" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AnimatedVisual from './AnimatedVisual.vue';

const props = defineProps({
	feature: Object,
	index: Number
});

const isVisible = ref(false);
const cardRef = ref(null);
let observer = null;

onMounted(() => {
	observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) isVisible.value = true;
		},
		{ threshold: 0.2 }
	);
	if (cardRef.value) observer.observe(cardRef.value);
});

onUnmounted(() => {
	observer?.disconnect();
});
</script>

<style lang="scss" scoped>
.feature-card {
	opacity: 0;
	transform: translateY(48px);
	transition:
		opacity 0.7s ease,
		transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);

	&--visible {
		opacity: 1;
		transform: translateY(0);
	}

	&__inner {
		display: flex;
		gap: 32px;
		padding: 48px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		align-items: flex-start;
	}

	&__num {
		font-size: 12px;
		letter-spacing: 0.1em;
		color: #aaa;
		font-variant-numeric: tabular-nums;
		flex-shrink: 0;
		padding-top: 6px;
		min-width: 28px;
	}

	&__content {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
		align-items: center;

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}
	}

	&__title {
		font-size: clamp(24px, 3vw, 36px);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: 16px;
		color: #000;
		transition: transform 0.5s ease;
	}

	&:hover &__title {
		transform: translateX(8px);
	}

	&__desc {
		font-size: 16px;
		line-height: 1.7;
		color: #555;
	}

	&__visual {
		display: flex;
		justify-content: flex-end;
		color: #000;

		@media (max-width: 768px) {
			justify-content: center;
		}

		:deep(svg) {
			width: 192px;
			height: 160px;
		}
	}
}
</style>
