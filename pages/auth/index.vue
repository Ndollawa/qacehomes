<template>
	<div class="container flex justify-center">
		<Card class="w-full max-w-xl py-4 md:px-8">
			<CardHeader class="max-md:text-center">
				<CardTitle> Personalise your experience </CardTitle>
				<CardDescription class="mt-0.5 text-accent-foreground">
					Choose the type of account you want to create.
				</CardDescription>
			</CardHeader>

			<CardContent class="grid grid-cols-2 gap-6">
				<RadioGroup
					v-for="item in onboardingConst.accountTypes"
					:key="item.title"
					class="relative"
				>
					<RadioGroupItem
						:id="item.title"
						:value="item.title.toLowerCase()"
						class="absolute bg-white top-4 left-4"
					/>

					<Label :for="item.title">
						<AccountTypeCard
							:src="item.img"
							:alt="item.title"
							:description="item.description"
							:title="item.title"
						/>
					</Label>
				</RadioGroup>
			</CardContent>

			<CardFooter class="justify-center mt-6">
				<Button class="px-16 max-md:w-full h-fit"> Get Started </Button>
			</CardFooter>
		</Card>
	</div>
</template>

<script setup lang="ts">
import { onboardingConst } from "@/app/constants/onboarding.const";
import PersonalExperienceCard from "@/components/auth/AccountTypeCard.vue";

definePageMeta({
	layout: "auth-layout",
});

// const 
</script>

<style scoped></style>
