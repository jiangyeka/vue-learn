<script setup lang="ts">
import {useTestStore} from'./store/index'
const Test=useTestStore()
const change=()=>{
  Test.changeName()
}

</script>

<template>
 <div>
{{Test.current}}
{{Test.name}}
<button @click="change">change</button>
 </div>
</template>

<style scoped>
.msg-color{
  color: aqua;
}
</style>
