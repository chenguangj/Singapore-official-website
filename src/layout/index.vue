<template>
	<AppHeader></AppHeader>
	<router-view v-slot="{ Component }">
		<transition name="fede" mode="out-in" appear>
			<div :style="route.name === 'Login' || route.name === 'Home' ? '' : 'background: #f5f7fa'">
				<component :is="Component" />
			</div>
		</transition>
	</router-view>
	<AppFooter></AppFooter>
</template>

<script setup>
import { ref, watch } from 'vue';
import AppHeader from './AppHeader/index.vue';
import AppFooter from './AppFooter/index.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const animation = ref('fede');
watch(route, () => {
	animation.value = 'fede';
});
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.app-header {
	margin-bottom: -60px;
}
</style>
