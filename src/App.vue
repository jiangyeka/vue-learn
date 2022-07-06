<script lang="ts">
import { computed, onMounted, onRenderTriggered, onUpdated, reactive, ref, toRefs, watch, onUnmounted } from "vue"
import useGetMouseAxis from './hooks/useGetMouseAxis'
export default {
  name: 'App',
  setup() {
    const { x, y } = useGetMouseAxis()
    return {
      x,
      y,
    }
  }
}
</script>

<template>
  <h1>x:{{ x }}</h1>
  <h1>y:{{ y }}</h1>
</template>

<style>
</style>
