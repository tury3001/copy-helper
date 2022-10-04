<script setup>

import { defineEmits } from 'vue';

const emit = defineEmits(['wordcased']);

const props = defineProps({
  text: String
});
  
function filter () {
  let words = props.text.split(' ');

  words.forEach(function(element, index, words) {
    words[index] = element.charAt(0).toUpperCase() + words[index].substr(1, words[index].length)
  })

  emit('wordcased', words.join(' '));
}

</script>

<template>
  <li class="py-2 px-4 hover:bg-gray-200" @click="filter">Word case</li>
</template>
