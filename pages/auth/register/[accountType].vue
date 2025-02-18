<template>
	<div>Home</div>
</template>

<script setup lang="ts">
import { useRegister } from '@/composables/pages/use-register';

definePageMeta({
   layout: "auth-layout"
})

const {} = useRegister()
</script>
