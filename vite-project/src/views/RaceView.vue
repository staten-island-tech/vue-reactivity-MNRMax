<script setup>
import { ref } from 'vue'
import CarItem from '../components/CarItem.vue'
import { useCarStore } from '../stores/carStore'

const car = useCarStore()

const wheelImage = ref(car.wheels)
const spoilerImage = ref(car.spoiler)
const bodyImage = ref(car.body)
const engineImage = ref(car.engine)
const spinning = ref(false)

</script>

<template>
  <main>
    <CarItem class="car" :wheel="wheelImage" :body="bodyImage" :spinning="spinning" :spoiler="spoilerImage" :engine="engineImage" :raceMode="true"/>
  </main>
</template>

<style scoped>
.car {
  width: 25%;
}
</style>
