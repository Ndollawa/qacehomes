<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/app/utils/cn";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
	defaultValue?: string | number;
	modelValue?: string | number;
	class?: HTMLAttributes["class"];
	isError?: boolean | string | any[];
}>();

const emits = defineEmits<{
	(e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
	passive: true,
	defaultValue: props.defaultValue,
});

const error = computed(() =>
	Array.isArray(props.isError) ? props.isError.length > 0 : props.isError,
);
</script>

<template>
	<input
		v-model="modelValue"
		:class="
			cn(
				'flex h-12 w-full rounded-xxs border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
				error && 'border-2 border-destructive',
				props.class,
			)
		"
	/>
</template>
