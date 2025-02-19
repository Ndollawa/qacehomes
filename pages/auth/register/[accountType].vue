<template>
	<form @submit="onSubmit" class="w-full max-w-xl py-4">
		<Card>
			<CardHeader>
				<CardTitle> Create account </CardTitle>
				<CardDescription>
					Fill in your details to create a Property company PMS profile
				</CardDescription>
			</CardHeader>

			<CardContent class="space-y-6">
				<PropertyManagerForm 
               v-if="isPropertyManager" 
               :form="form"
            />
			</CardContent>
		</Card>
	</form>
</template>

<script setup lang="ts">
import { useRegister } from "@/composables/pages/useRegister";

definePageMeta({
	layout: "auth",
});

const {
	form,
	onSubmit,
	accountType,
	validationSchema,
	isPropertyManager,
	isLandlord,
} = useRegister();
</script>
