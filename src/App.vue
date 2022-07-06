<script lang="ts">
import { computed, onMounted, onRenderTriggered, onUpdated, reactive, ref, toRefs, watch } from "vue"
interface DataProps {
  count: number;
  doubleCount: number;
  increaseOne: () => void
}
export default {
  name: 'App',
  setup() {
    onMounted(() => {
      console.log('mounted');
    })
    onUpdated(() => {
      console.log('updated');

    })
    onRenderTriggered((event) => {
      console.log(event);

    })
    const clickCountData: DataProps = reactive({
      count: 0,
      increaseOne: () => { clickCountData.count++ },
      doubleCount: computed(() => clickCountData.count * 2)
    })
    const refClickCountData = toRefs(clickCountData)
    const welcomeStr = ref('')
    const updateWelcomeStr = () => {
      welcomeStr.value += 'Hello'
    }
    watch([welcomeStr, () => clickCountData.count], (o, n) => {
      document.title = welcomeStr.value
    })
    return {
      ...refClickCountData,
      welcomeStr,
      updateWelcomeStr
    }

  }
}
</script>

<template>
  <h1>{{ count }}</h1>
  <h1>{{ doubleCount }}</h1>
  <h1>{{ welcomeStr }}</h1>
  <button @click="increaseOne">+++</button>
  <button @click="updateWelcomeStr">updateTitle</button>
</template>

<style>
</style>
