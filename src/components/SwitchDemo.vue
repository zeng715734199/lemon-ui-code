<template>
  <div>
    <h1>Switch 组件示例 </h1>
      <demo :component="Switch1Demo"/>
      <demo :component="Switch2Demo"/>
  </div>
</template>

<script lang="ts">
import demo from './demo.vue'
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
export default {
  components: {
    demo
  },
  setup() {
    return {
      Switch1Demo,Switch2Demo
    };
  }
};
</script>
