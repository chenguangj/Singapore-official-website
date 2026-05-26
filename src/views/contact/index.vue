<template>
	<div class="contact-page" @mousemove="onMouseMove">
		<!-- Cursor Glow -->
		<div class="cursor-glow" :style="{ left: mouseX + 'px', top: mouseY + 'px' }"></div>
		<!-- Hero -->
		<section class="contact-hero">
			<div class="contact-hero__grid"></div>
			<div class="contact-hero__content">
				<p class="contact-hero__tag reveal reveal--up">Get In Touch</p>
				<h1 class="contact-hero__title reveal reveal--up" style="--delay: 0.1s">
					Start Your<br />
					<span class="contact-hero__title--gradient">AI Journey Today.</span>
				</h1>
				<p class="contact-hero__sub reveal reveal--up" style="--delay: 0.2s">
					Tell us about your enterprise challenges. Our solutions team will design a custom AI agent deployment — tailored, scalable, and production-ready.
				</p>
				<div class="contact-hero__badges reveal reveal--up" style="--delay: 0.3s">
					<span class="contact-hero__badge">
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12" />
						</svg>
						Response within 24h SGT
					</span>
					<span class="contact-hero__badge">
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
						</svg>
						MAS-aligned &amp; PDPA compliant
					</span>
					<span class="contact-hero__badge">
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12" />
						</svg>
						EDG / IMDA grant-eligible
					</span>
					<span class="contact-hero__badge">
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12" />
						</svg>
						Free enterprise trial
					</span>
				</div>
			</div>
			<div class="contact-hero__orb"></div>
			<div class="contact-hero__orb contact-hero__orb--2"></div>
		</section>

		<!-- Why Contact Section -->
		<section class="contact-why">
			<div class="contact-why__inner">
				<div v-for="(card, i) in whyCards" :key="card.title" class="contact-why__card reveal reveal--up" :style="`--delay: ${i * 0.1}s`">
					<span class="contact-why__icon" v-html="card.icon"></span>
					<h3 class="contact-why__card-title">{{ card.title }}</h3>
					<p class="contact-why__card-desc">{{ card.desc }}</p>
				</div>
			</div>
		</section>

		<!-- Main Content -->
		<section class="contact-main" id="contact-form">
			<div class="contact-main__inner">
				<!-- Left Panel -->
				<div class="contact-left">
					<div class="contact-left__sticky">
						<h2 class="contact-left__title reveal reveal--up">Get an Enterprise Trial.</h2>
						<p class="contact-left__desc reveal reveal--up" style="--delay: 0.1s">
							Discover the value of AIBoost for your organization. We'll give you a product trial and discuss your requirements.
						</p>

						<div class="contact-left__divider"></div>

						<p class="contact-left__trusted">Trusted by leading enterprises</p>
						<div class="contact-logos">
							<div v-for="logo in clientLogos" :key="logo.name" class="contact-logos__item">
								<span class="contact-logos__name">{{ logo.name }}</span>
							</div>
						</div>

						<div class="contact-left__divider"></div>

						<!-- Contact Info -->
						<div class="contact-info">
							<div class="contact-info__item">
								<span class="contact-info__icon">
									<svg
										width="15"
										height="15"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
										<polyline points="22,6 12,13 2,6" />
									</svg>
								</span>
								<span>support@aiboostapp.cloud</span>
							</div>
							<div class="contact-info__item">
								<span class="contact-info__icon">
									<svg
										width="15"
										height="15"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
										/>
									</svg>
								</span>
								<span>+65 8688 1371 &nbsp;·&nbsp; +852 469 14160</span>
							</div>
							<div class="contact-info__item">
								<span class="contact-info__icon">
									<svg
										width="15"
										height="15"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
										<circle cx="12" cy="10" r="3" />
									</svg>
								</span>
								<span>531A Upper Cross Street #03-108 Hong Lim Complex Singapore 051531</span>
							</div>
						</div>

						<div class="contact-left__divider"></div>

						<!-- FAQ -->
						<p class="contact-left__trusted">Frequently asked</p>
						<div class="contact-faq">
							<div
								v-for="(faq, i) in faqs"
								:key="i"
								class="contact-faq__item"
								:class="{ 'contact-faq__item--open': openFaq === i }"
								@click="openFaq = openFaq === i ? null : i"
							>
								<div class="contact-faq__q">
									<span>{{ faq.q }}</span>
									<svg
										class="contact-faq__arrow"
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<polyline points="6 9 12 15 18 9" />
									</svg>
								</div>
								<div class="contact-faq__a">{{ faq.a }}</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Right Panel: Multi-step Form -->
				<div class="contact-right">
					<!-- Step Indicator -->
					<div class="form-steps" v-if="!submitted">
						<div
							v-for="(step, i) in steps"
							:key="i"
							class="form-steps__item"
							:class="{ 'form-steps__item--active': currentStep === i, 'form-steps__item--done': currentStep > i }"
						>
							<div class="form-steps__dot">
								<svg
									v-if="currentStep > i"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span v-else>{{ i + 1 }}</span>
							</div>
							<span class="form-steps__label">{{ step }}</span>
							<div v-if="i < steps.length - 1" class="form-steps__line"></div>
						</div>
					</div>

					<form class="contact-form" novalidate @submit.prevent="handleSubmit">
						<!-- Step 0: About You -->
						<div v-show="currentStep === 0">
							<p class="form-step-title">Tell us about yourself</p>
							<div class="form-group">
								<label class="form-label">Company email <span class="form-required">*</span></label>
								<input v-model="form.email" type="email" class="form-input" :class="{ 'form-input--error': errors.email }" placeholder="you@company.com" />
								<span v-if="errors.email" class="form-error">{{ errors.email }}</span>
							</div>
							<div class="form-row">
								<div class="form-group">
									<label class="form-label">Your name <span class="form-required">*</span></label>
									<input v-model="form.name" type="text" class="form-input" :class="{ 'form-input--error': errors.name }" placeholder="Full name" />
									<span v-if="errors.name" class="form-error">{{ errors.name }}</span>
								</div>
								<div class="form-group">
									<label class="form-label">Phone number <span class="form-optional">(Optional)</span></label>
									<div class="phone-input-wrap">
										<!-- Custom flag picker -->
										<div class="flag-picker" ref="flagPickerRef">
											<button type="button" class="flag-picker__trigger" @click="flagDropOpen = !flagDropOpen">
												<img :src="`https://flagcdn.com/w40/${selectedDialCode.iso}.png`" :alt="selectedDialCode.name" class="flag-picker__flag" />
												<span class="flag-picker__code">{{ selectedDialCode.dial }}</span>
												<svg
													class="flag-picker__arrow"
													:class="{ 'flag-picker__arrow--open': flagDropOpen }"
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<polyline points="6 9 12 15 18 9" />
												</svg>
											</button>
											<div v-if="flagDropOpen" class="flag-picker__dropdown">
												<div
													v-for="item in dialCodes"
													:key="item.iso"
													class="flag-picker__option"
													:class="{ 'flag-picker__option--active': form.phonePrefix === item.dial }"
													@click="
														form.phonePrefix = item.dial;
														flagDropOpen = false;
													"
												>
													<img :src="`https://flagcdn.com/w40/${item.iso}.png`" :alt="item.name" class="flag-picker__flag" />
													<span class="flag-picker__option-name">{{ item.name }}</span>
													<span class="flag-picker__option-dial">{{ item.dial }}</span>
												</div>
											</div>
										</div>
										<input v-model="form.phone" type="tel" class="form-input phone-number" placeholder="8688 1371" />
									</div>
								</div>
							</div>
							<div class="form-group">
								<label class="form-label">Country <span class="form-required">*</span></label>
								<div class="form-select-wrap">
									<select v-model="form.country" class="form-select" :class="{ 'form-input--error': errors.country }">
										<option value="" disabled>Select your country</option>
										<option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
									</select>
									<span class="form-select-arrow"
										><svg
											width="14"
											height="14"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<polyline points="6 9 12 15 18 9" /></svg
									></span>
								</div>
								<span v-if="errors.country" class="form-error">{{ errors.country }}</span>
							</div>
							<div class="form-nav">
								<button type="button" class="btn btn--next" @click="nextStep">
									Next — Company Info
									<svg
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<line x1="5" y1="12" x2="19" y2="12" />
										<polyline points="12 5 19 12 12 19" />
									</svg>
								</button>
							</div>
						</div>

						<!-- Step 1: Company Info -->
						<div v-show="currentStep === 1">
							<p class="form-step-title">About your company</p>
							<div class="form-row">
								<div class="form-group">
									<label class="form-label">Company website</label>
									<input v-model="form.website" type="url" class="form-input" placeholder="https://company.com" />
								</div>
								<div class="form-group">
									<label class="form-label">Company size <span class="form-required">*</span></label>
									<div class="form-select-wrap">
										<select v-model="form.companySize" class="form-select" :class="{ 'form-input--error': errors.companySize }">
											<option value="" disabled>Select a value</option>
											<option value="1-50">1–50 employees</option>
											<option value="51-200">51–200 employees</option>
											<option value="201-1000">201–1,000 employees</option>
											<option value="1001-5000">1,001–5,000 employees</option>
											<option value="5000+">5,000+ employees</option>
										</select>
										<span class="form-select-arrow"
											><svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<polyline points="6 9 12 15 18 9" /></svg
										></span>
									</div>
									<span v-if="errors.companySize" class="form-error">{{ errors.companySize }}</span>
								</div>
							</div>
							<div class="form-group">
								<label class="form-label">Primary product interest <span class="form-required">*</span></label>
								<div class="interest-grid">
									<button
										v-for="opt in interestOptions"
										:key="opt.value"
										type="button"
										class="interest-btn"
										:class="{ 'interest-btn--active': form.interest === opt.value }"
										@click="
											form.interest = opt.value;
											errors.interest = '';
										"
									>
										<span v-html="opt.icon"></span>
										{{ opt.label }}
									</button>
								</div>
								<span v-if="errors.interest" class="form-error">{{ errors.interest }}</span>
							</div>
							<div class="form-nav">
								<button type="button" class="btn btn--back" @click="currentStep--">
									<svg
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<line x1="19" y1="12" x2="5" y2="12" />
										<polyline points="12 19 5 12 12 5" />
									</svg>
									Back
								</button>
								<button type="button" class="btn btn--next" @click="nextStep">
									Next — Your Message
									<svg
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<line x1="5" y1="12" x2="19" y2="12" />
										<polyline points="12 5 19 12 12 19" />
									</svg>
								</button>
							</div>
						</div>

						<!-- Step 2: Message -->
						<div v-show="currentStep === 2">
							<p class="form-step-title">How can we help?</p>
							<div class="form-group">
								<label class="form-label">Describe your needs <span class="form-required">*</span></label>
								<textarea
									v-model="form.message"
									class="form-textarea"
									:class="{ 'form-input--error': errors.message }"
									placeholder="Tell us about your current challenges, goals, and what you'd like to achieve with AI agents..."
									rows="6"
								></textarea>
								<span v-if="errors.message" class="form-error">{{ errors.message }}</span>
							</div>

							<!-- Summary Card -->
							<div class="form-summary">
								<p class="form-summary__title">Submitting as</p>
								<div class="form-summary__row">
									<span>{{ form.name || '—' }}</span
									><span>{{ form.email || '—' }}</span>
								</div>
								<div class="form-summary__row">
									<span>{{ form.country || '—' }}</span
									><span>{{ interestOptions.find((o) => o.value === form.interest)?.label || '—' }}</span>
								</div>
							</div>

							<div class="form-nav">
								<button type="button" class="btn btn--back" @click="currentStep--">
									<svg
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<line x1="19" y1="12" x2="5" y2="12" />
										<polyline points="12 19 5 12 12 5" />
									</svg>
									Back
								</button>
								<button type="submit" class="btn btn--submit" :disabled="submitting">
									<span v-if="!submitting">Submit Form</span>
									<span v-else class="btn--loading">
										<svg
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="spin"
										>
											<path d="M21 12a9 9 0 1 1-6.219-8.56" />
										</svg>
										Sending...
									</span>
								</button>
							</div>
						</div>
					</form>

					<!-- Success State -->
					<div v-if="submitted" class="form-success-full">
						<div class="form-success-full__icon">
							<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="20 6 9 17 4 12" />
							</svg>
						</div>
						<h3 class="form-success-full__title">Message received.</h3>
						<p class="form-success-full__desc">
							Thank you, <strong>{{ form.name }}</strong
							>. Our solutions team will reach out to <strong>{{ form.email }}</strong> within 24 hours.
						</p>
						<div class="form-success-full__next">
							<p class="form-success-full__next-title">What happens next?</p>
							<div v-for="(step, i) in nextSteps" :key="i" class="form-success-full__step">
								<span class="form-success-full__step-num">{{ i + 1 }}</span>
								<span>{{ step }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Office Locations -->
		<section class="contact-offices" id="contact-offices">
			<div class="contact-offices__inner">
				<p class="contact-offices__label reveal reveal--up">Our Offices</p>
				<div class="contact-offices__grid">
					<div v-for="(office, i) in offices" :key="office.city" class="contact-offices__card reveal reveal--up" :style="`--delay: ${i * 0.1}s`">
						<div class="contact-offices__card-header">
							<span class="contact-offices__flag" v-html="office.flag"></span>
							<div>
								<p class="contact-offices__city">{{ office.city }}</p>
								<p class="contact-offices__role">{{ office.role }}</p>
							</div>
						</div>
						<p class="contact-offices__addr">{{ office.address }}</p>
						<p class="contact-offices__hours">{{ office.hours }}</p>
						<p class="contact-offices__transit" v-if="office.transit">
							<svg
								style="padding-top: 2px"
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<rect x="2" y="2" width="20" height="20" rx="2" />
								<path d="M8 6h8M8 10h8M8 14h4" />
								<circle cx="6" cy="18" r="1" />
								<circle cx="18" cy="18" r="1" />
								<path d="M6 14v4M18 14v4" />
							</svg>
							{{ office.transit }}
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Stats bar -->
		<section class="contact-stats">
			<div class="contact-stats__inner">
				<div v-for="(s, i) in stats" :key="i" class="contact-stats__item reveal reveal--up" :style="`--delay: ${i * 0.08}s`">
					<div class="contact-stats__num">{{ s.number }}</div>
					<div class="contact-stats__label">{{ s.label }}</div>
				</div>
			</div>
		</section>

		<!-- Bottom CTA -->
		<section class="contact-cta" id="contact-cta">
			<div class="contact-cta__inner">
				<h2 class="contact-cta__title reveal reveal--up">Prefer a direct conversation?</h2>
				<p class="contact-cta__desc reveal reveal--up" style="--delay: 0.1s">
					Book a 30-minute discovery call with one of our enterprise solutions architects — no slides, just answers.
				</p>
				<a class="btn btn--cta reveal reveal--up" style="--delay: 0.2s" @click="navigateToContact">
					Schedule a Call
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</a>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';

const mouseX = ref(0);
const mouseY = ref(0);
const onMouseMove = (e) => {
	mouseX.value = e.clientX;
	mouseY.value = e.clientY;
};
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

const currentStep = ref(0);
const submitting = ref(false);
const submitted = ref(false);
const openFaq = ref(null);
const flagDropOpen = ref(false);
const flagPickerRef = ref(null);

const dialCodes = [
	{ iso: 'sg', name: 'Singapore', dial: '+65' },
	{ iso: 'hk', name: 'Hong Kong', dial: '+852' },
	{ iso: 'cn', name: 'China', dial: '+86' },
	{ iso: 'my', name: 'Malaysia', dial: '+60' },
	{ iso: 'id', name: 'Indonesia', dial: '+62' },
	{ iso: 'th', name: 'Thailand', dial: '+66' },
	{ iso: 'vn', name: 'Vietnam', dial: '+84' },
	{ iso: 'ph', name: 'Philippines', dial: '+63' },
	{ iso: 'jp', name: 'Japan', dial: '+81' },
	{ iso: 'kr', name: 'South Korea', dial: '+82' },
	{ iso: 'in', name: 'India', dial: '+91' },
	{ iso: 'au', name: 'Australia', dial: '+61' },
	{ iso: 'gb', name: 'United Kingdom', dial: '+44' },
	{ iso: 'us', name: 'United States', dial: '+1' }
];

const selectedDialCode = computed(() => dialCodes.find((d) => d.dial === form.phonePrefix) || dialCodes[0]);

const handleClickOutside = (e) => {
	if (flagPickerRef.value && !flagPickerRef.value.contains(e.target)) {
		flagDropOpen.value = false;
	}
};

onMounted(() => {
	document.addEventListener('mousedown', handleClickOutside);

	// Reveal animations
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
onUnmounted(() => document.removeEventListener('mousedown', handleClickOutside));

const steps = ['About You', 'Company Info', 'Your Message'];

const form = reactive({
	email: '',
	name: '',
	phone: '',
	phonePrefix: '+65',
	country: 'Singapore',
	website: '',
	companySize: '',
	interest: '',
	message: '',
	privacy: false
});

const errors = reactive({
	email: '',
	name: '',
	country: '',
	companySize: '',
	interest: '',
	message: ''
});

const validateStep = (step) => {
	let valid = true;
	if (step === 0) {
		errors.email = '';
		errors.name = '';
		errors.country = '';
		if (!form.email) {
			errors.email = 'Company email is required.';
			valid = false;
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			errors.email = 'Please enter a valid email address.';
			valid = false;
		}
		if (!form.name.trim()) {
			errors.name = 'Your name is required.';
			valid = false;
		}
		if (!form.country) {
			errors.country = 'Please select your country.';
			valid = false;
		}
	}
	if (step === 1) {
		errors.companySize = '';
		errors.interest = '';
		if (!form.companySize) {
			errors.companySize = 'Please select your company size.';
			valid = false;
		}
		if (!form.interest) {
			errors.interest = 'Please select a product interest.';
			valid = false;
		}
	}
	if (step === 2) {
		errors.message = '';
		if (!form.message.trim()) {
			errors.message = 'Please describe how we can help.';
			valid = false;
		}
	}
	return valid;
};

const nextStep = () => {
	if (validateStep(currentStep.value)) currentStep.value++;
};

const handleSubmit = async () => {
	if (!validateStep(2)) return;
	submitting.value = true;
	await new Promise((r) => setTimeout(r, 1500));
	submitting.value = false;
	submitted.value = true;
};

const whyCards = [
	{
		title: '24-Hour Response (SGT)',
		desc: "Every inquiry is reviewed by a Singapore-based solutions architect. You'll hear back within one business day — guaranteed.",
		icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
	},
	{
		title: 'MAS-Aligned & PDPA Ready',
		desc: "Built for Singapore's regulatory environment. Our deployments are designed to meet MAS Technology Risk Guidelines and PDPA data residency requirements out of the box.",
		icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
	},
	{
		title: 'Grant-Eligible Solutions',
		desc: 'Our AI deployments may qualify for Enterprise Development Grant (EDG) and IMDA funding. We help you navigate the application process at no extra cost.',
		icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
	}
];

const interestOptions = [
	{
		value: 'wealth',
		label: 'Wealth Management AI',
		icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
	},
	{
		value: 'compliance',
		label: 'Compliance & AML',
		icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
	},
	{
		value: 'operations',
		label: 'Operations Automation',
		icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`
	},
	{
		value: 'analytics',
		label: 'Predictive Analytics',
		icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
	},
	{
		value: 'custom',
		label: 'Custom Agent Dev',
		icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
	},
	{
		value: 'other',
		label: 'Other',
		icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
	}
];

const clientLogos = [{ name: 'GOAT' }, { name: 'Streamax' }, { name: 'Nation Technologies' }, { name: 'Hengfei Investment Group' }, { name: 'realme' }, { name: 'Zall Group' }];

const countries = [
	'Singapore',
	'China',
	'Hong Kong',
	'Japan',
	'South Korea',
	'India',
	'Indonesia',
	'Malaysia',
	'Thailand',
	'Vietnam',
	'Philippines',
	'Australia',
	'United Kingdom',
	'United States',
	'Other'
];

const faqs = [
	{
		q: 'Is AIBoost compliant with MAS Technology Risk Guidelines?',
		a: 'Yes. Our platform is designed to align with MAS TRM Guidelines and Notice on Technology Risk Management. We support private cloud and on-premise deployments to meet data residency requirements for financial institutions in Singapore.'
	},
	{
		q: "Does your solution comply with Singapore's PDPA?",
		a: 'Absolutely. Data processed through our agents can be kept entirely within Singapore-based infrastructure. We provide Data Processing Agreements (DPAs) and support your PDPA obligations including purpose limitation and data minimisation.'
	},
	{
		q: 'Can we use EDG or IMDA grants to fund this?',
		a: "Many of our deployments qualify for Enterprise Development Grant (EDG) under the Innovation & Productivity category, as well as IMDA's SMEs Go Digital programme. Our team can advise on eligibility and help with the application process."
	},
	{
		q: 'How long does a typical deployment take?',
		a: 'Most Singapore enterprise pilots go live within 4–6 weeks. Full production deployments typically take 8–12 weeks depending on integration complexity with existing systems like core banking or ERP.'
	},
	{
		q: 'Do you work with Singapore government agencies?',
		a: 'Yes. We have experience working with statutory boards and government-linked companies (GLCs) in Singapore, and are familiar with GovTech procurement processes and IM8 policy requirements.'
	}
];

const offices = [
	{
		city: 'Singapore',
		role: 'Headquarters · UEN 202412345K',
		flag: `<svg width="20" height="14" viewBox="0 0 20 14" fill="none"><rect width="20" height="7" fill="#EF3340"/><rect y="7" width="20" height="7" fill="#fff"/><circle cx="6" cy="7" r="2.5" fill="#fff"/><circle cx="7.2" cy="7" r="2.5" fill="#EF3340"/><g fill="#EF3340" transform="translate(8.5,4.5)"><polygon points="1,0 1.3,0.9 2.1,0.9 1.5,1.4 1.7,2.3 1,1.8 0.3,2.3 0.5,1.4 -0.1,0.9 0.7,0.9" transform="scale(0.5)"/></g></svg>`,
		address: '531A Upper Cross Street #03-108, Hong Lim Complex, Singapore 051531',
		hours: 'Mon–Fri, 9:00 AM – 6:00 PM SGT',
		transit: '5 min walk from Clarke Quay MRT (NE5) · Bus 51, 61, 197'
	},
	{
		city: 'Hong Kong',
		role: 'Regional Office',
		flag: `<svg width="20" height="14" viewBox="0 0 20 14" fill="none"><rect width="20" height="14" fill="#DE2910"/><circle cx="10" cy="7" r="3" fill="none" stroke="#fff" stroke-width="0.5"/><circle cx="10" cy="7" r="1" fill="#fff"/></svg>`,
		address: 'Central, Hong Kong SAR',
		hours: 'Mon–Fri, 9:00 AM – 6:00 PM HKT',
		transit: 'Central MTR Station (Island & Tsuen Wan Lines)'
	}
];

const stats = [
	{ number: '24h', label: 'Response Time' },
	{ number: '8+', label: 'Enterprise Clients' },
	{ number: '6+', label: 'Industries Served' },
	{ number: 'APAC', label: 'Regional Coverage' }
];

const nextSteps = [
	'A solutions architect reviews your submission and prepares a tailored brief.',
	'We schedule a 30-minute discovery call to align on your goals and constraints.',
	'You receive a custom deployment proposal within 3 business days.'
];
</script>

<style lang="scss" scoped>
$black: #000000;
$white: #ffffff;
$gray-100: #f5f5f5;
$gray-200: #e5e5e5;
$gray-400: #a1a1a1;
$gray-600: #6b6b6b;

.contact-page {
	background: $white;
	color: $black;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	overflow-x: hidden;
	-webkit-font-smoothing: antialiased;
}

// ─── Hero ───
.contact-hero {
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
		max-width: 700px;
	}

	&__tag {
		font-size: 13px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: $gray-600;
		margin-bottom: 24px;
	}

	&__title {
		font-size: clamp(32px, 6vw, 72px);
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
		font-size: 17px;
		line-height: 1.7;
		color: #666;
		max-width: 520px;
		margin: 0 auto 32px;
	}

	&__badges {
		display: flex;
		gap: 10px;
		justify-content: center;
		flex-wrap: wrap;
	}

	&__badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 12px;
		color: $gray-600;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 100px;
		padding: 5px 14px;
		background: $white;

		svg {
			color: $black;
			flex-shrink: 0;
		}
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

@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

// ─── Why Section ───
.contact-why {
	border-top: 1px solid rgba(0, 0, 0, 0.08);
	padding: 64px 24px;

	&__inner {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: rgba(0, 0, 0, 0.08);
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 12px;
		overflow: hidden;

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}
	}

	&__card {
		background: $white;
		padding: 36px 32px;
		transition: background 0.2s ease;

		&:hover {
			background: $gray-100;
		}
	}

	&__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		background: $gray-100;
		color: $black;
		margin-bottom: 20px;
	}

	&__card-title {
		font-size: 16px;
		font-weight: 600;
		letter-spacing: -0.02em;
		margin-bottom: 10px;
	}

	&__card-desc {
		font-size: 13px;
		line-height: 1.75;
		color: $gray-600;
	}
}

// ─── Main Layout ───
.contact-main {
	border-top: 1px solid rgba(0, 0, 0, 0.08);
	padding: 80px 24px;

	&__inner {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 320px 1fr;
		gap: 80px;
		align-items: start;

		@media (max-width: 900px) {
			grid-template-columns: 1fr;
			gap: 48px;
		}
	}
}

// ─── Left Panel ───
.contact-left {
	&__sticky {
		position: sticky;
		top: 108px;
	}

	&__title {
		font-size: clamp(20px, 2vw, 26px);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.2;
		margin-bottom: 14px;
	}

	&__desc {
		font-size: 13px;
		line-height: 1.75;
		color: $gray-600;
	}

	&__divider {
		height: 1px;
		background: rgba(0, 0, 0, 0.08);
		margin: 24px 0;
	}

	&__trusted {
		font-size: 10px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: $gray-600;
		margin-bottom: 14px;
	}
}

.contact-logos {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1px;
	border: 1px solid rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	overflow: hidden;
	background: rgba(0, 0, 0, 0.08);

	&__item {
		background: $white;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 16px 10px;
		min-height: 52px;
	}

	&__name {
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.02em;
		color: $black;
		text-align: center;
	}
}

.contact-info {
	display: flex;
	flex-direction: column;
	gap: 11px;

	&__item {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		font-size: 12px;
		color: $gray-600;
		line-height: 1.55;
	}
	&__icon {
		display: inline-flex;
		align-items: center;
		flex-shrink: 0;
		margin-top: 1px;
		color: $black;
	}
}

// ─── FAQ ───
.contact-faq {
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	overflow: hidden;

	&__item {
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
		cursor: pointer;
		user-select: none;

		&:last-child {
			border-bottom: none;
		}

		&--open .contact-faq__arrow {
			transform: rotate(180deg);
		}
		&--open .contact-faq__a {
			max-height: 200px;
			padding: 0 16px 14px;
			opacity: 1;
		}
	}

	&__q {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding: 14px 16px;
		font-size: 12px;
		font-weight: 500;
		color: $black;
		line-height: 1.5;
	}

	&__arrow {
		flex-shrink: 0;
		color: $gray-400;
		transition: transform 0.2s ease;
	}

	&__a {
		max-height: 0;
		overflow: hidden;
		font-size: 12px;
		line-height: 1.7;
		color: $gray-600;
		padding: 0 16px;
		opacity: 0;
		transition:
			max-height 0.3s ease,
			padding 0.3s ease,
			opacity 0.2s ease;
	}
}

// ─── Step Indicator ───
.form-steps {
	display: flex;
	align-items: center;
	margin-bottom: 36px;

	&__item {
		display: flex;
		align-items: center;
		flex: 1;

		&:last-child {
			flex: none;
		}
		&:last-child .form-steps__line {
			display: none;
		}
	}

	&__dot {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		border: 1.5px solid rgba(0, 0, 0, 0.15);
		background: $white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 11px;
		font-weight: 600;
		color: $gray-400;
		flex-shrink: 0;
		transition: all 0.2s ease;

		.form-steps__item--active & {
			border-color: $black;
			background: $black;
			color: $white;
		}

		.form-steps__item--done & {
			border-color: $black;
			background: $black;
			color: $white;
		}
	}

	&__label {
		font-size: 11px;
		color: $gray-400;
		margin-left: 8px;
		white-space: nowrap;
		transition: color 0.2s ease;

		.form-steps__item--active & {
			color: $black;
			font-weight: 500;
		}
		.form-steps__item--done & {
			color: $black;
		}
	}

	&__line {
		flex: 1;
		height: 1px;
		background: rgba(0, 0, 0, 0.1);
		margin: 0 10px;

		.form-steps__item--done & {
			background: $black;
		}
	}
}

.form-step-title {
	font-size: 18px;
	font-weight: 600;
	letter-spacing: -0.02em;
	margin-bottom: 24px;
	color: $black;
}

// ─── Form ───
.contact-form {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: 7px;
}

.form-row {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
	@media (max-width: 640px) {
		grid-template-columns: 1fr;
	}
}

.form-label {
	font-size: 13px;
	font-weight: 500;
	color: $black;
	letter-spacing: 0.01em;
}
.form-required {
	color: $black;
}
.form-optional {
	color: $gray-400;
	font-weight: 400;
}

.form-input,
.form-select,
.form-textarea {
	width: 100%;
	padding: 10px 14px;
	border: 1px solid rgba(0, 0, 0, 0.15);
	border-radius: 8px;
	font-size: 14px;
	color: $black;
	background: $white;
	outline: none;
	transition:
		border-color 0.15s ease,
		box-shadow 0.15s ease;
	font-family: inherit;
	box-sizing: border-box;

	&::placeholder {
		color: $gray-400;
	}
	&:focus {
		border-color: rgba(0, 0, 0, 0.5);
		box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
	}
}

.form-select {
	appearance: none;
	cursor: pointer;
	padding-right: 36px;
}
.form-input--error {
	border-color: #cc0000 !important;
	box-shadow: 0 0 0 3px rgba(204, 0, 0, 0.08) !important;
}
.form-error {
	font-size: 12px;
	color: #cc0000;
}

.form-select-wrap {
	position: relative;
}
.form-select-arrow {
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	color: $gray-600;
	display: flex;
	align-items: center;
}

.form-textarea {
	resize: vertical;
	min-height: 130px;
}

// ─── Interest Grid ───
.interest-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 8px;

	@media (max-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}
}

.interest-btn {
	display: flex;
	align-items: center;
	gap: 7px;
	padding: 10px 12px;
	border: 1px solid rgba(0, 0, 0, 0.12);
	border-radius: 8px;
	background: $white;
	font-size: 12px;
	font-weight: 500;
	color: $gray-600;
	cursor: pointer;
	transition: all 0.15s ease;
	text-align: left;
	font-family: inherit;

	svg {
		flex-shrink: 0;
	}

	&:hover {
		border-color: rgba(0, 0, 0, 0.3);
		color: $black;
		background: $gray-100;
	}

	&--active {
		border-color: $black;
		background: $black;
		color: $white;
	}
}

// ─── Summary Card ───
.form-summary {
	border: 1px solid rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	padding: 16px 20px;
	background: $gray-100;

	&__title {
		font-size: 10px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: $gray-600;
		margin-bottom: 10px;
	}

	&__row {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		font-size: 13px;
		color: $black;
		margin-bottom: 6px;

		&:last-child {
			margin-bottom: 0;
		}

		span {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}

// ─── Privacy ───
.form-privacy {
	border: 1px solid rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	padding: 18px 20px;
	background: $gray-100;

	&__content {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 16px;
	}
	&__title {
		font-size: 13px;
		font-weight: 600;
		color: $black;
		margin-bottom: 5px;
	}
	&__text {
		font-size: 12px;
		line-height: 1.6;
		color: $gray-600;
	}
	&__link {
		color: $black;
		text-decoration: underline;
		text-underline-offset: 2px;
		&:hover {
			color: $gray-600;
		}
	}
}

.form-toggle {
	flex-shrink: 0;
	width: 40px;
	height: 22px;
	border-radius: 100px;
	background: $gray-200;
	border: none;
	cursor: pointer;
	position: relative;
	transition: background 0.2s ease;
	padding: 0;

	&--on {
		background: $black;
	}

	&__thumb {
		position: absolute;
		top: 3px;
		left: 3px;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: $white;
		transition: transform 0.2s ease;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	}

	&--on &__thumb {
		transform: translateX(18px);
	}
}

// ─── Form Nav ───
.form-nav {
	display: flex;
	gap: 12px;
	justify-content: flex-end;
	margin-top: 8px;
}

.btn {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 11px 22px;
	border-radius: 8px;
	font-size: 14px;
	font-weight: 500;
	cursor: pointer;
	border: none;
	font-family: inherit;
	transition: all 0.15s ease;
}

.btn--next {
	background: $black;
	color: $white;
	&:hover {
		background: #222;
		transform: translateY(-1px);
	}
}

.btn--back {
	background: transparent;
	color: $black;
	border: 1px solid rgba(0, 0, 0, 0.15);
	&:hover {
		border-color: rgba(0, 0, 0, 0.4);
	}
}

.btn--submit {
	background: $black;
	color: $white;
	padding: 11px 28px;
	border-radius: 8px;
	&:hover:not(:disabled) {
		background: #222;
		transform: translateY(-1px);
	}
	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
}

.btn--loading {
	display: flex;
	align-items: center;
	gap: 8px;
}
.spin {
	animation: spin 0.8s linear infinite;
}

// ─── Success Full ───
.form-success-full {
	padding: 48px 0;
	text-align: center;

	&__icon {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background: $gray-100;
		border: 1px solid rgba(0, 0, 0, 0.08);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 24px;
		color: $black;
	}

	&__title {
		font-size: 28px;
		font-weight: 700;
		letter-spacing: -0.03em;
		margin-bottom: 12px;
	}

	&__desc {
		font-size: 15px;
		line-height: 1.7;
		color: $gray-600;
		max-width: 420px;
		margin: 0 auto 36px;
	}

	&__next {
		max-width: 420px;
		margin: 0 auto;
		text-align: left;
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 12px;
		padding: 24px;
		background: $gray-100;
	}

	&__next-title {
		font-size: 11px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: $gray-600;
		margin-bottom: 16px;
	}

	&__step {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		font-size: 13px;
		line-height: 1.6;
		color: #333;
		margin-bottom: 12px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	&__step-num {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: $black;
		color: $white;
		font-size: 11px;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 1px;
	}
}

// ─── Offices ───
.contact-offices {
	border-top: 1px solid rgba(0, 0, 0, 0.08);
	padding: 80px 24px;

	&__inner {
		max-width: 1200px;
		margin: 0 auto;
	}

	&__label {
		font-size: 11px;
		letter-spacing: 2.5px;
		text-transform: uppercase;
		color: $gray-600;
		margin-bottom: 28px;
	}

	&__grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
		}
	}

	&__card {
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 12px;
		padding: 28px 32px;
		background: $gray-100;
		transition: background 0.2s ease;

		&:hover {
			background: $gray-200;
		}
	}

	&__card-header {
		display: flex;
		align-items: center;
		gap: 14px;
		margin-bottom: 16px;
	}

	&__flag {
		width: 36px;
		height: 26px;
		border-radius: 4px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(0, 0, 0, 0.08);
		flex-shrink: 0;
	}

	&__city {
		font-size: 16px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}
	&__role {
		font-size: 11px;
		color: $gray-600;
		margin-top: 2px;
	}
	&__addr {
		font-size: 13px;
		color: $gray-600;
		line-height: 1.6;
		margin-bottom: 8px;
	}
	&__hours {
		font-size: 12px;
		color: $gray-400;
		margin-bottom: 8px;
	}

	&__transit {
		display: flex;
		align-items: flex-start;
		gap: 6px;
		font-size: 11px;
		color: $gray-400;
		line-height: 1.5;

		svg {
			flex-shrink: 0;
			margin-top: 1px;
			opacity: 0.6;
		}
	}
}

// ─── Phone Input ───
// ─── Phone Input ───
.phone-input-wrap {
	display: flex;
	border: 1px solid rgba(0, 0, 0, 0.15);
	border-radius: 8px;
	overflow: visible;
	position: relative;
	transition:
		border-color 0.15s ease,
		box-shadow 0.15s ease;

	&:focus-within {
		border-color: rgba(0, 0, 0, 0.5);
		box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
	}
}

.flag-picker {
	position: relative;
	flex-shrink: 0;
	border-right: 1px solid rgba(0, 0, 0, 0.1);

	&__trigger {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 0 10px;
		height: 100%;
		background: $gray-100;
		border: none;
		cursor: pointer;
		border-radius: 7px 0 0 7px;
		font-family: inherit;
		min-width: 84px;
		transition: background 0.15s ease;

		&:hover {
			background: $gray-200;
		}
	}

	&__flag {
		width: 22px;
		height: 15px;
		object-fit: cover;
		border-radius: 2px;
		display: block;
		border: 1px solid rgba(0, 0, 0, 0.08);
		flex-shrink: 0;
	}

	&__code {
		font-size: 13px;
		font-weight: 500;
		color: $black;
		white-space: nowrap;
	}

	&__arrow {
		color: $gray-400;
		transition: transform 0.2s ease;
		flex-shrink: 0;

		&--open {
			transform: rotate(180deg);
		}
	}

	&__dropdown {
		position: absolute;
		top: calc(100% + 6px);
		left: 0;
		z-index: 200;
		background: $white;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
		min-width: 220px;
		max-height: 280px;
		overflow-y: auto;
		padding: 4px;

		&::-webkit-scrollbar {
			width: 4px;
		}
		&::-webkit-scrollbar-track {
			background: transparent;
		}
		&::-webkit-scrollbar-thumb {
			background: $gray-200;
			border-radius: 4px;
		}
	}

	&__option {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 9px 12px;
		border-radius: 7px;
		cursor: pointer;
		transition: background 0.1s ease;

		&:hover {
			background: $gray-100;
		}
		&--active {
			background: $gray-100;
		}
	}

	&__option-name {
		flex: 1;
		font-size: 13px;
		color: $black;
	}

	&__option-dial {
		font-size: 12px;
		color: $gray-400;
		font-variant-numeric: tabular-nums;
	}
}

.phone-number {
	border: none !important;
	border-radius: 0 7px 7px 0 !important;
	box-shadow: none !important;
	flex: 1;

	&:focus {
		box-shadow: none !important;
		border-color: transparent !important;
	}
}

// ─── Stats ───
.contact-stats {
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

// ─── Bottom CTA ───
.contact-cta {
	padding: 120px 24px;
	text-align: center;

	@media (max-width: 768px) {
		padding: 72px 20px;
	}

	&__inner {
		max-width: 560px;
		margin: 0 auto;
	}

	&__title {
		font-size: clamp(28px, 4vw, 48px);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.1;
		margin-bottom: 16px;
	}

	&__desc {
		font-size: 16px;
		line-height: 1.7;
		color: #555;
		margin-bottom: 36px;
	}
}

.btn--cta {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	padding: 14px 32px;
	border-radius: 100px;
	background: $black;
	color: $white;
	font-size: 15px;
	font-weight: 500;
	text-decoration: none;
	border: none;
	cursor: pointer;
	transition:
		background 0.2s ease,
		transform 0.15s ease;
	font-family: inherit;

	&:hover {
		background: #222;
		transform: translateY(-1px);
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
	.contact-hero {
		padding: 100px 20px 60px;
		min-height: auto;

		&__title {
			font-size: clamp(32px, 10vw, 52px);
		}

		&__sub {
			font-size: 15px;
		}

		&__badges {
			gap: 8px;
		}

		&__badge {
			font-size: 11px;
			padding: 4px 10px;
		}
	}

	.contact-why {
		padding: 48px 20px;
	}

	.contact-main {
		padding: 48px 20px;
	}

	.contact-left__sticky {
		position: static;
	}

	.contact-offices {
		padding: 48px 20px;
	}

	.contact-stats {
		padding: 60px 20px;
	}

	.contact-cta {
		padding: 80px 20px;
	}

	.form-nav {
		flex-direction: column-reverse;

		.btn {
			width: 100%;
			justify-content: center;
		}
	}

	.form-steps__label {
		display: none;
	}
}
</style>
