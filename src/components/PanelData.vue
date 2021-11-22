<template>
  <div class="border flex flex-row justify-between p-2 mt-1">
      <h2 class="uppercase text-sm mt-1">
        <i :class="this.icon"></i>
        <span class="ml-2">{{ this.label }}</span>
      </h2>
      <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'panel-data',
  props: ['label', 'icon']
}

</script>
