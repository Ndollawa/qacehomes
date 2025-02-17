<template>
	<div class="min-h-screen max-md:bg-primary">
		<Navbar />
		<slot />
	</div>
</template>

<script setup lang="ts">
import Navbar from "@/components/auth/Navbar.vue";
</script>
