<template>
	<AuthCard/>
	{{ }}
</template>

<script setup lang="ts">
import appRoutes, { generatePath } from '@/app/routes';
alert( generatePath(appRoutes["signIn"]))
definePageMeta({
	layout: "auth",
});
</script>

<style scoped></style>
