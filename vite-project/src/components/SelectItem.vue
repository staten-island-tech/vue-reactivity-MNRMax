<script setup>
import { ref } from 'vue'
const props = defineProps({
    typeInput: String
});
const emit = defineEmits(['response']);

const wheels = ref(null)

fetch('/wheels.json')
  .then((res) => res.json())
  .then((json) => (wheels.value = json.wheels))

  console.log(wheels)
</script>

<template>
    <div id="box">
        <div v-for="wheel in wheels" id="wheel" @click="emit('response', wheel.image)" :key="wheel.id" draggable="false">
            <img draggable="false" v-bind:src="wheel.image">
            <p>{{ wheel.name }}</p>
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

#wheel {
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
