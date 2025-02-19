<template>
<header class="z-30 max-md:bg-primary bg-background md:top-0 md:sticky">
    <nav class="container flex items-center justify-center px-6 pt-10 pb-6 md:py-0 md:h-20 md:justify-between">
        <Logo :showFullLogo="true" :class="[
    'max-md:h-8',
    { 'text-white': isMobile, 'text-primary': !isMobile }
  ]" />

        <div class="flex items-center gap-4 max-md:hidden">
            <p>Already have an account?</p>
            <Button variant="secondary"> Sign in </Button>
        </div>
    </nav>
</header>
</template>

<script lang="ts">
import {
    cn
} from "@/app/utils/cn.utils";
import {
    useMediaQuery
} from "@vueuse/core";
import Logo from "../shared/Logo.vue";

const isMobile = useMediaQuery("(max-width: 768px)");
</script>
