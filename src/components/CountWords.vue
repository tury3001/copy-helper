<template>
  <div class="py-2 px-10 text-gray-700 mt-5">
    <span class="block w-full mb-2 border-b pb-2">Total words</span>
    <span class="text-2xl">{{ countWords(copy) }}</span>
  </div>
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

      return this.copy.trim().split(' ').length;

    }
  }
}
</script>
