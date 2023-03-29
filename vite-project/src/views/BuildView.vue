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
const spoilerStep = ref(car.spoilerStep)
const bodyImage = ref(car.body)
const engineImage = ref(car.engine)
const engineStep = ref(car.engineStep)
const step = ref(car.step)
const spinning = ref(false)
const selector = ref("body")

function store() {
  car.set(bodyImage, wheelImage, engineImage, spoilerImage, step, engineStep, spoilerStep)
}

function updateStep() {
  step.value = 10 + engineStep.value + spoilerStep.value
}

store()
updateStep()
</script>

<template>
  <main>
    <input type="checkbox" v-model="spinning">
    <SelectorItem @response="(msg) => selector = msg"/>
    <SelectWheelItem v-if="selector == 'wheels'" @response="(msg) => {wheelImage = msg; store(); updateStep()}"/>
    <SelectSpoilerItem v-if="selector == 'spoiler'" @response="(msg) => {spoilerImage = msg.image; spoilerStep = msg.stepModifier; updateStep()}" />
    <SelectEngineItem v-if="selector == 'engine'" @response="(msg) => {engineImage = msg.image; engineStep = msg.stepModifier; updateStep()}" />
    <SelectBodyItem v-if="selector == 'body'" @response="(msg) => bodyImage = msg" />
    <CarItem id="car" :wheel="wheelImage" :body="bodyImage" :spinning="spinning" :spoiler="spoilerImage" :engine="engineImage" :raceMode="false"/>
  </main>
</template>

<style scoped>
img {
  width: 10%;
}
#car {
  width: 70%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5%;
}
</style>
