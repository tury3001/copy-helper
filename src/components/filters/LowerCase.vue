<template>
  <li class="py-2 px-4 hover:bg-gray-200" @click="filter">Lower case</li>
</template>

<script>

export default {
  name: 'lower-case',
  props: ['text'],
  methods: {
    filter () {
      this.$emit('lowercased', this.text.toLowerCase())
    }
  }
}

</script>
