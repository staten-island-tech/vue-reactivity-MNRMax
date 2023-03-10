<script setup>
import { ref } from 'vue'
import SelectWheelItem from '../components/SelectWheelItem.vue'
import SelectBodyItem from '../components/SelectBodyItem.vue'
import CarItem from '../components/CarItem.vue'

const wheelImage = ref("")
const spinning = ref(false)
const selector = ref("wheels")

</script>

<template>
  <main>
    <input type="checkbox" v-model="spinning">
    <SelectWheelItem v-if="selector == 'wheels'" @response="(msg) => wheelImage = msg" />
    <SelectBodyItem v-if="selector == 'body'" @response="(msg) => wheelImage = msg" />
    <CarItem v-bind:wheel="wheelImage" body="/images/car2.png" v-bind:spinning="spinning" />
  </main>
</template>

<style scoped>
img {
  width: 10%;
}
</style>
