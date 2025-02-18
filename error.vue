<template>
	<section class="relative flex flex-col items-center justify-center min-h-screen">
		<img 
         :src="NotFoundErrorIcon" 
         :alt="String(props.error.statusCode)" 
      />

      <h3 class="">
         {{ props.error.message }}
      </h3>

      <p>
         {{ props.error.description }}
      </p>
	</section>

	<!-- <main
		class="flex flex-col items-center justify-center w-full h-screen bg-qacehomes-blue"
	>
		<div class="relative flex flex-col items-center justify-center">
			<h1
			g	class="font-extrabold tracking-widest text-center text-white text-9xl dark:text-dark"
			>
				{{ error.statusCode }}
			</h1>
			<div
				class="absolute h-6 px-4 text-sm font-bold text-center text-white bg-black rounded dark:bg-white dark:text-dark w-fit t-10 rotate-12"
			>
				{{ error.message }}
			</div>g
		</div>
		<p
			class="px-2 mt-5 text-xl text-center text-white dark:text-dark md:text-base sm:text-sm xs:text-xs"
		>
			{{ error.message }}
		</p>
		<div class="grid mt-5 place-items-center">
			<button
				type="button"
				@click="handleClearError"
				class="relative bottom-0 inline-block text-sm font-medium bg-white outline-none dark:text-white rounded-3xl dark:bg-qacehomes-blue-primary text-primary-light group focus:outline-none"
			>
				<span
					class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0"
				></span>

				<span class="relative block px-8 py-3 text-qacehomes-blue">
					Go to Home
				</span>
			</button>
		</div>
	</main> -->
</template>

<script setup lang="ts">
import NotFoundErrorIcon from "@/assets/svgs/not-found-error.svg";
import type { ErrorProps } from "./app/props/error.props";

const props = defineProps<ErrorProps>();

console.log(props.error.description)

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
