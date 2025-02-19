import { ref, watch, onMounted } from "vue";

// Helper function to get the initial local storage value
const getLocalValue = (key: string, initValue: any) => {
	// SSR check (e.g., in Nuxt.js)
	if (typeof window === "undefined") return initValue;

	// Check if value already exists in localStorage
	const localValue = JSON.parse(localStorage.getItem(key as string)!);
	if (localValue !== null) return localValue;

	// If initValue is a function, return its result
	if (initValue instanceof Function) return initValue();

	return initValue;
};

// useLocalStorage composable function
export function useLocalStorage(key: string, initValue: any) {
	const value = ref(getLocalValue(key, initValue));

	// Sync value with localStorage on value change
	watch(
		value,
		(newValue) => {
			localStorage.setItem(key, JSON.stringify(newValue));
		},
		{ immediate: true }, // This ensures that the watcher runs immediately
	);

	return { value };
}
