<demo>
常规使用
</demo>

<template>
  <div class="demo-component">
    <Tabs  v-model:selected="x">
      <Tab title="Tab1">Content of Tab Pane 1</Tab>
      <Tab title="Tab2">Content of Tab Pane 2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import {Tabs, Tab} from '../lib/index'

import {ref} from 'vue';
export default {
  components: {Tab, Tabs},
  setup(){
    const x = ref('Tab1')
    return {x}
  }
}
</script>