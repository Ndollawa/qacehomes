<template>
	<ClientOnly>
		<img
			:src="computedSrc"
			:alt="props.alt"
			v-bind="$attrs"
			:class="cn('w-auto h-10', props.class)"
		/>
	</ClientOnly>
</template>

<script lang="ts" setup>
import type { LogoProps } from "@/app/props/logo.props";
import { cn } from "@/app/utils/cn";

import FullLogoBlue from "@/assets/svgs/full-logo-blue.svg";
import FullLogoWhite from "@/assets/svgs/full-logo-white.svg";
import LogoIconBlue from "@/assets/svgs/logo-icon-blue.svg";
import LogoIconWhite from "@/assets/svgs/logo-icon-white.svg";

const props = withDefaults(defineProps<LogoProps>(), {
	src: "full-logo-blue",
	alt: "QaceHomes",
	loading: "lazy",
});

const computedSrc = computed(() => {
	switch (props.src) {
		case "full-logo-blue":
			return FullLogoBlue;
		case "full-logo-white":
			return FullLogoWhite;
		case "logo-icon-blue":
			return LogoIconBlue;
		case "logo-icon-white":
			return LogoIconWhite;
		default:
			return FullLogoBlue;
	}
});
</script>
