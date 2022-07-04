<template>
    <h1>欢迎来到主页面</h1>
    <router-link to="login">登录</router-link>
</template>

<script setup>
import { defineProps, reactive } from 'vue';
defineProps({
    msg: {
        type: String,
        default: ''
    }
})
const state = reactive({ count: 0 })
</script>

<style>
</style>