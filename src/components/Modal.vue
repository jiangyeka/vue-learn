<template>
    <teleport to="#modal">
        <div>
            modal
        </div>
    </teleport>
</template>

<script lang="ts">
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },

    emits: {
        'close-modal': (payload: any) => {
            return payload.type === 'close'
        }
    },
    setup(props, context) {
        context.emit('close-modal', {
            type: 'hello'
        })
    }
}
</script >

<style>
</style>