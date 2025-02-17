<template>
    <main class="h-screen w-full flex flex-col justify-center items-center bg-primary-light dark:bg-gray-950">
      <div class="relative flex flex-col justify-center items-center">
        <h1 class="text-9xl font-extrabold text-primary-main dark:text-primary-dark-300 tracking-widest text-center">
          {error.statusCode}
        </h1>
        <div class="bg-black text-white absolute text-center font-bold h-6 w-fit  t-10 px-4 text-sm rounded rotate-12">
          {error.message}
        </div>
      </div>
      <p class="text-secondary dark:text-primary-light text-xl md:text-base sm:text-sm xs:text-xs px-2 text-center mt-5">
        {error.message}
      </p>
      <div class="mt-5 grid place-items-center">
        <button
          type="button"
          @click=""
          class="relative dark:text-white outline-none bottom-0 rounded-3xl inline-block bg-primary-main dark:bg-primary-dark-300 text-sm font-medium  text-primary-light group  focus:outline-none"
        >
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative block px-8 py-3  dark:text-white ">
            Go Back
          </span>
        </button>
      </div>
    </main>
</template>

<script setup lang="ts">
defineProps(['error'])
</script>

<style scoped>

</style>