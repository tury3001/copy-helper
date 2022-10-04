<script setup>

import { defineEmits } from 'vue';

const emit = defineEmits();

const props = defineProps({
  icon: String,
  label: String,
  eventName: String
});
  
</script>
<template>
  <button class="border rounded px-3 py-1 bg-gray-100 text-sm" @click="emit(props.eventName)">
    <i :class="props.icon"></i>
    <span class="ml-2 {{ props.label }}">{{ props.label }}</span>
  </button>
</template>
