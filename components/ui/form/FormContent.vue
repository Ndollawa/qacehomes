<template>
	<div id="form-content" v-bind="$attrs">
		<slot />
	</div>
</template>

<script setup lang="ts">
defineOptions({
	inheritAttrs: false,
});
</script>
