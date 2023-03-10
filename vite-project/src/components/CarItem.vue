<script setup>
import { ref } from 'vue'
const props = defineProps({
  wheel: String,
  body: String
});
</script>

<template>
  <div id="car">
    <img id="body" src="/images/car2.png">
    <img id="wheel1" src="/images/wheel.png">
    <img id="wheel2" src="/images/wheel.png">
  </div>
</template>

<style scoped>
#car {
  width: 20%;
  position: relative;
}
#body {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
}
#wheel1 {
  position: absolute;
  grid-area:1/1;
  width: 13.8%;
  bottom: -13%;
  left: 15.4%;
}
#wheel2 {
  position: absolute;
  width: 13.8%;
  left: 76.7%;
  bottom: -13%;
  transform: rotate(45deg);
}
</style>
