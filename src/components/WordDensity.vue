<template>
    <div class="mt-2 border p-2">
        <h5 class="uppercase text-sm">Word density</h5>
        <ul class="mt-3">
            <li v-for="word in wordsDensity" :key="word.id" class="flex justify-between">
                <span>{{ word.text }}</span>
                <span>{{ word.quantity }}</span>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: ['copy'],
    computed: {
      wordsDensity: function () {
            let words = []
            if (this.copy.length > 0) {
                let keywords = this.copy.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"")
                                        .toLowerCase()
                                        .split(' ')
                let i=0
                let reference

                for (const keyword of keywords) {
                    reference = words.find(k => k.text === keyword)

                    if (reference) {
                        reference.quantity++
                    } else {
                        words.push({ id: i, text: keyword, quantity: 1 })
                    }
                }

                words.sort(function(a, b) {
                    return b.quantity - a.quantity
                })

                words = words.splice(0, 10)
            }

            return words
      }  
    }
}

</script>
