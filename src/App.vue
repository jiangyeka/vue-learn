<script lang="ts">
import { computed, onMounted, onRenderTriggered, onUpdated, reactive, ref, toRefs } from "vue"
interface DataProps {
  count: number;
  doubleCount: number;
  increaseOne: () => void
}
export default {
  name: 'App',
  // setup() {
  //   const count = ref(0)
  //   const doubleCount = computed(() => {
  //     return count.value * 2
  //   })
  //   const increaseOne = () => {
  //     count.value++
  //   }
  //   return {
  //     count,
  //     doubleCount,
  //     increaseOne
  //   }  
  // }
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
    return {
      ...refClickCountData
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
