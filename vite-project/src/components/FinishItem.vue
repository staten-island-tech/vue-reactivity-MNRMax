<script setup>
import { ref } from 'vue'
const props = defineProps({
    running: Boolean,
    time: Number,
});

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
  <div id="box" :style="'background-color: aliceblue; padding: 2rem; border: 3px solid black;'">
    <h3 id="title">Finish!</h3>
    <h3 id="time">{{ format(time) }}</h3>
  </div>
</template>

<style scoped>
h3 {
    text-align: center;
}
#title {
    margin-bottom: 0;
    font-size: 3rem;
}
#time {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 100;
}
</style>
