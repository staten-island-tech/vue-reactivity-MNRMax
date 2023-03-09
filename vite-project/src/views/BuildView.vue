<script setup>
import { ref } from 'vue'
import SelectItem from '../components/SelectItem.vue'
const childMsg = ref(0)
</script>

<template>
  <main>
    <SelectItem @response="(msg) => childMsg = msg" />
    <p>{{ childMsg }}</p>
  </main>
</template>
