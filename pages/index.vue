<script setup lang="ts">
import { useHome } from "@/composables/pages/use-home";

const { msg } = useHome();
</script>

<template>
	<div class="container">{{ msg }}</div>
</template>
