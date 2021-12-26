<script lang="jsx">
import { onBeforeMount, onMounted, onBeforeUnmount, ref, reactive, computed, watch, nextTick, defineAsyncComponent, defineComponent, } from 'vue'
import { useStore } from '~/store'
import useViewport from '~/use/useViewport'
import { isEmpty } from '~/helpers'


export default defineComponent({
    props: {},
    setup(props, {emit, slots}) {
        const viewport = useViewport()
        const store = useStore()
        const state = reactive({})

        return () => (
            <div className="w-full h-full flex flex-col flex-nowrap">
                <PartsHeader />

                <main className="grow">
                    { typeof slots.default === 'function' ?slots.default() :null }
                </main>

                <PartsFooter />
            </div>
        )
    },
})
</script>

