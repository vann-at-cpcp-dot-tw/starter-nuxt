<script lang="tsx" setup>
import { twMerge } from 'tailwind-merge'
const window = process.client ? globalThis : null

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  className: {
    type: String,
    default: '',
  }
})

</script>
<template>
  <div :class="twMerge('', props.class)"></div>
</template>
