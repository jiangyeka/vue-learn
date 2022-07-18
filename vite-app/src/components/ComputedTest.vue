<script setup lang="ts">
import { computed, ref } from 'vue';
const fN=ref('jin')
const lN=ref('peng')

const name =computed(()=>{
    return fN.value+lN.value
})
</script>

<template>
 <div>
    {{name}}
 </div>
</template>

<style scoped>

</style>
