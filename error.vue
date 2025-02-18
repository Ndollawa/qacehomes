<template>
	<main
		class="h-screen w-full flex flex-col justify-center items-center bg-primary"
	>
		<div class="relative flex flex-col justify-center items-center">
			<h1
				class="text-9xl font-extrabold dark:text-dark text-white tracking-widest text-center"
			>
				{{ error.statusCode }}
			</h1>
			<div
				class="dark:bg-white dark:text-dark bg-black text-white absolute text-center font-bold h-fit w-fit t-10 p-3 text-sm rounded rotate-12"
			>
				{{ error.message }}
			</div>
		</div>
		<p
			class="dark:text-dark text-white text-xl md:text-base sm:text-sm xs:text-xs px-2 text-center mt-5"
		>
			{{ error.description }}
		</p>
		<div class="mt-5 grid place-items-center">
			<button
				type="button"
				@click="handleClearError"
				class="relative dark:text-white outline-none bottom-0 rounded-3xl inline-block dark:bg-primary-primary bg-white text-sm font-medium text-primary-light group focus:outline-none"
			>
				<span
					class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0"
				></span>

				<span class="relative block px-8 py-3 text-primary">
					Go to Home
				</span>
			</button>
		</div>
	</main>
</template>

<script setup lang="ts">
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
