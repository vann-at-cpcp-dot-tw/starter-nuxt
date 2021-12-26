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

    function lightboxClickHandler(e){
      if( $(e.target).data('el') == 'lightbox'){
        store.$patch({lightbox: null})
      }
    }

    onBeforeMount(()=>{
      $('body').on('click', lightboxClickHandler)
    })

    onBeforeUnmount(()=>{
      $('body').off('click', lightboxClickHandler)
    })

    return () => (
      <div className="flex justify-end absolute right-2 top-2">
        <div className="btn"
        onClick={()=>{
          store.$patch({lightbox: null})
        }}>
          <Icon type="X" width="36px"/>
        </div>
      </div>
    )
  },
})
</script>
