<template>
	<form @submit="onSubmit" class="w-full max-w-xl">
	   <Card class="px-2 py-6">
			<CardHeader>
				<CardTitle> Create account </CardTitle>
				<CardDescription>
					Fill in your details to create a
					{{ isPropertyManager ? "Property company PMS" : "landlord" }}
					profile
				</CardDescription>
			</CardHeader>

			<CardContent class="space-y-6">
				<!-- Property Manager Only -->
				<PropertyManagerForm v-if="isPropertyManager" />

				<!-- Shared -->
				<FormField
					v-slot="{ componentField, errors }"
					:name="isPropertyManager ? 'full_name' : 'first_name'"
				>
					<FormItem>
						<FormLabel>
							{{ isPropertyManager ? "Full name" : "First name" }}
						</FormLabel>
						<FormControl>
							<Input
								:is-error="errors"
								:placeholder="`Enter ${isPropertyManager ? 'full' : 'first'} name`"
								v-bind="componentField"
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>

				<!-- Landlord Only  -->
				<FormField
					v-if="isLandlord"
					v-slot="{ componentField, errors }"
					name="last_name"
				>
					<FormItem>
						<FormLabel> Last name </FormLabel>
						<FormControl>
							<Input
								:is-error="errors"
								placeholder="Enter last name"
								v-bind="componentField"
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>

				<!-- Shared -->
				<FormField v-slot="{ componentField, errors }" name="email">
					<FormItem>
						<FormLabel> Email </FormLabel>
						<FormControl>
							<Input
								:is-error="errors"
								placeholder="example@domain.com"
								v-bind="componentField"
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>

				<RegisterPasswordField />
			</CardContent>

			<CardFooter class="grid">
				<Button> Register </Button>

				<div
					class="max-w-sm mx-auto mt-8 text-sm text-center [&_a]:text-tertiary [&_a:hover]:underline"
				>
					<p>
						By creating an account, you agree to Qacehome's
						<NuxtLink :to="generateRoute('termsOfService')">
							Terms of Service
						</NuxtLink>
						and
						<NuxtLink :to="generateRoute('privacyPolicy')">
							Privacy Policy </NuxtLink
						>.
					</p>
				</div>
			</CardFooter>
		</Card>
	</form>
</template>

<script setup lang="ts">
import { generateRoute } from "@/app/constants";
import { useRegister } from "@/composables/pages/useRegister";

definePageMeta({
	layout: "auth",
});

const { onSubmit, isPropertyManager, isLandlord } = useRegister();
</script>
