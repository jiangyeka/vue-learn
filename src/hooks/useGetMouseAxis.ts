import { onMounted, onUnmounted, ref } from "vue"

function useGetMouseAxis() {
    let x = ref(0)
    let y = ref(0)

    const updateAxisValue = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(() => {
        window.addEventListener('mousemove', updateAxisValue)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', updateAxisValue)
    })
    return {
        x,
        y,
        
    }
}
export default useGetMouseAxis