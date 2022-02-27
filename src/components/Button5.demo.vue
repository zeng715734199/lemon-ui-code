<demo>
加载状态
</demo>

<template>
  <div class="demo-component">
    <Button loading>Loading</Button>
    <Button>加载完毕</Button>
  </div>
</template>


<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button}
};
</script>