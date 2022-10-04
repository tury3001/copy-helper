<script setup>

import { ref, onMounted } from 'vue';

const props = defineProps({
  baseTitle: String
});

const title = ref('New copy');

onMounted(() => {
  changeTitle();
});
    
function changeTitle() {
  document.title = props.baseTitle + ' | ' + title.value ;
}    
  
</script>

<template>
  <label for="title">Title</label>
  <input
    type="text"
    name="title"
    id="title"
    v-model="title"
    class="rounded ml-2 w-96 px-2"
    @input="changeTitle"
  >
</template>