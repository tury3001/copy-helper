<template>
  <div class="border rounded p-2 mt-10" @click="open=!open"  @mouseleave="open=false">

    <div class="block w-full pb-2 flex justify-between cursor-pointer items-center">
      <h3>Filters</h3>
      <i class="fas fa-caret-down"></i>
    </div>
    <ul v-show="open" class="cursor-pointer">
      <upper-case :text="copy" @uppercased="toUppercase"></upper-case>
      <lower-case :text="copy" @lowercased="toLowercase"></lower-case>
      <word-case :text="copy" @wordcased="toWordcase"></word-case>
      <sentence-case :text="copy" @sentencecased="toSentencecase"></sentence-case>
    </ul>
  </div>
</template>

<script>

import UpperCase from './filters/UpperCase.vue'
import LowerCase from './filters/LowerCase.vue'
import WordCase from './filters/WordCase.vue'
import SentenceCase from './filters/SentenceCase.vue'

export default {
  name: 'filters',
  components: { UpperCase, LowerCase, WordCase, SentenceCase },
  props: ['copy'],
  data () {
    return {
      open: false,
      uppercasedText: '',
      lowercasedText: '',
      wordcasedText: '',
      sentencecasedText: ''
    }
  },
  methods: {
    toUppercase (uppercasedText) {
      this.$emit('uppercased', uppercasedText);
    },
    toLowercase (lowercasedText) {
      this.$emit('lowercased', lowercasedText);
    },
    toWordcase (wordcasedText) {
      this.$emit('wordcased', wordcasedText)
    },
    toSentencecase (sentencecasedText) {
      this.$emit('sentencecased', sentencecasedText)
    }
  }
}

</script>
