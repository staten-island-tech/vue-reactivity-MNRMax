<script setup>
import { ref } from 'vue'

const emit = defineEmits(['response']);

const props = defineProps({
    selected: String,
    value: String,
});
</script>

<template>
    <div v-bind:class="(selected == value) ? 'selected' : 'unselected'" @click="{
        emit('response', [selected, value]);
    }">
        <p><slot /></p>
    </div>
</template>

<style scoped>
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
