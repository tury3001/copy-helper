<script setup>

import { computed } from 'vue';

const props = defineProps({
  copy: String
});

const countParagraphs = computed( () => props.copy.split('.\n').length - 1 );

</script>

<template>
  <span class="text-xl">{{ countParagraphs }}</span>
</template>
