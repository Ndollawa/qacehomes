<template>
<nav class="w-full h-16 grid grid-cols-1 place-items-center">
    
   <div class="flex justify-self-end w-fit p-3">
    <div class=""></div>
    <Avatar>
    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
   </div>
</nav>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

</script>

<style scoped>

</style>
