<template>
	<Card :class="cn('h-full', props.class)">
		<CardContent class="p-4 400:p-2 500:p-4 400:text-start">
			<span class="rounded-[10px] bg-muted size-full overflow-hidden">
				<img
					:src="props.src"
					:alt="props.alt"
					class="size-full max-400:max-h-36"
				/>
			</span>

			<CardTitle
				class="mt-3 !text-md font-medium leading-loose 400:mt-4 400:leading-normal"
			>
				{{ props.title }}
			</CardTitle>

			<CardDescription>
				{{ props.description }}
			</CardDescription>
		</CardContent>
	</Card>
</template>

<script lang="ts" setup>
import type { AccountTypeCardProps } from "@/app/props";
import { cn } from "@/app/utils";

const props = defineProps<AccountTypeCardProps>();
</script>
