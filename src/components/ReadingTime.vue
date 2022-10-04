<script setup>

import { ref, computed } from 'vue';

const props = defineProps({
  copy: String
});

const wpm = ref(275);
    
const readingTime = computed( () => {
  let countWords;
  let displayOutput;

  countWords = props.copy.trim().split(' ').length;

  if (props.copy.length == 0)
    displayOutput = "0 s.";
  else {

    let totalSeconds = countWords / wpm.value * 60;

    if (totalSeconds < 60) {
      displayOutput = Math.ceil(totalSeconds) + ' s.';
    } else {
      let displayMinutes = Math.trunc(totalSeconds / 60);
      let displaySeconds = Math.trunc(totalSeconds % 60);
      displayOutput = displayMinutes + ":" + displaySeconds + ' m.';
    }
  }

  return displayOutput;

});
  
</script>

<template>
  <span class="text-xl">{{ readingTime }}</span>
</template>
