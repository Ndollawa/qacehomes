<template>
	<Card class="w-full max-w-xl py-4 md:px-4">
		<CardHeader>
			<CardTitle> Create account </CardTitle>
			<CardDescription>
				Fill in your details to create a Property company PMS profile
			</CardDescription>

			<CardContent> </CardContent>
		</CardHeader>
	</Card>
</template>

<script setup lang="ts">
import { useRegister } from "@/composables/pages/use-register";

definePageMeta({
	layout: "auth",
});

const {form, accountType } = useRegister();
</script>
