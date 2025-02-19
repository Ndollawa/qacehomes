<template>
	<FormField v-slot="{ componentField, errors }" name="company_name">
		<FormItem>
			<FormLabel> Company's Name </FormLabel>
			<FormControl>
				<Input
					:is-error="errors"
					placeholder="Enter company name"
					v-bind="componentField"
				/>
			</FormControl>
			<FormMessage />
		</FormItem>
	</FormField>

	<FormField v-slot="{ componentField, errors }" name="company_email">
		<FormItem>
			<FormLabel> Company email </FormLabel>
			<FormControl>
				<Input
					:is-error="errors"
					placeholder="Enter company name"
					v-bind="componentField"
				/>
			</FormControl>
			<FormMessage />
		</FormItem>
	</FormField>

	<FormField v-slot="{ componentField, errors }" name="company_size">
		<FormItem>
			<FormLabel> Company Size </FormLabel>

			<Select v-bind="componentField">
				<FormControl>
					<SelectTrigger :is-error="errors">
						<SelectValue placeholder="0-00" />
					</SelectTrigger>

					<SelectContent>
						<SelectItem
							v-for="item in registerConst.companySize"
							:key="item"
							:value="item"
						>
							{{ item }}
						</SelectItem>
					</SelectContent>
				</FormControl>
			</Select>
			<FormMessage />
		</FormItem>
	</FormField>

	<div
		class="mt-3 space-y-2 text-xs font-medium tracking-wide text-primary"
	>
		<small> CONTACT PERSON DETAILS </small>

		<Separator />
	</div>
</template>

<script lang="ts" setup>
import type { PropertyManagerFormProps } from "@/app/props/property-manager-form.props";
import { registerConst } from "@/app/constants";

defineProps<PropertyManagerFormProps>();
</script>
