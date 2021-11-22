<template>
  <nav class="bg-gray-900 text-center py-5 ">
    <h1 class="text-2xl text-white"><i class="fas fa-pen-alt text-xl mr-2"></i>Copy Helper</h1>
  </nav>
  <div class="bg-gray-300 py-2 shadow">
    <div class="container mx-auto text-center">
      <copy-title :baseTitle="appTitle"></copy-title>
    </div>
  </div>
  <main class="container mt-10 mx-auto">
    <div class="flex flex-row h-screen justify-center">
      <div class="p-4 w-72">
        <panel-data label="Characters" icon="fas fa-font">
          <count-chars :copy="copy"></count-chars>
        </panel-data>
        <panel-data label="Words" icon="far fa-file-word">
          <count-words :copy="copy"></count-words>
        </panel-data>
        <panel-data label="Reading time" icon="far fa-clock">
          <reading-time :copy="copy"></reading-time>
        </panel-data>
      </div>
      <div class="p-4 w-96 min-w-96">
        <div class="mb-5 flex justify-between">
          <tool-button label="Copy"
                       icon="far fa-copy"
                       eventName="copyToClipboard"
                       @copyToClipboard="copyToClipboard()"
          >
          </tool-button>
          <tool-button label="Undo"
                       icon="fas fa-undo"
                       eventName="undo"
                       @undo="undo()"
          >
          </tool-button>
          <tool-button label="Redo"
                       icon="fas fa-redo"
                       eventName="redo"
                       @redo="redo()"
          >
          </tool-button>
          <tool-button label="Clear"
                       icon="far fa-trash-alt"
                       eventName="clear"
                       @clear="clear">
          </tool-button>
        </div>
        <textarea name="name"
                  class="flex w-full h-4/6 border border-gray-300 p-2 rounded focus:border-gray-300 focus:outline-none "
                  v-model="copy"
                  ref="textarea"
                  @input="updatePosition"
        >
        </textarea>
      </div>
      <aside class="p-4 w-72">
        <emoji-picker :copy="copy"
                      @insertEmoji="insertEmoji($event)"
        >
        </emoji-picker>
      </aside>
    </div>
  </main>
</template>

<script>

import CountChars from './CountChars.vue'
import CountWords from './CountWords.vue'
import ReadingTime from './ReadingTime.vue'
import EmojiPicker from './EmojiPicker.vue'
import ToolButton from './ToolButton.vue'
import CopyTitle from './CopyTitle.vue'
import PanelData from './PanelData.vue'

export default {
  components: { CountChars, CountWords, ReadingTime, EmojiPicker,
                ToolButton, CopyTitle, PanelData },
  data() {
    return {
      appTitle: 'Copy Helper',
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
    },
    copyToClipboard() {
      this.$refs.textarea.select();
      document.execCommand('copy');
      window.getSelection().empty();
    },
    redo () {
      document.execCommand('redo');
    },
    undo () {
      document.execCommand('undo');
    },
    clear () {
      this.copy = '';
    }
  }
}
</script>
