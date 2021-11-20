<template lang="html">
  <div class="border rounded p-2">
    <span class="block w-full mb-2 border-b pb-2">Emojis</span>
    <ul class="mt-2 flex flex-row border-b pb-2">
      <li class="ml-2">
        <a href="" @click.prevent="currentSelection=1" :class="[ currentSelection == 1 ? 'border-b-2 border-red-700 pb-1' : null ]">😀</a>
      </li>
      <li class="ml-2">
        <a href="" @click.prevent="currentSelection=2" :class="[ currentSelection == 2 ? 'border-b-2 border-red-700 pb-1' : null ]">️🖐</a>
      </li>
      <li class="ml-2">
        <a href="" @click.prevent="currentSelection=3" :class="[ currentSelection == 3 ? 'border-b-2 border-red-700 pb-1' : null ]">🚩</a>
      </li>
      <li class="ml-2">
        <a href="" @click.prevent="currentSelection=4" :class="[ currentSelection == 4 ? 'border-b-2 border-red-700 pb-1' : null ]">🍏</a>
      </li>
      <li class="ml-2">
        <a href="" @click.prevent="currentSelection=5" :class="[ currentSelection == 5 ? 'border-b-2 border-red-700 pb-1' : null ]">⚽</a>
      </li>
    </ul>
    <emoji-set title="Emoticons" type="emoticons" v-if="currentSelection==1"></emoji-set>
    <emoji-set title="Body" type="body" v-if="currentSelection==2"></emoji-set>
    <emoji-set title="Flags" type="flags" v-if="currentSelection==3"></emoji-set>
    <emoji-set title="Food" type="food" v-if="currentSelection==4"></emoji-set>
    <emoji-set title="Activity" type="activity" v-if="currentSelection==5"></emoji-set>
  </div>
</template>

<script>

import EmojiSet from './EmojiSet'

export default {
  name: 'emoji-picker',
  components: { EmojiSet },
  props: ['copy'],
  data () {
    return {
      currentSelection: 1
    }
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
</style>
