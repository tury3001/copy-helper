<template>
  <div class="py-2 px-10 text-gray-700 mt-5">
    <span class="block w-full mb-2 border-b pb-2">Total characters</span>
    <span class="text-2xl">{{ countChars(copy) }}</span>
  </div>
</template>

<script>
export default {
  name: 'count-chars',
  props: ['copy'],
  data() {
    return {

    }
  },
  methods: {
    countChars() {
        return this.copy.length;
    }
  }
}
</script>
