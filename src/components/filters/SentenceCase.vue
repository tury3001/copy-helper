<script setup>
  
import { defineEmits } from 'vue';

const emit = defineEmits(['sentencecased']);

const props = defineProps({
  text: String
});
  
function filter() {
  let sentences = props.text.split('. ')
  sentences.forEach(function(sentence, i, sentences) {
    sentences[i] = sentence.trim().charAt(0).toUpperCase() + sentences[i].trim().substr(1, sentence.length)
  })

  emit('sentencecased', sentences.join('. '))
}
    
</script>

<template>
  <li class="py-2 px-4 hover:bg-gray-200" @click="filter">Sentence case</li>
</template>

