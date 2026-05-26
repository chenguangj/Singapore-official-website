<template>
	<el-dialog v-model="visible" width="340px" align-center :show-close="false" class="game-login-dialog">
		<div class="dialog-content">
			<!-- Animated lock icon -->
			<div class="lock-wrapper">
				<div class="lock-ring"></div>
				<div class="lock-ring ring2"></div>
				<svg class="lock-svg" viewBox="0 0 64 64" fill="none">
					<rect x="14" y="28" width="36" height="26" rx="6" fill="url(#lg1)" />
					<path d="M22 28v-8a10 10 0 0 1 20 0v8" stroke="#7c5cfc" stroke-width="3" stroke-linecap="round" fill="none" />
					<circle cx="32" cy="41" r="4" fill="#fff" opacity="0.9" />
					<rect x="30" y="41" width="4" height="6" rx="2" fill="#fff" opacity="0.9" />
					<defs>
						<linearGradient id="lg1" x1="14" y1="28" x2="50" y2="54" gradientUnits="userSpaceOnUse">
							<stop offset="0%" stop-color="#7c5cfc" />
							<stop offset="100%" stop-color="#3b9eff" />
						</linearGradient>
					</defs>
				</svg>
			</div>

			<h3 class="dialog-title">Access Restricted</h3>
			<p class="dialog-text">
				Please
				<span class="login-link" @click="openLoginView">Sign In</span>
				to continue
			</p>
		</div>

		<template #footer>
			<div class="dialog-footer">
				<button class="btn-cancel" @click="visible = false">Maybe Later</button>
				<button class="btn-login" @click="openLoginView">Sign In Now</button>
			</div>
		</template>
	</el-dialog>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);

const open = () => {
	visible.value = true;
};

const openLoginView = () => {
	window.open('/#/login', '_blank');
};

defineExpose({ open });
</script>

<style>
/* Override Element Plus CSS variables for the dialog */
.game-login-dialog {
	--el-dialog-bg-color: #000 !important;
	--el-bg-color: #000 !important;
	--el-bg-color-overlay: #000 !important;
}

/* Global override — el-dialog ignores scoped deep on root element */
.game-login-dialog.el-dialog {
	background: #000 !important;
	border: 1px solid rgba(124, 92, 252, 0.5) !important;
	border-radius: 20px !important;
	box-shadow:
		0 0 0 1px rgba(124, 92, 252, 0.15),
		0 0 60px rgba(124, 92, 252, 0.25),
		0 20px 60px rgba(0, 0, 0, 0.8) !important;
	overflow: hidden;
}

.game-login-dialog .el-dialog__header {
	display: none;
}

.game-login-dialog .el-dialog__body {
	padding: 0;
	background: transparent;
}

.game-login-dialog .el-dialog__footer {
	padding: 0;
	background: transparent;
	border-top: 1px solid rgba(255, 255, 255, 0.06);
}
</style>

<style scoped>
/* Content */
.dialog-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 14px;
	padding: 36px 32px 24px;
	position: relative;
}

/* Animated lock */
.lock-wrapper {
	position: relative;
	width: 80px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.lock-ring {
	position: absolute;
	inset: 0;
	border-radius: 50%;
	border: 2px solid transparent;
	background: conic-gradient(#7c5cfc, #3b9eff, #7c5cfc) border-box;
	-webkit-mask:
		linear-gradient(#fff 0 0) padding-box,
		linear-gradient(#fff 0 0);
	-webkit-mask-composite: destination-out;
	mask:
		linear-gradient(#fff 0 0) padding-box,
		linear-gradient(#fff 0 0);
	mask-composite: exclude;
	animation: spin 3s linear infinite;
}

.lock-ring.ring2 {
	inset: 6px;
	border-color: rgba(59, 158, 255, 0.3);
	animation: spin 5s linear infinite reverse;
	background: conic-gradient(#3b9eff, transparent, #3b9eff) border-box;
	-webkit-mask:
		linear-gradient(#fff 0 0) padding-box,
		linear-gradient(#fff 0 0);
	-webkit-mask-composite: destination-out;
	mask:
		linear-gradient(#fff 0 0) padding-box,
		linear-gradient(#fff 0 0);
	mask-composite: exclude;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}

.lock-svg {
	width: 48px;
	height: 48px;
	filter: drop-shadow(0 0 8px rgba(124, 92, 252, 0.6));
}

.dialog-title {
	font-size: 18px;
	font-weight: 700;
	color: #e8e0ff;
	margin: 0;
	letter-spacing: 1px;
	text-shadow: 0 0 20px rgba(124, 92, 252, 0.4);
}

.dialog-text {
	font-size: 14px;
	color: rgba(200, 190, 255, 0.65);
	margin: 0;
}

.login-link {
	color: #7c5cfc;
	cursor: pointer;
	font-weight: 600;
	transition: color 0.2s;
}

.login-link:hover {
	color: #a07cff;
}

/* Footer buttons */
.dialog-footer {
	display: flex;
	gap: 10px;
	padding: 16px 24px;
}

.btn-cancel,
.btn-login {
	flex: 1;
	height: 40px;
	border-radius: 10px;
	font-size: 13px;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s;
}

.btn-cancel {
	background: rgba(124, 92, 252, 0.08);
	color: rgba(200, 190, 255, 0.7);
	border: 1px solid rgba(124, 92, 252, 0.25);
}

.btn-cancel:hover {
	background: rgba(124, 92, 252, 0.15);
	color: rgba(220, 210, 255, 0.9);
	border-color: rgba(124, 92, 252, 0.45);
}

.btn-login {
	background: linear-gradient(135deg, #7c5cfc 0%, #5b3fd4 60%, #3b2fa8 100%);
	color: #fff;
	border: 1px solid rgba(124, 92, 252, 0.6);
	box-shadow:
		0 4px 16px rgba(124, 92, 252, 0.45),
		inset 0 1px 0 rgba(255, 255, 255, 0.15);
	letter-spacing: 0.5px;
}

.btn-login:hover {
	transform: translateY(-1px);
	box-shadow:
		0 8px 28px rgba(124, 92, 252, 0.65),
		inset 0 1px 0 rgba(255, 255, 255, 0.2);
	background: linear-gradient(135deg, #9070ff 0%, #6b4fe4 60%, #4b3fc0 100%);
}
</style>
