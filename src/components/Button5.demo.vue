<demo>
加载状态
</demo>

<template>
  <div class="demo-component">
    <Button loading>Loading</Button>
    <Button :loading="bool" @click="setLoading">click me!</Button>
  </div>
</template>


<script lang="ts">
import {Button} from '../lib/index';
import {ref} from 'vue';

export default {
  components: {Button},
  setup() {
    const bool = ref(false);
    const setLoading = () => {
      bool.value = !bool.value;
    };
    return {setLoading, bool};
  }
};
</script>