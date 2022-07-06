<script lang="ts">
import { computed, ref } from "vue"

export default {
  name: 'App',
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => {
      return count.value * 2
    })
    const increaseOne = () => {
      count.value++
    }
    return {
      count,
      doubleCount,
      increaseOne
    }
  }
}
</script>

<template>
  <h1>{{ count }}</h1>
  <h1>{{ doubleCount }}</h1>
  <button @click="increaseOne">+++</button>
</template>

<style>
</style>
