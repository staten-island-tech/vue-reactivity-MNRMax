<script setup>
import { ref } from 'vue'
const props = defineProps({
    running: Boolean,
});

const emit = defineEmits(['response']);

let time = 0;
let timeFormatted = ref(format(time))

setInterval(() => {
    if (props.running) {
        time++
        emit('response', time)
        timeFormatted.value = format(time)
    }
}, 1000)

function format(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}
</script>

<template>
  <div>
    <h3>{{ timeFormatted }}</h3>
  </div>
</template>

<style scoped>

</style>
