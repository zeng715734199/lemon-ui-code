<demo>
支持 disabled
</demo>
<template>
  <div class="demo-component">
    <Switch v-model:value="bool" disabled/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const bool = ref(false);
    return {
      bool
    };
  }
};
</script>
