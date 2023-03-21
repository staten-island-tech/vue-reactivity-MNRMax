<script setup>
import { ref } from 'vue'
import SelectWheelItem from '../components/selectors/SelectWheelItem.vue'
import SelectSpoilerItem from '../components/selectors/SelectSpoilerItem.vue'
import SelectBodyItem from '../components/selectors/SelectBodyItem.vue'
import SelectEngineItem from '../components/selectors/SelectEngineItem.vue'
import CarItem from '../components/CarItem.vue'
import SelectorItem from '../components/SelectorItem.vue'
import { useCarStore } from '../stores/carStore'

const car = useCarStore()

const wheelImage = ref(car.wheels)
const spoilerImage = ref(car.spoiler)
const bodyImage = ref(car.body)
const engineImage = ref(car.engine)
const spinning = ref(false)
const selector = ref("body")

function store() {
  car.set(bodyImage, wheelImage, engineImage, spoilerImage)
}

store()
</script>

<template>
  <main>
    <input type="checkbox" v-model="spinning">
    <SelectorItem @response="(msg) => selector = msg"/>
    <SelectWheelItem v-if="selector == 'wheels'" @response="(msg) => {wheelImage = msg; store()}"/>
    <SelectSpoilerItem v-if="selector == 'spoiler'" @response="(msg) => spoilerImage = msg" />
    <SelectEngineItem v-if="selector == 'engine'" @response="(msg) => engineImage = msg" />
    <SelectBodyItem v-if="selector == 'body'" @response="(msg) => bodyImage = msg" />
    <CarItem :wheel="wheelImage" :body="bodyImage" :spinning="spinning" :spoiler="spoilerImage" :engine="engineImage" :raceMode="false"/>
  </main>
</template>

<style scoped>
img {
  width: 10%;
}
</style>
