<script setup>

import { defineEmits } from 'vue';

const emit = defineEmits(['uppercased']);

const props = defineProps({
  text: String
});

  
function filter () {
  emit('uppercased', props.text.toUpperCase())
}
  
</script>

<template>
  <li class="py-2 px-4 hover:bg-gray-200" @click="filter">Upper case</li>
</template>
