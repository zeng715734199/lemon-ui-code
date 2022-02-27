<demo>
尺寸
</demo>

<template>
  <div class="demo-component">
    <div>
      <Button size="big">Big</Button>
      <Button size="normal">Normal</Button>
      <Button size="small">Small</Button>
    </div>
    <div>
      <Button theme="link" size="big">Big Link</Button>
      <Button theme="link" size="normal">Normal Link</Button>
      <Button theme="link" size="small">Small Link</Button>
    </div>
    <div>
      <Button theme="text" size="big">Big Text</Button>
      <Button theme="text" size="normal">Normal Text</Button>
      <Button theme="text" size="small">Small Text</Button>
    </div>
  </div>
</template>


<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button}
};
</script>