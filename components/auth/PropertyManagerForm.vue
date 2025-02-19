<template>
	<FormField v-slot="{ componentField }" name="company_name">
		<FormContent>
			<FormLabel> Company's Name </FormLabel>
			<FormControl>
				<Input placeholder="Enter company name" v-bind="componentField" />
			</FormControl>
			<FormMessage />
		</FormContent>
	</FormField>

	<FormField v-slot="{ componentField }" name="company_email">
		<FormContent>
			<FormLabel> Company email </FormLabel>
			<FormControl>
				<Input placeholder="Enter company name" v-bind="componentField" />
			</FormControl>
			<FormMessage />
		</FormContent>
	</FormField>
</template>

<script lang="ts" setup>
import type { PropertyManagerFormProps } from '@/app/props/property-manager-form.props';

defineProps<PropertyManagerFormProps>()
</script>
