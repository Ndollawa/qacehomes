// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  alias: {
    // "@app/*": path.resolve(__dirname, "*"),
    // "@components/*": path.resolve(__dirname, "components/*"),
    // "@layouts/*": path.resolve(__dirname, "layouts/*"),
    // "@uploads/*": path.resolve(__dirname, "pages/uploads/*"),
    // "@auth/*": path.resolve(__dirname, "pages/auth/*"),
    // "@dashboard/*": path.resolve(__dirname, "pages/dashboard/*"),
    // "@landing/*": path.resolve(__dirname, "pages/landing/*"),
    // "@errorPages/*": path.resolve(__dirname, "pages/errorPages/*"),
    // "@assets/*": path.resolve(__dirname, "assets/*"),
    // "@public/*": path.resolve(__dirname, "public/*"),
    // "@utils/*": path.resolve(__dirname, "app/utils/*"),
    // "@routes/*": path.resolve(__dirname, "app/routes/*"),
    // "@helpers/*": path.resolve(__dirname, "app/helpers/*"),
    // "@images/*": path.resolve(__dirname, "app/images/*"),
    // "@configs/*": path.resolve(__dirname, "app/configs/*"),
    // "@constants/*": path.resolve(__dirname, "app/constants/*"),
    // "@enums/*": path.resolve(__dirname, "app/enums/*"),
    // "@props/*": path.resolve(__dirname, "app/props/*"),
    // "@interfaces/*": path.resolve(__dirname, "app/interfaces/*"),
    // "@types/*": path.resolve(__dirname, "app/types/*"),
    // "@api/*": path.resolve(__dirname, "app/api/*"),
    // "@store/*": path.resolve(__dirname, "app/store/*"),
    // Add more aliases as needed
  },
});
