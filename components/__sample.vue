<script lang="jsx">
import { onBeforeMount, onMounted, onBeforeUnmount, ref, reactive, computed, watch, nextTick, defineAsyncComponent, defineComponent, } from 'vue'
import { useStore } from '~/store'
import useViewport from '~/use/useViewport'
import { isEmpty } from '~/helpers'

export default defineComponent({
    props: {},
    setup(props, {emit}) {
        const viewport = useViewport()
        const store = useStore()
        const state = reactive({})

        return () => (
            <>
            </>
        )
    },
})
</script>
