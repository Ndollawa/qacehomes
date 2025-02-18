<template>
	<div class="relative flex flex-col min-h-screen pb-16 bg-primary">
		<AuthNavbar />
	
      <div class="relative z-10 md:mt-20">
         <slot />
      </div>

		<img
			:src="BuildingLine"
			class="absolute bottom-0 left-0 object-center object-cover w-full max-h-[600px]"
		/>
	</div>
</template>

<script setup lang="ts">
import BuildingLine from "@/assets/svgs/building-line.svg";

</script>
