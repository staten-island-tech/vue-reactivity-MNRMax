<script setup>
import { ref } from 'vue'
const props = defineProps({
    typeInput: String
});
const emit = defineEmits(['response']);

const spoilers = ref(null)

fetch('/spoilers.json')
  .then((res) => res.json())
  .then((json) => (spoilers.value = json.spoilers))

  console.log(spoilers)
</script>

<template>
    <div id="box">
        <div v-for="spoiler in spoilers" id="spoiler" @click="emit('response', spoiler.image)" :key="spoiler.id" draggable="false">
            <img draggable="false" v-bind:src="spoiler.image == '' ? '/images/none.png' : spoiler.image">
            <p>{{ spoiler.name }}</p>
        </div>
    </div>
</template>

<style scoped>
#box {
    width: 100%;
    background-color: rgb(63, 63, 63);
    position: absolute;
    bottom: 0;
    display: flex;
    height: 12rem;
    padding: 1rem;
    justify-content: space-around;
}

#spoiler {
    height: 100%;
    text-align: center;
    color: grey;
    background-color: white;
    padding: 0.5rem;
    padding-bottom: 0.1rem;
}

button {
    width: 10%;
    height: 3rem;
    font-size: 2rem;
}

img {
    height: 80%;
}</style>
