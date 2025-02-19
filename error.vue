<template>
	<section class="relative grid min-h-screen">
		<div
			class="z-10 flex flex-col max-w-2xl mx-auto mt-20 text-center md:mt-36"
		>
			<img
				:src="NotFoundErrorIcon"
				:alt="String(error.statusCode)"
				class="mx-auto size-44"
			/>

			<div class="mt-4">
				<h3 class="text-4xl font-medium leading-tight">
					{{ error.statusCode }} {{ error.message }}
				</h3>

				<p class="leading-loose text-balance text-muted-foreground">
					{{ error.description }}
				</p>
			</div>

			<Button
				class="mx-auto mt-6 w-fit [&>svg]:size-4"
				@click="handleClearError"
			>
				<ChevronLeft /> Go back
			</Button>
		</div>

		<img
			:src="BuildingLineIcon"
			class="absolute bottom-0 left-0 w-full object-cover object-center max-h-[500px]"
		/>
	</section>
</template>

<script setup lang="ts">
import NotFoundErrorIcon from "@/assets/svgs/not-found-error.svg";
import BuildingLineIcon from "@/assets/svgs/building-line.svg";
import type { ErrorProps } from "./app/props/error.props";
import { ChevronLeft } from "lucide-vue-next";
import { errorCodes } from "./app/constants";
import { AppConfig } from "./app/config/app.config";

const props = defineProps<ErrorProps>();
const error = ref(props.error);

useHead({
   title: `${error.value.message.split(":")[0]} - ${AppConfig.companyName}`,
})

// Override error with a custom error message if found
onMounted(() => {
	const foundError = Object.values(errorCodes).find(
		(err) => err.statusCode === error.value.statusCode,
	);

	if (foundError) {
		error.value = foundError;
	}
});

const handleClearError = () => clearError({ redirect: "/" });

console.error("Error: ", error)
</script>
