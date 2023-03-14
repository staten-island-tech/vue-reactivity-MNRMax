<script setup>
import { ref } from 'vue'
import SelectWheelItem from '../components/selectors/SelectWheelItem.vue'
import SelectSpoilerItem from '../components/selectors/SelectSpoilerItem.vue'
import SelectBodyItem from '../components/selectors/SelectBodyItem.vue'
import SelectEngineItem from '../components/selectors/SelectEngineItem.vue'
import CarItem from '../components/CarItem.vue'
import SelectorItem from '../components/SelectorItem.vue'

const wheelImage = ref("/images/wheel.png")
const spoilerImage = ref("")
const bodyImage = ref("/images/body1.png")
const engineImage = ref("/images/engine1.png")
const spinning = ref(false)
const selector = ref("body")

</script>

<template>
  <main>
    <input type="checkbox" v-model="spinning">
    <SelectorItem @response="(msg) => selector = msg"/>
    <SelectWheelItem v-if="selector == 'wheels'" @response="(msg) => wheelImage = msg" />
    <SelectSpoilerItem v-if="selector == 'spoiler'" @response="(msg) => spoilerImage = msg" />
    <SelectEngineItem v-if="selector == 'engine'" @response="(msg) => engineImage = msg" />
    <SelectBodyItem v-if="selector == 'body'" @response="(msg) => bodyImage = msg" />
    <CarItem :wheel="wheelImage" :body="bodyImage" :spinning="spinning" :spoiler="spoilerImage" :engine="engineImage"/>
  </main>
</template>

<style scoped>
img {
  width: 10%;
}
</style>
