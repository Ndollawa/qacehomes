<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/app/utils/cn.utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
	<h3
		:class="
			cn('text-xl md:text-2xl font-semibold leading-none tracking-tight', props.class)
		"
	>
		<slot />
	</h3>
</template>
