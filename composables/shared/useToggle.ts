import { ref } from "vue";
import { useLocalStorage } from "./useLocalStorage";

export function useToggle(key: string, initValue: any) {
	// Use local storage composable
	const { value: storedValue } = useLocalStorage(key, initValue);
	const value = ref(storedValue.value); // Reactive value based on local storage

	const toggle = (newValue: any) => {
		if (typeof newValue === "boolean") {
			value.value = newValue;
		} else {
			value.value = !value.value;
		}
		// Sync the new value with localStorage
		storedValue.value = value.value;
	};

	return { value, toggle };
}
