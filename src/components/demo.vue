<template>
  <div>
    <div class="demo">
      <h2>{{ component.__sourceCodeTitle }}</h2>
      <component :is="component"/>
      <div class="demo-actions">
        <Button @click="toggleCode">查看代码</Button>
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-css" v-html="html"></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import {computed, ref} from 'vue';
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';

const Prism = (window as any).Prism;
export default {
  props: {
    component: {
      type: Object
    }
  },
  components: {
    Button
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    const codeVisible = ref(false)
    const toggleCode = () => { codeVisible.value = !codeVisible.value}
    return {
      Switch1Demo, Switch2Demo, html, codeVisible,toggleCode
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>