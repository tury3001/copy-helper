<script setup>

import { computed } from 'vue';

const props = defineProps({
  copy: String
});

const countChars = computed(() => props.copy.length);

</script>

<template>
  <span class="text-xl">{{ countChars }}</span>
</template>
