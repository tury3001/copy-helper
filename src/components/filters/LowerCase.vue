<script setup>

import { defineEmits } from 'vue';

const emit = defineEmits(['lowercased']);

const props = defineProps({
  text: String
});

function filter () {
  emit('lowercased', props.text.toLowerCase());
}

</script>

<template>
  <li class="py-2 px-4 hover:bg-gray-200" @click="filter">Lower case</li>
</template>
