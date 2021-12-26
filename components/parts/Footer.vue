<script lang="jsx">
import { onBeforeMount, onMounted, onBeforeUnmount, ref, reactive, computed, watch, nextTick, defineAsyncComponent, defineComponent, } from 'vue'
import useViewport from '~/use/useViewport'
import { isEmpty } from '~/helpers'

export default defineComponent({
    props: {},
    setup(props, {emit}) {
        const viewport = useViewport()
        const state = reactive({})

        return () => (<footer>
            <div className="text-center">This is Footer</div>
        </footer>)
    },
})
</script>
