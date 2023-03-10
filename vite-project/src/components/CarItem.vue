<script setup>
import { ref } from 'vue'
const props = defineProps({
  wheel: String,
  body: String,
  spinning: Boolean
});

// wheel = ref("/images/wheel.png")
</script>

<template>
  <div id="car">
    <img id="body" v-bind:src="body">
    <img id="wheel1" v-bind:class="(spinning) ? 'rotate' : ''" v-bind:src="wheel">
    <img id="wheel2" v-bind:class="(spinning) ? 'rotate' : ''" v-bind:src="wheel">
  </div>
</template>

<style scoped>
#car {
  width: 70%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5%;
}

#body {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
}

#wheel1 {
  position: absolute;
  width: 13.8%;
  bottom: -17%;
  left: 15.55%;
}

#wheel2 {
  position: absolute;
  width: 13.8%;
  left: 76.73%;
  bottom: -17%;
}

.rotate {
  animation: rotation 0.5s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
</style>
