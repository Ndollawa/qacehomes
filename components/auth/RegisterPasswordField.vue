<template>
	<div>
		<!-- Password Input Field -->
		<FormField v-slot="{ componentField, errors }" name="password">
			<FormItem>
				<FormLabel> Password </FormLabel>
				<FormControl>
					<Input
						v-model="password"
						:is-error="errors"
						placeholder="Enter password"
						@input="
							(event: any) => {
								componentField.onChange(event.target.value);
							}
						"
					/>
				</FormControl>
				<FormMessage />
			</FormItem>
		</FormField>

		<!-- Password Strength Indicator -->
		<div class="grid grid-cols-4 gap-4 mt-4 max-w-[70%] md:max-w-[60%]">
			<span
				v-for="(_, i) in 4"
				:key="i"
				:class="
					cn(
						'flex h-2 500:h-2.5 rounded-full transition-all ease-linear duration-100',
						strengthColors[strengthScore],
					)
				"
			/>
		</div>

		<!-- Password Guidelines -->
		<p class="mt-4 text-sm text-muted-foreground">
			Password must be at least 8 characters and contain 1 number, special
			characters, both upper & lowercase letters.
		</p>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { cn } from "@/app/utils";

const password = ref("");
// Define colors for strength levels
const strengthColors = [
	"bg-muted", // No strength (0 rules passed)
	"bg-red-300", // Weak (1 rule passed)
	"bg-orange-400", // Medium (2 rules passed)
	"bg-yellow-400", // Strong (3 rules passed)
	"bg-green-500", // Very Strong (All rules passed)
];

// Compute password strength dynamically (Strict Rules)
const strengthScore = computed(() => {
	let score = 0;

	const hasLowercase = /[a-z]/.test(password.value);
	const hasUppercase = /[A-Z]/.test(password.value);
	const hasNumber = /[0-9]/.test(password.value);
	const hasSpecialChar = /[^a-zA-Z0-9]/.test(password.value);
	const isLongEnough = password.value.length >= 8;

	// Ensure all required rules are considered properly
	if (hasLowercase) score++;
	if (hasUppercase) score++;
	if (hasNumber) score++;
	if (hasSpecialChar) score++;

	// Score shouldn't me max if not long enough
	if (score === 4 && !isLongEnough) score = 3;

	return score;
});

// Debugging Password Changes
watch(password, (newPassword) => {
	console.log("Password Changed: ", newPassword);
	console.log("Strength Score: ", strengthScore.value);
});
</script>
