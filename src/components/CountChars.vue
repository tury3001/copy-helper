<template>
    <span class="text-xl">{{ countChars(copy) }}</span>
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
