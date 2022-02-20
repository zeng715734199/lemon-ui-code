<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnclickOverlay="true" :ok="f1" :cancel="f2">
   <template v-slot:title>
     <strong>加粗的标题</strong>
   </template>
    <template v-slot:content>
      <strong>加粗的内容</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => { return false;};
    const f2 = () => {};
    return {x, toggle, f1, f2};
  }
};
</script>