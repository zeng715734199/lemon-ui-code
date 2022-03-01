<demo>
常规使用
</demo>

<template>
  <div class="demo-component">
    <Button @click="toggle">Open Dialog</Button>
    <Dialog v-model:visible="x" :closeOnclickOverlay="false" :ok="f1" :cancel="f2">
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
      <template v-slot:content>
        <strong>加粗的内容</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {Button, Dialog} from '../lib/index';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => { return false;};
    const f2 = () => { return true;};
    return {x, toggle, f1, f2};
  }
};
</script>