<template>
	<div>
		<FormField v-slot="{ componentField, errors }" name="password">
			<FormItem>
				<FormLabel> Password </FormLabel>
				<FormControl>
					<Input
						:is-error="errors"
						placeholder="Enter password"
						v-bind="componentField"
					/>
				</FormControl>
				<FormMessage />
			</FormItem>
		</FormField>

		<div class="grid grid-cols-4 gap-4 mt-4 max-w-[70%] md:max-w-[60%]">
			<span
				v-for="i in 4"
				:key="i"
				:class="cn('flex h-2 500:h-2.5 rounded-full bg-muted')"
			/>
		</div>

		<p class="mt-4 text-sm text-muted-foreground">
			Password must be at least 8 characters and contain 1 number, special
			characters, both upper & lowercase letters.
		</p>
	</div>
</template>

<script setup lang="ts">
import { cn } from "@/app/utils";
</script>
