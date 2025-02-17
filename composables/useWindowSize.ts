import { ref, onMounted, onUnmounted } from "vue";

interface WindowSizeI {
width: number | undefined;
height: number | undefined;
}
export function useWindowSize() {
  const windowSize = ref<WindowSizeI>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    windowSize.value = {
      width: window?.innerWidth,
      height: window?.innerHeight,
    };
  };

  onMounted(() => {
    // Set initial size
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    // Clean up the event listener when the component is destroyed
    window.removeEventListener("resize", handleResize);
  });

  return windowSize;
}
