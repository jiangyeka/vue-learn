<script lang="ts">
import { computed, onMounted, onRenderTriggered, onUpdated, defineComponent, reactive, ref, toRefs, watch, onUnmounted } from "vue"
import useGetMouseAxis from './hooks/useGetMouseAxis'
import useUrlLoader from './hooks/useUrlLoader'
import Modal from './components/Modal.vue'
const component = defineComponent({
  data() {
    return {}
  }
})
interface Result {
  message: string,
  status: string
}
export default {
  name: "App",
  setup() {
    const { x, y } = useGetMouseAxis();
    const { loading, error, loaded, result } = useUrlLoader<Result>("https://dog.ceo/api/breeds/image/random");
    watch(result,()=>{
      result.value?.message
    })
    return {
      x,
      y,
      loading,
      error,
      loaded,
      result
    };
  },
  components: { Modal }
}
</script>

<template>
  <h1>x:{{ x }}</h1>
  <h1>y:{{ y }}</h1>
  <h1>{{ loaded }}</h1>
  <h1>{{ loading }}</h1>
  <h1>{{ error }}</h1>
  <img :src="result.message" alt="">
  <Modal />
</template>

<style>
</style>
