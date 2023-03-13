<script setup>
import { ref } from 'vue'

const emit = defineEmits(['response']);

let selected = ref("body")
</script>

<template>
    <div id="container">
        <div v-bind:class="(selected == 'wheels') ? 'selected' : 'unselected'" @click="{
            selected = 'wheels';
            emit('response', 'wheels');
        }">
            <p>Wheels</p>
        </div>
        <div v-bind:class="(selected == 'body') ? 'selected' : 'unselected'" @click="{
            selected = 'body';
            emit('response', 'body');
        }">
            <p>Body</p>
        </div>
        <div v-bind:class="(selected == 'engine') ? 'selected' : 'unselected'" @click="{
            selected = 'engine';
            emit('response', 'engine');
        }">
            <p>Engine</p>
        </div>
        <div v-bind:class="(selected == 'spoiler') ? 'selected' : 'unselected'" @click="{
            selected = 'spoiler';
            emit('response', 'spoiler');
        }">
            <p>Spoiler</p>
        </div>
    </div>
</template>

<style scoped>
body {
    margin: 0;
    padding: 0;
}

#container {
    right: 0;
    position: absolute;
}

.unselected {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgb(82, 82, 82);
    color: white;
}

.selected {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgb(36, 36, 36);
    color: white;
}

.unselected:hover,
.selected:hover {
    cursor: pointer;
}
</style>
