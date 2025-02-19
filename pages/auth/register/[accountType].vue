<template>
	<form @submit="onSubmit" class="w-full max-w-xl">
		<Card class="px-2 py-6">
			<CardHeader>
				<CardTitle> Create account </CardTitle>
				<CardDescription>
					Fill in your details to create a Property company PMS profile
				</CardDescription>
			</CardHeader>

			<CardContent class="space-y-6">
				<!-- Property Manager Only -->
				<PropertyManagerForm v-if="isPropertyManager" />
				<div
					v-if="isPropertyManager"
					class="mt-3 space-y-2 text-xs font-medium tracking-wide text-primary"
				>
					<small> CONTACT PERSON DETAILS </small>

					<Separator />
				</div>

				<!-- Shared -->
				<FormField
					v-slot="{ componentField }"
					:name="isPropertyManager ? 'full_name' : 'first_name'"
				>
					<FormItem>
						<FormLabel>
							{{ isPropertyManager ? "Full name" : "First name" }}
						</FormLabel>
						<FormControl>
							<Input
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
					v-slot="{ componentField }"
					name="last_name"
				>
					<FormItem>
						<FormLabel> Last name </FormLabel>
						<FormControl>
							<Input
								placeholder="Enter last name"
								v-bind="componentField"
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>

				<!-- Shared -->
				<FormField v-slot="{ componentField }" name="email">
					<FormItem>
						<FormLabel> Email </FormLabel>
						<FormControl>
							<Input
								placeholder="example@domain.com"
								v-bind="componentField"
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>

				<FormField v-slot="{ componentField }" name="password">
					<FormItem>
						<FormLabel> Password </FormLabel>
						<FormControl>
							<Input
								placeholder="Enter password"
								v-bind="componentField"
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>
			</CardContent>
		</Card>
	</form>
</template>

<script setup lang="ts">
import { useRegister } from "@/composables/pages/useRegister";

definePageMeta({
	layout: "auth",
});

const { form, onSubmit, accountType, isPropertyManager, isLandlord } =
	useRegister();
</script>
