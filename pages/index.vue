<script setup lang="ts">
import { useHome } from "@/composables/pages/useHome";

const { msg } = useHome();
</script>

<template>
	<div class="container">{{ msg }}</div>
</template>
