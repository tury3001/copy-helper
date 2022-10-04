<script setup>

import { ref } from 'vue';
import CountChars from '@/components/CountChars.vue';
import CountWords from '@/components/CountWords.vue';
import CountParagraphs from '@/components/CountParagraphs.vue';
import ReadingTime from '@/components/ReadingTime.vue';
import EmojiPicker from '@/components/EmojiPicker.vue';
import ToolButton from '@/components/ToolButton.vue';
import CopyTitle from '@/components/CopyTitle.vue';
import PanelData from '@/components/PanelData.vue';
import Filters from '@/components/Filters.vue';
import WordDensity from '@/components/WordDensity.vue';


const appTitle = 'Copy Helper';
const copy = ref('');
const textarea = ref();


function insertEmoji( emoji ) {
    let currentPosition = textarea.value.selectionStart;
    copy.value = copy.value.slice(0, currentPosition) + emoji + copy.value.slice(currentPosition, copy.value.length);
    textarea.value.focus();
}

function copyToClipboard() {
    textarea.value.select();
    document.execCommand('copy');
    window.getSelection().empty();
}

function redo () {
  document.execCommand('redo');
}

function undo () {
  document.execCommand('undo');
}

function clear () {
  copy.value = '';
}

function filterUppercase (uppercasedText) {
  copy.value = uppercasedText;
}

function filterLowercase (lowercasedText) {
  copy.value = lowercasedText;
}

function filterWordcase (wordcasedText) {
  copy.value = wordcasedText;
}

function filterSentencecase (sentencecasedText) {
  copy.value = sentencecasedText;
}

</script>

<template>
  <nav class="bg-gray-900 text-center py-5 ">
    <h1 class="text-2xl text-white"><i class="fas fa-pen-alt text-xl mr-2"></i>{{ appTitle }}</h1>
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
        <panel-data label="Paragraphs" icon="fas fa-align-justify">
          <count-paragraphs :copy="copy"></count-paragraphs>
        </panel-data>
        <panel-data label="Reading time" icon="far fa-clock">
          <reading-time :copy="copy"></reading-time>
        </panel-data>
        <word-density :copy="copy"></word-density>
      </div>
      <div class="p-4 w-1/3 min-w-96">
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
        <emoji-picker @addEmoji="insertEmoji"
        >
        </emoji-picker>
        <filters
              :copy="copy"
              @uppercased="filterUppercase"
              @lowercased="filterLowercase"
              @wordcased="filterWordcase"
              @sentencecased="filterSentencecase"
        ></filters>
      </aside>
    </div>
  </main>
</template>