import axios from "axios";
import { ref } from "vue";

function useUrlLoader<T>(url: string) {
    const result = ref<T | null>(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)
    axios.get(url).then((res) => {
        loading.value = false
        result.value = res.data
        loaded.value = true
    }).catch((error) => {
        result.value = error
        loading.value = false
        error.value = error
    })
    return {
        loading,
        loaded,
        error,
        result
    }
}
export default useUrlLoader