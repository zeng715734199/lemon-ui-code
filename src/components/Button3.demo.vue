<demo>
等级
</demo>

<template>
  <div class="demo-component">
    <div>
      <Button level="main">Primary</Button>
      <Button>Default</Button>
      <Button level="danger">Danger</Button>
    </div>
    <div>
      <Button theme="link" level="main">Primary Link</Button>
      <Button theme="link">Default Link</Button>
      <Button theme="link" level="danger">Danger Link</Button>
    </div>
    <div>
      <Button theme="text" level="main">Primary Text</Button>
      <Button theme="text">Default Text</Button>
      <Button theme="text" level="danger">Danger Text</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button}
};
</script>