<script setup>
import { ref } from 'vue'
const props = defineProps({
  typeInput: String
});
const emit = defineEmits(['response']);
let counter = ref(0)

const wheels = ref([{ image: 'Foo' }, { message: 'Bar' }])
</script>

<template>
  <div id="box">
    <div v-for="wheel in wheels">
      <p>{{ wheel.message }}</p>
    </div>
    <!-- <button @click="{
          counter++;
          emit('response', counter)
        }
        ">Click Me</button> -->
  </div>
</template>

<style scoped>
#box {
  width: 100%;
  height: 10rem;
  background-color: rgb(63, 63, 63);
  position: absolute;
  bottom: 0;
  display: flex;
}

button {
  width: 10%;
  height: 3rem;
  font-size: 2rem;
}
</style>
