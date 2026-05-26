<template>
	<header class="nav-wrapper" :class="{ 'nav-wrapper--scrolled': scrolled }">
		<nav class="nav" :class="{ 'nav--scrolled': scrolled }">
			<div class="nav__inner">
				<div class="nav__logo">
					<img @click="navigateTo('Home')" style="width: auto; height: 30px; margin-right: 5px; cursor: pointer" src="../../assets/logo2.png" alt="" />
				</div>
				<div class="nav__links">
					<a @click="navigateTo('Home')">Home</a>
					<a @click="navigateTo('Cases')">Cases</a>
					<a @click="navigateTo('Contact')">Contact Us</a>
					<a @click="navigateTo('About.AboutCom')">About Us</a>
				</div>
				<div class="nav__right">
					<a class="nav__cta" @click="navigateToContact">Get Started</a>
				</div>
				<!-- Hamburger -->
				<button class="nav__hamburger" @click="menuOpen = !menuOpen" :class="{ 'nav__hamburger--open': menuOpen }" aria-label="Toggle menu">
					<span></span><span></span><span></span>
				</button>
			</div>
		</nav>
		<!-- Mobile Menu -->
		<div class="nav__mobile-menu" :class="{ 'nav__mobile-menu--open': menuOpen }">
			<a
				@click="
					navigateTo('Home');
					menuOpen = false;
				"
				>Home</a
			>
			<a
				@click="
					navigateTo('Cases');
					menuOpen = false;
				"
				>Cases</a
			>
			<a
				@click="
					navigateTo('Contact');
					menuOpen = false;
				"
				>Contact Us</a
			>
			<a
				@click="
					navigateTo('About.AboutCom');
					menuOpen = false;
				"
				>About Us</a
			>
			<a class="nav__mobile-cta" href="javascript:void(0)" @click="menuOpen = false">Get Started</a>
		</div>
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
const router = useRouter();
function navigateTo(name) {
	router.push({ name });
}
const route = useRoute();
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
const scrolled = ref(false);
const menuOpen = ref(false);

const onScroll = () => {
	scrolled.value = window.scrollY > 20;
};

onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<style lang="scss" scoped>
$gray-400: #555555;

.nav-wrapper {
	position: fixed;
	z-index: 1000;
	transition: all 0.5s ease;

	// 未滚动：全宽贴顶
	top: 0;
	left: 0;
	right: 0;

	// 滚动后：悬浮缩进
	&--scrolled {
		top: 12px;
		left: 16px;
		right: 16px;
	}
}

.nav {
	margin: 0 auto;
	transition: all 0.5s ease;
	max-width: 1400px;

	&--scrolled {
		max-width: 1200px;
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 16px;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
	}

	&__inner {
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: height 0.5s ease;
		height: 72px;

		.nav--scrolled & {
			height: 52px;
		}
	}

	&__logo {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 22px;
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	&__links {
		display: flex;
		gap: 36px;

		a {
			cursor: pointer;
			color: $gray-400;
			text-decoration: none;
			font-size: 14px;
			transition: color 0.2s;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				bottom: -3px;
				left: 0;
				width: 0;
				height: 1px;
				background: currentColor;
				transition: width 0.25s ease;
			}

			&:hover {
				color: #000000;
			}

			&:hover::after {
				width: 100%;
			}
		}
	}

	&__cta {
		font-size: 14px;
		padding: 10px 24px;
		border: 1px solid #0003;
		border-radius: 6px;
		color: #000;
		text-decoration: none;
		transition: all 0.2s;

		&:hover {
			background: #0000000d;
			border-color: rgba(0, 0, 0, 0.3);
		}
	}

	&__right {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	&__hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 36px;
		height: 36px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;

		span {
			display: block;
			width: 22px;
			height: 2px;
			background: #000;
			border-radius: 2px;
			transition: all 0.3s ease;
			transform-origin: center;
		}

		&--open span:nth-child(1) {
			transform: translateY(7px) rotate(45deg);
		}
		&--open span:nth-child(2) {
			opacity: 0;
			transform: scaleX(0);
		}
		&--open span:nth-child(3) {
			transform: translateY(-7px) rotate(-45deg);
		}
	}
}

.nav__mobile-menu {
	display: none;
	flex-direction: column;
	background: rgba(255, 255, 255, 0.97);
	backdrop-filter: blur(20px);
	border-top: 1px solid rgba(0, 0, 0, 0.08);
	padding: 16px 24px 24px;
	gap: 4px;

	a {
		cursor: pointer;
		color: #333;
		text-decoration: none;
		font-size: 16px;
		padding: 12px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
		transition: color 0.2s;

		&:hover {
			color: #000;
		}
		&:last-child {
			border-bottom: none;
		}
	}

	.nav__mobile-cta {
		margin-top: 12px;
		text-align: center;
		padding: 12px 24px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 8px;
		font-weight: 500;
	}

	&--open {
		display: flex;
	}
}

@media (max-width: 768px) {
	.nav__links,
	.nav__right {
		display: none;
	}

	.nav__hamburger {
		display: flex;
	}
}
</style>
