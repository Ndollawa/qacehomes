<template>
	<Card>
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
import type { AccountTypeCardProps } from "@/app/props/account-type.props";
import { cn } from "@/app/utils/cn";

const props = defineProps<AccountTypeCardProps>();
</script>
