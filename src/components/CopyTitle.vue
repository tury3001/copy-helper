<template>
  <label for="title">Title</label>
  <input type="text" name="title" id="title" v-model="title" class="rounded ml-2 w-96 px-2" @input="changeTitle()">
</template>
<script>

export default {
  name: 'copy-title',
  props: ['baseTitle'],
  data() {
    return {
      title: 'New copy'
    }
  },
  mounted() {
    this.changeTitle();
  },
  methods: {
    changeTitle() {
      document.title = this.baseTitle + ' | ' + this.title ;
    }
  }
}

</script>
