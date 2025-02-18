<template>
	<div class="container flex justify-center">
		<Card class="w-full max-w-xl py-4 md:px-8">
			<CardHeader class="select-none max-md:text-center">
				<CardTitle> Personalise your experience </CardTitle>
				<CardDescription class="mt-0.5 text-accent-foreground">
					Choose the type of account you want to create.
				</CardDescription>
			</CardHeader>

			<CardContent class="grid gap-6 400:gap-4 400:grid-cols-2 500:gap-6">
				<button
					v-for="item in onboardingConst.accountTypes"
					:key="item.title"
					class="relative"
					@click="handleSelectedAccount(item.accountType)"
				>
					<span
						:class="
							cn(
								'absolute transition-all rounded-full top-6 left-6 size-5 border bg-background',
								{
									'border-[6px] border-tertiary':
										selectedAccount === item.accountType,
								},
							)
						"
					/>

					<AccountTypeCard
						:role="item.accountType"
						:src="item.img"
						:alt="item.title"
						:description="item.description"
						:title="item.title"
						:isSelected="selectedAccount === item.accountType"
					/>
				</button>
			</CardContent>

			<CardFooter class="justify-center mt-6">
				<Button
					class="px-16 max-md:w-full h-fit"
					:disabled="!selectedAccount"
					@click="handleGetStarted"
				>
					Get Started
				</Button>
			</CardFooter>
		</Card>
	</div>
</template>

<script setup lang="ts">
import { cn } from "@/app/utils/cn";
import { useOnboarding } from "@/composables/pages/use-onboarding";

definePageMeta({
	layout: "auth",
});

const {
	onboardingConst,
	selectedAccount,
	handleSelectedAccount,
	handleGetStarted,
} = useOnboarding();
</script>
