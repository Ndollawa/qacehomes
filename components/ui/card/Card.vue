<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/app/utils/cn";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
	<div
      id="card"
		:class="
			cn(
				'rounded-lg border bg-card text-card-foreground shadow-sm',
				props.class,
			)
		"
	>
		<slot />
	</div>
</template>
