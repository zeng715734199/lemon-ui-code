<demo>
常规用法
</demo>

<template>
  <div class="demo-component">
    <Switch v-model:value="bool"/>
  </div>
</template>

<script lang="ts">
import {Switch} from '../lib/index';
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
