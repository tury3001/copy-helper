<template>
  <nav class="bg-gray-900 text-center py-5 ">
    <h1 class="text-2xl text-white"><i class="fas fa-pen-alt text-xl mr-2"></i>Copy Helper</h1>
  </nav>
  <div class="container mt-10 mx-auto">
    <div class="flex flex-row h-screen justify-center">
      <div class="p-4">
        <count-chars :copy="copy"></count-chars>
        <count-words :copy="copy"></count-words>
        <reading-time :copy="copy"></reading-time>
      </div>
      <div class="p-4 w-96">
        <div class="mb-5 flex justify-between">
          <button class="border rounded px-3 py-1 bg-gray-100" @click="copyToClipboard()">
            <i class="far fa-copy"></i>
            <span class="ml-2">Copy</span>
          </button>
          <button class="border rounded px-3 py-1 bg-gray-100" @click="copy=''">
            <i class="far fa-trash-alt"></i>
            <span class="ml-2">Clear</span>
          </button>
        </div>
        <textarea name="name"
                  class="flex w-full h-4/6 border border-gray-300 p-2 rounded focus:border-gray-300 focus:outline-none "
                  v-model="copy"
                  ref="textarea"
                  @input="updatePosition"
        >
        </textarea>
      </div>
      <div class="p-4 w-72">
        <emoji-picker :copy="copy"
                          @insertEmoji="insertEmoji($event)">
        </emoji-picker>
      </div>
    </div>

  </div>
</template>

<script>

import CountChars from './CountChars.vue'
import CountWords from './CountWords.vue'
import ReadingTime from './ReadingTime.vue'
import EmojiPicker from './EmojiPicker.vue'

export default {
  components: { CountChars, CountWords, ReadingTime, EmojiPicker },
  data() {
    return {
      copy: '',
      cursorRowPosition: 0,
      cursorColPosition: 0
    }
  },
  methods: {
    insertEmoji(event) {
      let currentPosition = this.$refs.textarea.selectionStart;

      this.copy = this.copy.slice(0, currentPosition) + event.emoji
                  + this.copy.slice(currentPosition, this.copy.length);

      this.$refs.textarea.focus()
    }
  }
}
</script>
