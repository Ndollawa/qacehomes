<template>
	<AuthCard />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import appRoutes, { generatePath } from "@/app/routes/index";


onMounted(() => {
	console.log(generatePath(appRoutes["signIn"]));
})

definePageMeta({
	layout: "auth",
});
</script>

<style scoped></style>
