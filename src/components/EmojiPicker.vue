<script setup>

import { ref, defineEmits } from 'vue';
import EmojiSet from '@/components/EmojiSet.vue';

const emit = defineEmits(['addEmoji']);

const currentSelection = ref(1);

function addEmoji( emoji ) {
  emit('addEmoji', emoji.emoji);
}

</script>

<template>
  <div class="border rounded p-2">
    <span class="block w-full mb-2 border-b pb-2">Emojis</span>
    <ul class="mt-2 flex flex-row border-b pb-2">
      <li class="ml-2">
        <a href=""
           @click.prevent="currentSelection = 1"
           :class="{ 'border-b-2 border-red-700 pb-1' : currentSelection === 1 }"
        >😀
        </a>
      </li>
      <li class="ml-2">
        <a href=""
           @click.prevent="currentSelection = 2"
           :class="{ 'border-b-2 border-red-700 pb-1' : currentSelection === 2 }"
        >️🖐
        </a>
      </li>
      <li class="ml-2">
        <a href=""
           @click.prevent="currentSelection = 3"
           :class="{ 'border-b-2 border-red-700 pb-1' : currentSelection === 3 }"
        >🚩
        </a>
      </li>
      <li class="ml-2">
        <a
          href=""
          @click.prevent="currentSelection = 4"
          :class="{ 'border-b-2 border-red-700 pb-1' : currentSelection === 4 }"
        >🍏
        </a>
      </li>
      <li class="ml-2">
        <a href=""
           @click.prevent="currentSelection = 5"
           :class="{ 'border-b-2 border-red-700 pb-1' : currentSelection === 5 }"
        >⚽
        </a>
      </li>
      <li class="ml-2">
        <a href=""
           @click.prevent="currentSelection = 6"
           :class="{ 'border-b-2 border-red-700 pb-1' : currentSelection === 6 }"
        >🐶
        </a>
      </li>
      <li class="ml-2">
        <a href=""
           @click.prevent="currentSelection = 7"
           :class="{ 'border-b-2 border-red-700 pb-1' : currentSelection === 7 }"
        >📺
        </a>
      </li>
    </ul>
    <emoji-set
      title="Emoticons"
      type="emoticons"
      @insertEmoji="addEmoji"
      v-if="currentSelection === 1"
    >
    </emoji-set>
    <emoji-set
      title="Body"
      type="body"
      @insertEmoji="addEmoji"
      v-if="currentSelection === 2"
    >
    </emoji-set>
    <emoji-set
      title="Flags"
      type="flags"
      @insertEmoji="addEmoji"
      v-if="currentSelection === 3"
    >
    </emoji-set>
    <emoji-set
      title="Food"
      type="food"
      @insertEmoji="addEmoji"
      v-if="currentSelection === 4"
    >
    </emoji-set>
    <emoji-set
      title="Activity"
      type="activity"
      @insertEmoji="addEmoji"
      v-if="currentSelection === 5"
    >
    </emoji-set>
    <emoji-set
      title="Animals"
      type="animals"
      @insertEmoji="addEmoji"
      v-if="currentSelection === 6"
    >
    </emoji-set>
    <emoji-set
      title="Objects"
      type="objects"
      @insertEmoji="addEmoji"
      v-if="currentSelection === 7"
    >
    </emoji-set>
  </div>
</template>