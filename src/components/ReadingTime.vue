<template>
  <span class="text-xl">{{ calcReadingTime(copy) }}</span>
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
        displayOutput = "0 s.";
      else {

        let totalSeconds = countWords / this.wpm * 60;

        if (totalSeconds < 60) {
          displayOutput = Math.ceil(totalSeconds) + ' s.';
        } else {
          let displayMinutes = Math.trunc(totalSeconds / 60);
          let displaySeconds = Math.trunc(totalSeconds % 60);
          displayOutput = displayMinutes + ":" + displaySeconds + ' m.';
        }
      }
      return displayOutput
    }
  }
}


</script>
