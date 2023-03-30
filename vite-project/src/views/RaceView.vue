<script setup>
import { ref } from 'vue'
import randomWords from 'random-words';
import TimerItem from '../components/TimerItem.vue'
import CarItem from '../components/CarItem.vue'
import FinishItem from '../components/FinishItem.vue'
import { useCarStore } from '../stores/carStore'

const car = useCarStore()
let position = ref(0)
let userWord = ref()
let correctWord = ref(randomWords())
let done = ref(false)
let running = ref(false)
let time = ref(0)
let popupStyle = ref("display: none;")

const wheelImage = ref(car.wheels)
const spoilerImage = ref(car.spoiler)
const bodyImage = ref(car.body)
const engineImage = ref(car.engine)
const step = ref(car.step)

function checkWord() {
  if (!done.value) {
    running.value = true
  }
  console.log()
  if (userWord.value.trim() == correctWord.value) {
    position.value += step.value;
    userWord.value = ""
    correctWord.value = randomWords()
    if (position.value > 300) {
      done.value = true
      running.value = false 
      popupStyle = "display: block;"
    }
  }
}
</script>

<template>
  <main>
    <div id="background"></div>
    <img id="bg" src="/images/road.jpg">
    <TimerItem @response="(msg) => time = msg" :running="running" id="timer"/>
    <FinishItem :style="popupStyle" :time="time" id="finish"/>
    <CarItem class="car" :style="`transform: translateX(${position}%);`" :wheel="wheelImage" :body="bodyImage"
      :spinning="running" :spoiler="spoilerImage" :engine="engineImage" :raceMode="true" />
    <p id="correctText">{{ correctWord }}</p>
    <form id="form" @submit.prevent>
      <input id="input" v-model="userWord" @keyup="checkWord();" autocomplete="off">
    </form>
  </main>
</template>

<style scoped>
#finish {
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
    height: fit-content;
}
#timer {
  position: absolute;
  top: 7%;
  left: 1%;
  font-size: 2rem;
}
#background {
  position: absolute;
  z-index: -10;
  background-color: #7fab49;
  width: 100vw;
  height: 100vh;
}
template {
  background-color: #7fab49;
}
#bg {
  position: absolute;
  width: 100%;
  z-index: -1;
  top: -45%;
}
#form {
  text-align: center;
}
.car {
  position: relative;
  width: 25%;
  left: 1%;
  margin-top: 10%;
  /* animation: drive 3s infinite linear; */

}
#correctText {
  margin-top: 6%;
  width: 100%;
  position: relative;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
}
#button {
  position: absolute;
  width: 10%;
  height: 5%;
  background-color: aquamarine;
}
#input {
  margin: auto;
  text-align: center;
  height: 3rem;
  font-size: 2rem;
}
@keyframes drive {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(450%);
  }
}
</style>
