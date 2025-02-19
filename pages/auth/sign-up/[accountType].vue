<template>
	<div>Home</div>
</template>

<script setup lang="ts">
import { useRegister } from '@/composables/pages/useSignUp';

definePageMeta({
   layout: "auth"
})

const {} = useSignUp()
</script>
