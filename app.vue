<!-- <script lang="jsx">
import { onBeforeMount, onMounted, onBeforeUnmount, ref, reactive, computed, watch, nextTick, defineAsyncComponent, defineComponent, } from 'vue'
import { isEmpty } from '~/helpers'
// import { useNuxtApp } from '#app'

export default defineComponent({
  props: {},
  setup(props, {emit}) {
    return ()=>(<>
      <Html>
        <Head>
          <Title>Nuxt Project</Title>
          <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
        </Head>
      </Html>
      <NuxtPage />
    </>)
  },
})
</script> -->

<!--
  在 app 使用 jsx 會噴警告
  Slot "default" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.
  參考：https://github.com/vuejs/vue-next/issues/3257
-->
<template>
    <Html>
      <Head>
        <Title>Nuxt Project</Title>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
      </Head>
    </Html>
    <NuxtPage />
</template>