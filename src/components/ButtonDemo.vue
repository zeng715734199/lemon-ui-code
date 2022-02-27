<template>
  <div>
    <h1>Button示例</h1>
    <demo :component="Button1Demo"/>
    <demo :component="Button2Demo"/>
    <demo :component="Button3Demo"/>
    <demo :component="Button4Demo"/>
    <demo :component="Button5Demo"/>
  </div>
</template>

<script lang="ts">
import demo from './demo.vue'
import Button1Demo from './Button1.demo.vue'
import Button2Demo from './Button2.demo.vue'
import Button3Demo from './Button3.demo.vue'
import Button4Demo from './Button4.demo.vue'
import Button5Demo from './Button5.demo.vue'
export default {
  components: {demo},
  setup(){
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo
    }
  }
};
</script>