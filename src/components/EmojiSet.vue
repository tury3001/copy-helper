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

<script>

import emojijson from './emojis/emojis.json';

export default {
  name: 'emoji-set',
  props: ['type'],
  data () {
    return {
      emojis: null,
      json: JSON.parse(JSON.stringify(emojijson))
    }
  },
  mounted () {
    switch (this.type) {
      case 'emoticons':
        this.emojis = this.json.emoticons;
        break;

      case 'body':
        this.emojis = this.json.body;
        break;

      case 'flags':
        this.emojis = this.json.flags;
        break;

      case 'food':
        this.emojis = this.json.food;
        break;

      case 'activity':
        this.emojis = this.json.activity;
        break;

      case 'animals':
        this.emojis = this.json.animals;
        break;

      case 'objects':
        this.emojis = this.json.objects;
        break;
    }
  },
  methods: {
    addEmoji(emoji) {
      this.$parent.$emit('insertEmoji', { emoji: emoji });
    },
    withOffset(index) {
      return this.start + index
    }
  }
}

</script>
