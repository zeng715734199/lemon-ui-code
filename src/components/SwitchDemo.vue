<template>
  <div>
    <Switch :value="x" @input="x = $event"/>
  </div>
</template>
<script>
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'

export default {
  components: {Switch},
  setup() {
    const x = ref(false)
    return {x}
  }
}
</script>