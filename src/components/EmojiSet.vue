<script setup>

import { ref, onMounted, defineEmits } from 'vue';
import emojijson from '@/assets/emojis.json';

const emit = defineEmits(['insertEmoji']);

const props = defineProps({
  type: String
});

const emojis = ref(null);
const json = ref(JSON.parse(JSON.stringify(emojijson)));

onMounted( () => {
  switch (props.type) {
      case 'emoticons':
        emojis.value = json.value.emoticons;
        break;

      case 'body':
        emojis.value = json.value.body;
        break;

      case 'flags':
        emojis.value = json.value.flags;
        break;

      case 'food':
        emojis.value = json.value.food;
        break;

      case 'activity':
        emojis.value = json.value.activity;
        break;

      case 'animals':
        emojis.value = json.value.animals;
        break;

      case 'objects':
        emojis.value = json.value.objects;
        break;
    }
});

function addEmoji( emoji ) {
  emit('insertEmoji', { emoji: emoji });
}

</script>

<template>
  <div class="mt-5 mb-2">
    <ul class="grid grid-cols-8 gap-0 text-xl">
      <li v-for="emoji in emojis" :key="emoji.id">
        <a href="#" @click="addEmoji(emoji.emoji)">
          {{ emoji.emoji }}
        </a>
      </li>
    </ul>
  </div>
</template>
