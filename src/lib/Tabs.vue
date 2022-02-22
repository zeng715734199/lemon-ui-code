<template>
  <div>Tabs组件</div>
  <div v-for="(t,index) in titles" :key="index">{{t}}</div>
  <component v-for="(c,index) in defaults" :is="c" :key="index"></component>
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
    const titles = defaults.map((tag) =>{ return  tag.props.title })
    return {defaults, titles};
  }
};
</script>
