<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">

export default {
  props: {
    content: {
      type: String,
      require: true
    }
  }
};
</script>