<template>
  <div class="border rounded p-2 mt-10" @click="open=!open"  @mouseleave="open=false">

    <div class="block w-full pb-2 flex justify-between cursor-pointer items-center">
      <h3>Filters</h3>
      <i class="fas fa-caret-down"></i>
    </div>
    <ul v-show="open" class="cursor-pointer">
      <upper-case :text="copy" @uppercased="toUppercase"></upper-case>
      <lower-case :text="copy" @uppercased="toLowercase"></lower-case>
      <li class="py-2 px-4 hover:bg-gray-200">Sentence case</li>
      <li class="py-2 px-4 hover:bg-gray-200">Word case</li>
    </ul>
  </div>
</template>

<script>

import UpperCase from './filters/UpperCase.vue'
import LowerCase from './filters/LowerCase.vue'

export default {
  name: 'filters',
  components: { UpperCase, LowerCase },
  props: ['copy'],
  data () {
    return {
      open: false,
      uppercasedText: ''
    }
  },
  methods: {
    toUppercase (uppercasedText) {
      this.$emit('uppercased', uppercasedText);
    },
    toLowercase (lowercasedText) {
      this.$emit('lowercased', lowercasedText);
    }
  }
}

</script>
