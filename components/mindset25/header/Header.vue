<template>
	<header class="header">
		<div class="logo">
			<NuxtLink :to="localePath('mindset25')">
				<img :src="mindsetIconWhite" alt="Card Back">
				<img :src="mindsetIcon" class="img-top" alt="Card Front">
			</NuxtLink >
		</div>

		<div class="responsive-menu-opener show-responsive-992">
			<span>
				<template v-if="isBurger === true">
					<span class="icon-xmark-solid" @click="toggleBurger(false)"></span>
				</template>
				<template v-else-if="isBurger === false">
					<span class="icon-bars-solid-2" @click="toggleBurger(true)"></span>
				</template>
				<i class="fa fa-bars"></i>
			</span>
		</div>

		<ul class="header-menu clearfix" :class="isBurger === false && 'hide-responsive-992'">
			<li class="contact-switch" @click="$emit('toggleContact')">Contact</li>
			<li><NuxtLink :to="localePath('/mindset25#event-section')">{{ t("joinUsTitle") }}</NuxtLink></li>
			<li><NuxtLink to="https://www.start.gg/tournament/mindset-2024/details" class="signup" target="_blank">{{ t("inscription") }}</NuxtLink></li>
			<li><NuxtLink :to="localePath('/mindset25#schedule')">Line Up</NuxtLink></li>
			<li><NuxtLink :to="localePath('/mindset25#event-section')">Présentation</NuxtLink></li>
			<li><NuxtLink to="https://discord.gg/d2jgxxyZg3" target="_blank" class="discord">{{ t("joinDiscord") }} <span class="icon-discord-1"></span></NuxtLink></li>
		</ul>
		<div class="langBtn">
			<NuxtLink :to="$switchLocalePath('en')">EN</NuxtLink>
			<NuxtLink :to="$switchLocalePath('fr')">FR</NuxtLink>
		</div>
	</header>
</template>
<script setup lang="ts">

import mindsetIcon from '~/public/img/mindset-icon-3.webp'
import mindsetIconWhite from '~/public/img/mindset-icon-white.webp'
import { ref } from 'vue'

import { useI18n, useLocalePath } from '#imports'
const localePath = useLocalePath()

const isBurger = ref(false)
const toggleBurger = (toggleValue: boolean) => {
    isBurger.value = toggleValue;
};
const { t } = useI18n()
</script>
<style>
@import "./style.scss";
</style>
