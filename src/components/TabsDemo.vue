<template>
  <h1>Tabs示例</h1>
  <demo :component="Tabs1Demo"/>
</template>


<script lang="ts">
import demo from './demo.vue';
import Tabs1Demo from './Tabs1.demo.vue'

export default {
  components: {demo},
  setup(){
    return {Tabs1Demo}
  }
}
</script>