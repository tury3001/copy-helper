<template>
  <span class="text-xl">{{ countParagraphs(copy) }}</span>
</template>

<script>
  export default {
    name: 'count-paragraphs',
    props: ['copy'],
    methods: {
      countParagraphs () {

        return this.copy.split('.\n').length - 1
      }
    }
  }
</script>
