<template>
    <fwb-card class="w-11/12 md:w-9/12 xl:w-5/12 m-auto pb-10 sm:pb-5 shadow-md">
                <div class="p-5">
                    <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise .
                    </p>
                </div>
                <slot/>
            </fwb-card>
</template>

<script setup lang="ts">
import {
    FwbCard
} from 'flowbite-vue'

</script>

<style scoped>

</style>