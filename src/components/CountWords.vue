<template>
    <span class="text-xl">{{ countWords(copy) }}</span>
</template>

<script>
export default {
  name: 'count-words',
  props: ['copy'],
  data() {
    return {

    }
  },
  methods: {
    countWords() {

      if (this.copy.length == 0)
        return 0;

      return this.copy.trim()
                       .split(' ')
                       .filter(word => word !== '')
                       .length;
    }
  }
}
</script>
