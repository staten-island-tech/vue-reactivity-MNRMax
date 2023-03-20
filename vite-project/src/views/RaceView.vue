<script>
import { onMounted, ref } from 'vue';
import { useCarStore } from '../stores/carStore'

const car = useCarStore();
const canvas = ref(null);

onMounted(() => {
  const context = canvas.value.getContext('2d');
  canvas.value.width = canvas.value.offsetWidth;
  canvas.value.height = canvas.value.offsetHeight;
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(400, 400);
  context.strokeStyle = 'green';
  context.lineWidth = 2;
  context.stroke();
  context.closePath();
});
</script>

<template>
  <canvas id="canvas" ref="canvas"></canvas>
</template>

<style>
#canvas {
  width: 100vw;
  height: 100vh;
}
</style>
