<template>
  <div class="lemon-tabs">
    <div class="lemon-tabs-nav" ref="container">
      <div class="lemon-tabs-nav-item"
           :class="{selected: t === selected}"
           @click="select(t)"
           v-for="(t,index) in titles" :key="index"
           :ref="(el) => { if(t === selected) selectedItem = el }">{{ t }}
      </div>
      <div class="lemon-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="lemon-tabs-content">
      <component class="lemon-tabs-content" :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">

import Tab from './Tab.vue';
import {computed, onMounted, ref, watchEffect} from 'vue';

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
      context.emit('update:selected', title);
    };

    const current = computed(()=>{
      return defaults.find(tag => tag.props.title === props.selected)
    })

    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const selectedItem = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
            const {width} = selectedItem.value.getBoundingClientRect();
            indicator.value.style.width = width + 'px';
            const {left: left1} = selectedItem.value.getBoundingClientRect();
            const {left: left2} = container.value.getBoundingClientRect();
            const left = left1 - left2;
            indicator.value.style.left = left + 'px';
          }
      );
    });
    return {defaults, titles, select, current, indicator, container, selectedItem};
  }
};
</script>

<style lang="scss">
$orange: #fe9925;
$color: #333;
$border-color: #d9d9d9;
.lemon-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $orange;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $orange;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>