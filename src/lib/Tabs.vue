<template>
  <div>Tabs组件</div>
  <component :is="defaults[0]"></component>
  <component :is="defaults[1]"></component>
</template>

<script lang="ts">
import Tab from './Tab.vue';
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error('Tabs子标签必须是Tab');
      }
    });
    return {defaults};
  }
};
</script>
