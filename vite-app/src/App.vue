<script setup lang="ts">
import {ref,Ref} from 'vue'
const msg: string = '<h1>1111</h1>'
const msgStyle={
  color:'green',
  fontSize:'20px'
}
const flag:Boolean=false
const age=ref<string|number>('18')
</script>

<template>
  <div :class="[flag&&'msg-color']" v-html="msg">

  </div>
</template>

<style scoped>
.msg-color{
  color: aqua;
}
</style>
