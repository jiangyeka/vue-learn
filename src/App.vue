<script lang="ts">
import { computed, onMounted, onRenderTriggered, onUpdated, reactive, ref, toRefs, watch, onUnmounted } from "vue"
import useGetMouseAxis from './hooks/useGetMouseAxis'
import useUrlLoader from './hooks/useUrlLoader'
export default {
  name: 'App',
  setup() {
    const { x, y } = useGetMouseAxis()
    const { loading, error, loaded, result } = useUrlLoader('https://dog.ceo/api/breeds/image/random')
    return {
      x,
      y,
      loading,
      error,
      loaded,
      result

    }
  }
}
</script>

<template>
  <h1>x:{{ x }}</h1>
  <h1>y:{{ y }}</h1>
  <h1>{{ loaded }}</h1>
  <h1>{{ loading }}</h1>
  <h1>{{ error }}</h1>
  <img :src="result.message" alt="">
</template>

<style>
</style>
