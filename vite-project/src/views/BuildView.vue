<script setup>
import { ref } from 'vue'
import SelectItem from '../components/SelectItem.vue'
const wheelImage = ref("")
</script>

<template>
  <main>
    <SelectItem @response="(msg) => wheelImage = msg" />
    <img v-bind:src="wheelImage">
  </main>
</template>

<style scoped>
    img {
        width: 10%;
    }
</style>
