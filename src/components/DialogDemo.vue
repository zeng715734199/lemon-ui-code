<template>
  <h1>Dialog示例</h1>
  <demo :component="Dialog1Demo"/>
  <demo :component="Dialog2Demo"/>
</template>

<script lang="ts">
import demo from './demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';

export default {
  components: {demo},
  setup() {
    return {Dialog1Demo, Dialog2Demo};
  }
};
</script>