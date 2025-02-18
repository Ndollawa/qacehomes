<template>
	<section class="relative grid min-h-screen">
		<div
			class="z-10 flex flex-col max-w-2xl mx-auto mt-20 text-center md:mt-36"
		>
			<img
				:src="NotFoundErrorIcon"
				:alt="String(props.error.statusCode)"
				class="mx-auto size-44"
			/>

			<div class="mt-4">
				<h3 class="text-4xl font-medium leading-tight">
					{{props.error.statusCode}} {{ props.error.message }}
				</h3>

				<p class="leading-loose text-balance text-muted-foreground">
					{{ props.error.description }}
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

const props = defineProps<ErrorProps>();

console.log(props.error.description);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
