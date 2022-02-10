<template>
  <div>导航栏
    |
    <router-link to="/">hello</router-link>
    |
    <router-link to="/xxx">handsome</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>
