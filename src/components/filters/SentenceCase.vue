<template>
  <li class="py-2 px-4 hover:bg-gray-200" @click="filter">Sentence case</li>
</template>

<script>
  export default {
    name: 'sentence-case',
    props: ['text'],
    methods: {
      filter() {
        let sentences = this.text.split('. ')
        sentences.forEach(function(sentence, i, sentences) {
          sentences[i] = sentence.trim().charAt(0).toUpperCase() + sentences[i].trim().substr(1, sentence.length)
        })

        this.$emit('sentencecased', sentences.join('. '))
      }
    }

  }
</script>
