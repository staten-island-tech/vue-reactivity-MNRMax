<script setup>
import { ref } from 'vue'
const props = defineProps({
    typeInput: String
});
const emit = defineEmits(['response']);

const bodies = ref(null)

fetch('/bodies.json')
    .then((res) => res.json())
    .then((json) => (bodies.value = json.bodies))

function scrollX(e) {
    document.getElementById("box").scrollLeft += 2*e.deltaY;
    console.log(e)
  }
</script>

<template>
    <div id="box" @mousewheel="scrollX">
        <div v-for="body in bodies" class="body" @click="emit('response', body.image)" :key="body.id" draggable="false">
            <img draggable="false" v-bind:src="body.image">
            <p>{{ body.name }}</p>
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
    overflow-x: auto;
    overflow-y: hidden;
}

.body {
    height: 100%;
    text-align: center;
    color: grey;
    background-color: white;
    padding: 0.5rem;
    padding-bottom: 0.1rem;
    margin: 1rem;
}

button {
    width: 10%;
    height: 3rem;
    font-size: 2rem;
}

img {
    height: 60%;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: rgb(63, 63, 63);
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(63, 63, 63);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6a6a6a;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #808080;
}
</style>
