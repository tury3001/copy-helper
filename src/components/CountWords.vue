<script setup>

import { computed } from 'vue';

const props = defineProps({
  copy: String
});    
    
const countWords = computed( () => {
  if (props.copy.length === 0)
    return 0;

  return props.copy.trim()
                   .split(' ')
                   .filter(word => word !== '')
                   .length;
})
    
  
</script>

<template>
    <span class="text-xl">{{ countWords }}</span>
</template>
