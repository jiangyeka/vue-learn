<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Father from './components/Father.vue';
</script>

<template>
  <Father>
    <template v-slot:header> header</template>
    <template v-slot:main> main</template>
    <template v-slot:footer> footer</template>
    <template v-slot="slotProps">{{
        slotProps.obj.name
    }}</template>
  </Father>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
