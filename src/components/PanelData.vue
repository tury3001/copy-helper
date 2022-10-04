<script setup>

const props = defineProps({
  label: String,
  icon: String
});

</script>

<template>
  <div class="border flex flex-row justify-between p-2 mt-1">
      <h2 class="uppercase text-sm mt-1">
        <i :class="props.icon"></i>
        <span class="ml-2">{{ props.label }}</span>
      </h2>
      <slot></slot>
  </div>
</template>
