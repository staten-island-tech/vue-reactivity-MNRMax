<script setup>
import { ref } from 'vue'
const props = defineProps({
    typeInput: String
});
const emit = defineEmits(['response']);

const engines = ref(null)

fetch('/engines.json')
  .then((res) => res.json())
  .then((json) => (engines.value = json.engines))

  console.log(engines)
</script>

<template>
    <div id="box">
        <div v-for="engine in engines" id="engine" @click="emit('response', {image: engine.image, stepModifier: engine.stepModifier})" :key="engine.id" draggable="false">
            <img draggable="false" :src="engine.image">
            <p>{{ engine.name }}</p>
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

#engine {
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
