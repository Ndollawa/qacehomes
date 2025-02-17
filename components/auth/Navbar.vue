<template>
	<header class="max-md:bg-primary bg-background md:top-0 md:sticky">
		<nav
			class="container flex items-center justify-center px-6 pt-10 pb-6 md:py-0 md:h-16 md:justify-between"
		>
			<Logo 
            :src="isMobile ? 'full-logo-white' : 'full-logo-blue'" 
            alt="Qace Homes Logo" 
            class="max-md:h-8"
         />

			<div class="flex items-center gap-4 max-md:hidden">
				<p>Already have an account?</p>
				<Button variant="secondary" class="px-8"> Sign in </Button>
			</div>
		</nav>
	</header>
</template>

<script lang="ts" setup>
import { useMediaQuery } from "@vueuse/core";
import Logo from "../shared/Logo.vue";

const isMobile = useMediaQuery("(max-width: 768px)");
</script>
