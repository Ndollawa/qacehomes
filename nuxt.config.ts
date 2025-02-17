// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

// Determine the node environment;
const isDevelopment = process.env.NODE_ENV === "development";

export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: isDevelopment },
	modules: [
      "@nuxtjs/tailwindcss", 
      "@nuxtjs/color-mode", 
      "shadcn-nuxt",
      '@pinia/nuxt',
      'pinia-plugin-persistedstate/nuxt',
   ],

	/** Shadcn Required Configs */
	shadcn: {
		prefix: "",
		componentDir: "components/ui",
	},
	colorMode: {
		/** Keep this until themeing available. */
		preference: "light", // Default theme (system, dark, light)
		fallback: "light", // Fallback theme if system preference is not available
		classSuffix: "",
	},

   /** State Management */
   pinia: {
      storesDirs: ["app/store"],
   },
});
