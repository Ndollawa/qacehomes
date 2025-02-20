<template>
	<div class="flex flex-col flex-1 gap-4 p-4 pt-10">
		<div class="grid gap-4 auto-rows-min md:grid-cols-3">
			<div class="aspect-video rounded-xl bg-muted/50" />
			<div class="aspect-video rounded-xl bg-muted/50" />
			<div class="aspect-video rounded-xl bg-muted/50" />
		</div>
		<div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
});
</script>

<style scoped></style>
