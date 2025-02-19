<template>
  <div v-bind="$attrs" class="flex items-center">
    <!-- Logo SVG -->
    <svg
      :width="width ?? 27"
      :height="height ?? 27"
      viewBox="0 0 28 29"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1884 1.04929C14.0535 0.93429 13.8819 0.871094 13.7045 0.871094C13.5271 0.871094 13.3555 0.93429 13.2207 1.04929L2.53906 10.1796V20.9132C2.53906 21.5038 2.77433 22.0702 3.19312 22.4878C3.61191 22.9055 4.1799 23.1401 4.77215 23.1401H10.7271C10.9245 23.1401 11.1138 23.0619 11.2534 22.9227C11.393 22.7835 11.4714 22.5947 11.4714 22.3978V17.944C11.4714 17.3534 11.7067 16.787 12.1255 16.3693C12.5443 15.9517 13.1123 15.7171 13.7045 15.7171C14.2968 15.7171 14.8648 15.9517 15.2836 16.3693C15.7023 16.787 15.9376 17.3534 15.9376 17.944V22.3978C15.9376 22.5947 16.016 22.7835 16.1556 22.9227C16.2952 23.0619 16.4846 23.1401 16.682 23.1401H22.6369C23.2291 23.1401 23.7971 22.9055 24.2159 22.4878C24.6347 22.0702 24.87 21.5038 24.87 20.9132V10.1796L14.1884 1.04929Z"
        fill="currentColor"
      />
      <path
        d="M0 25.0059H27.3999"
        stroke="#0A9BF4"
        stroke-width="1.87192"
      />
      <path
        d="M2.53906 27.8125H24.87"
        stroke="#F9B223"
        stroke-width="1.87192"
      />
    </svg>
    <!-- Logo Text (only if showFullLogo is true) -->
    <span v-if="showFullLogo" class="ml-2 text-base font-bold">
      {{ "QaceHomes" }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  showFullLogo?: boolean; // Flag to toggle between full and short logo
  width?: string; // Optional width prop for the logo SVG
  height?: string; // Optional height prop for the logo SVG
}

const props = defineProps<Props>();
</script>

<style scoped>
</style>
