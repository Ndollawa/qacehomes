<template>
	<NuxtLayout class="flex flex-col min-h-screen">
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
import LogoIconBlue  from "@/assets/svgs/logo-icon-blue.svg"
useHead({
	titleTemplate: (title) => (title ? `QaceHomes | ${title}` : "QaceHomes"),
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: LogoIconBlue,
		},
		{
			rel: "apple-touch-icon",
			href: LogoIconBlue, 
			sizes: "180x180",
		},
	],
	meta: [
		// ✅ Standard SEO
		{ name: "author", content: "QaceHomes Team" },
		{
			name: "description",
			content:
				"The best real estate marketplace to buy, sell, and rent properties.",
		},
		{
			name: "keywords",
			content: "real estate, rent, buy, sell, property, QaceHomes",
		},
		{ name: "robots", content: "index, follow" },

		// ✅ Open Graph / Facebook
		{ property: "og:type", content: "website" },
		{
			property: "og:title",
			content: "QaceHomes - Buy, Sell, Rent Properties",
		},
		{
			property: "og:description",
			content:
				"Find the best properties to buy, sell, or rent on QaceHomes.",
		},
		{ property: "og:image", content: "/og-image.jpg" }, // Social Media Preview Image
		{ property: "og:url", content: "https://qacehomes.com" },

		// ✅ Twitter Card
		{ name: "twitter:card", content: "summary_large_image" },
		{
			name: "twitter:title",
			content: "QaceHomes - Buy, Sell, Rent Properties",
		},
		{
			name: "twitter:description",
			content:
				"Find the best properties to buy, sell, or rent on QaceHomes.",
		},
		{ name: "twitter:image", content: "/twitter-image.jpg" }, // Twitter preview image
		{ name: "twitter:site", content: "@qacehomes" },

		// ✅ Mobile Compatibility
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
	],
});
</script>
