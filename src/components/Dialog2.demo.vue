<demo>
一键打开 Dialog
</demo>

<template>
  <div class="demo-component">
    <Button @click="showDialog">Open Dialog</Button>
  </div>
</template>

<script lang="ts">
import {Button, openDialog} from '../lib/index';

export default {
  components: {Button},
  setup() {
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '内容',
        ok: () => {return true;},
        cancel: () => { return true;},
        closeOnclickOverlay: true
      });
    };
    return {showDialog};
  }
};
</script>