<template>
  <div class="py-2 px-10 text-gray-700 mt-5">
    <span class="block w-full mb-2 border-b pb-2">Reading time</span>
    <span class="text-2xl">{{ calcReadingTime(copy) }} </span>
  </div>
</template>

<script>

export default {
  props: ['copy'],
  data () {
    return {
      wpm: 275 // words per minute -- speed average reader
    }
  },
  methods: {
    calcReadingTime() {
      let countWords;
      let displayOutput;

      countWords = this.copy.trim().split(' ').length;

      if (this.copy.length == 0)
        displayOutput = "0 seconds";
      else {

        let totalSeconds = countWords / this.wpm * 60;

        if (totalSeconds < 60) {
          displayOutput = Math.ceil(totalSeconds) + ' seconds';
        } else {
          let displayMinutes = Math.trunc(totalSeconds / 60);
          let displaySeconds = Math.trunc(totalSeconds % 60);
          displayOutput = displayMinutes + ":" + displaySeconds + ' minutes.';
        }
      }
      return displayOutput
    }
  }
}


</script>
