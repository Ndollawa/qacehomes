<template>
	<Card class="h-full">
		<CardContent class="p-4">
			<img :src="props.src" :alt="props.alt" class="size-full" />

			<CardTitle class="mt-4 !text-md font-medium">
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
