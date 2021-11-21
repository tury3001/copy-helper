<template>
  <button class="border rounded px-3 py-1 bg-gray-100 text-sm" @click="this.$emit(this.eventName)">
    <i :class="this.icon"></i>
    <span class="ml-2 {{ this.label }}">{{ this.label }}</span>
  </button>
</template>

<script>

export default {
  props: ['icon', 'label', 'eventName'],
}

</script>
