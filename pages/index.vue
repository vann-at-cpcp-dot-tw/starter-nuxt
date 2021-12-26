<script lang="jsx">
import { onBeforeMount, onMounted, onBeforeUnmount, ref, reactive, computed, watch, nextTick, defineAsyncComponent, defineComponent, } from 'vue'
import { useStore } from '~/store'
import useResolveAssets from '~/use/useResolveAssets'
import useViewport from '~/use/useViewport'

export default defineComponent({
    props: {},
    setup(props, {emit}) {
        const viewport = useViewport()
        const store = useStore()
        const state = reactive({})
        const srcAssets = useResolveAssets([
            '/assets/img/logo.png'
        ])

        return () => (<div>
            <Lightbox id="helloLightbox">
                <div>
                    <LightboxClose />
                    <div>Hello Lightbox</div>
                </div>
            </Lightbox>

            <div className="p-5 min-h-full flex flex-col justify-center items-center">

                <div className="row justify-center mb-5">
                    <div className="col-auto">
                        <img src={srcAssets['/assets/img/logo.png']}/>
                    </div>
                    <div className="col-auto">
                        <img src="/assets/img/logo-without-hash.png"/>
                    </div>
                </div>

                <div className="text-center">
                    <div className="btn cursor-pointer"
                    onClick={()=>{
                        store.$patch({lightbox: 'helloLightbox'})
                    }}>
                        CLICK ME!
                    </div>
                </div>
            </div>
        </div>)
    },
})
</script>