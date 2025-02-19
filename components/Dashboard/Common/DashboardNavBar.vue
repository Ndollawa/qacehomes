<template>
<nav class="w-full h-20 grid grid-cols-1 place-items-center p-3">
<BxSolidBell />
    <div class="flex items-center justify-between justify-self-end w-fit">
         <div class=" h-7 w-7 rounded-full grid grid-cols-1 place-items-center bg-accent-background text-primary relative cursor-pointer"><BsBellFill/></div>
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar>
                <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                <AvatarFallback>NO</AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{

"Ndubuisi Ollaawa"

}}</span>
                <span class="truncate text-xs">{{

"ndollawa@yahoo.com"

}}</span>
            </div>
        </div>
    </div>
</nav>
</template>

<script setup lang="ts">
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from '@/components/ui/avatar'
import { BxSolidBell, BsBellFill } from '@kalimahapps/vue-icons';
</script>

<style scoped>

</style>
