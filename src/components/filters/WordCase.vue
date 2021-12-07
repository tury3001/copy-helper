<template>
  <li class="py-2 px-4 hover:bg-gray-200" @click="filter">Word case</li>
</template>

<script>
export default {
  name: 'word-case',
  props: ['text'],
  methods: {
    filter () {
      let words = this.text.split(' ')

      words.forEach(function(element, index, words) {
        words[index] = element.charAt(0).toUpperCase() + words[index].substr(1, words[index].length)
      })

      this.$emit('wordcased', words.join(' '))
    }
  }
}
</script>
