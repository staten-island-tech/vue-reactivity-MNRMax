<script setup>
import { ref } from 'vue'
import SelectWheelItem from '../components/SelectWheelItem.vue'
import CarItem from '../components/CarItem.vue'
const wheelImage = ref("")
</script>

<template>
  <main>
    <SelectWheelItem @response="(msg) => wheelImage = msg" />
    <CarItem wheel="/images/wheel.png" body="/images/car2.png" />
    <img v-bind:src="wheelImage">
  </main>
</template>

<style scoped>
img {
  width: 10%;
}
</style>
