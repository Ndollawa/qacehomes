<template>
	<Card class="h-full">
		<CardContent class="p-4 400:p-2 500:p-4 400:text-start">
			<img :src="props.src" :alt="props.alt" class="size-full" />

			<CardTitle class="mt-3 !text-md font-medium leading-loose 400:mt-4 400:leading-normal">
				{{ props.title }}
			</CardTitle>

			<CardDescription>
				{{ props.description }}
			</CardDescription>
		</CardContent>
	</Card>
</template>

<script lang="ts" setup>
import type { AccountTypeCardProps } from "@/app/props/account-type-card.props";

const props = defineProps<AccountTypeCardProps>();
</script>
