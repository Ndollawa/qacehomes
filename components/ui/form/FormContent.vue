<template>
	<div
		id="form-content"
		v-bind="$attrs"
		:class="cn('space-y-1.5', props.class)"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import type { FormContentProps } from "@/app/props/form-content.props";
import { cn } from "@/app/utils";

const props = defineProps<FormContentProps>();
</script>
