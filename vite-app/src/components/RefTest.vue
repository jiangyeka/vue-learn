<script setup lang="ts">
import { customRef, ref,shallowRef,triggerRef } from 'vue'



const count = ref<number>(0)
const countS = shallowRef({
  count:0
})
const changeCount=()=>{
  count.value++

}
const changeCountS=()=>{
  countS.value.count++
  triggerRef(countS)
  console.log(countS.value);
  

}
function myRef<T>(value:T){
  return customRef((trank,trigger)=>{
  return{
    get(){
      trank()
      return value
    },set(newVal:T){
      value=newVal
      console.log('set');
      
      trigger()
    }
  }
  })
}
let msg = myRef('jin')
const changeMsg=()=>{
  msg.value='peng'
}
</script>

<template>
 <div>{{count}}</div>
 <div>shallowRef{{countS}}</div>
 <button @click="changeCount">countchange</button>
 <button @click="changeCountS">shallowchange</button>


 <br>
 <div>{{msg}}</div>
 <button @click="changeMsg">shallowchange</button>
</template>

<style scoped>

</style>
