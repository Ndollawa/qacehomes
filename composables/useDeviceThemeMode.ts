import { ref, onMounted, onUnmounted } from "vue";

export const ThemeMode = {
  Light: "light",
  Dark: "dark",
};

export function useDeviceThemeMode() {
  const themeMode = ref(ThemeMode.Light);

  const handleThemeChange = (event: MediaQueryListEvent) => {
    themeMode.value = event.matches ? ThemeMode.Dark : ThemeMode.Light;
  };

  onMounted(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial theme mode based on the current media query
    themeMode.value = mediaQuery.matches ? ThemeMode.Dark : ThemeMode.Light;

    // Listen for changes in the preferred color scheme
    mediaQuery.addEventListener("change", handleThemeChange);

    // Cleanup event listener on unmount
    onUnmounted(() => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    });
  });

  return { themeMode };
}
