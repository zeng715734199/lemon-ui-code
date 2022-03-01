<demo>
不可用状态
</demo>

<template>
  <div class="demo-component">
    <Button disabled>Disabled</Button>
    <Button theme="link" disabled>Disabled Link</Button>
    <Button theme="text" disabled>Disabled Text</Button>
  </div>
</template>


<script lang="ts">
import {Button} from '../lib/index';

export default {
  components: {Button}
};
</script>