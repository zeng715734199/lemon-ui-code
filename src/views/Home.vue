<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>柠檬UI</h1>
        <h2>一个厉害的 UI 框架</h2>
        <p class="actions">
          <a href="https://gitee.com/zeng715734199">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav},
};
</script>
<style lang="scss" scoped>
$green: #216f73;
$border-radius: 5px;
$color: #548e15;
.topnavAndBanner {
  background: linear-gradient(315deg, rgba(176, 236, 211, 1) 0%, rgba(251, 237, 149, 1) 100%);
}
.features > svg{
  height: 64px;
  width: 64px;
}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      text-decoration: none;
    }
  }
}
</style>