<template>
  <li class="py-2 px-4 hover:bg-gray-200" @click="filter">Upper case</li>
</template>

<script>

export default {
  name: 'upper-case',
  props: ['text'],
  methods: {
    filter () {
      this.$emit('uppercased', this.text.toUpperCase())
    }
  }
}

</script>
