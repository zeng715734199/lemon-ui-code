<demo>
常规
</demo>

<template>
  <div class="demo-component">
    <Button>Default Button</Button>
    <Button theme="link">Link Button</Button>
    <Button theme="text">Text Button</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button}
};
</script>