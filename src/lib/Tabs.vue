<template>
  <div class="lemon-tabs">
    <div class="lemon-tabs-nav">
      <div class="lemon-tabs-nav-item"
           :class="{selected: t === selected}"
           @click="select(t)"
           v-for="(t,index) in titles" :key="index">{{ t }}</div>
    </div>
    <div class="lemon-tabs-content">
      <component class="lemon-tabs-content-item"
                 :class="{selected: c.props.title === selected}"
                 v-for="(c,index) in defaults" :is="c" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error('Tabs子标签必须是Tab');
      }
    });
    const titles = defaults.map((tag) => { return tag.props.title; });
    const select = (title: String) => {
      context.emit('update:selected', title)
    }
    return {defaults, titles, select};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.lemon-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected{
        display: block;
      }
    }
  }
}
</style>