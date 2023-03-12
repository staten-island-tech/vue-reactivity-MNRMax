<script setup>
import { ref } from 'vue'
import SelectWheelItem from '../components/SelectWheelItem.vue'
import SelectBodyItem from '../components/SelectBodyItem.vue'
import CarItem from '../components/CarItem.vue'
import SelectorItem from '../components/SelectorItem.vue'

const wheelImage = ref("/images/wheel.png")
const bodyImage = ref("/images/body1.png")
const spinning = ref(false)
const selector = ref("body")

</script>

<template>
  <main>
    <input type="checkbox" v-model="spinning">
    <SelectorItem @response="(msg) => selector = msg"/>
    <SelectWheelItem v-if="selector == 'wheels'" @response="(msg) => wheelImage = msg" />
    <SelectBodyItem v-if="selector == 'body'" @response="(msg) => bodyImage = msg" />
    <CarItem v-bind:wheel="wheelImage" v-bind:body="bodyImage" v-bind:spinning="spinning" />
  </main>
</template>

<style scoped>
img {
  width: 10%;
}
</style>
