<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1 style="font-weight: bold; font-size: 64px">Lemon UI</h1>
        <h2>一个基于Vue 3.0 的 UI 框架</h2>
        <p class="actions">
          <a href="https://gitee.com/zeng715734199">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
        <svg class="lemon">
          <use xlink:href="#icon-lemon"></use>
        </svg>
        <svg class="lemon">
          <use xlink:href="#icon-lemon"></use>
        </svg>
        <svg class="lemon">
          <use xlink:href="#icon-lemon"></use>
        </svg>
        <svg class="lemon">
          <use xlink:href="#icon-lemon"></use>
        </svg>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
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
$yellow: #fee125;
$border-radius: 5px;
$color: #331b00;
.topnavAndBanner {
  background: linear-gradient(90deg, rgba(254, 218, 178, 1) 0%, rgba(254, 252, 236, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  margin: 64px auto;
  padding: 0 20px;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
      "icon title"
      "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}

.banner {
  position: relative;
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;
  overflow: hidden;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $yellow;
      color: $color;
      font-weight: bold;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.lemon {
  height: 230px;
  width: 230px;
  position: absolute;
  right: 0;
  bottom: 4%;
  z-index: -1;
  animation: lemon-rotate infinite linear 8s;
}

.lemon + .lemon {
  height: 180px;
  width: 180px;
  position: absolute;
  left: -4%;
  bottom: 5%;
  animation: lemon-rotate infinite linear 8s;
}

.lemon + .lemon + .lemon {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 60%;
  top: 0;
  animation: lemon-rotate infinite linear 8s;
}

.lemon + .lemon + .lemon + .lemon {
  height: 200px;
  width: 200px;
  position: absolute;
  left: 40%;
  top: 70%;
  animation: lemon-rotate infinite linear 8s;
}

@keyframes lemon-rotate {
  from {
    transform: none;
  }
  to{
    transform: rotate(360deg);
  }
}
@media (max-width: 500px) {
  .lemon + .lemon + .lemon + .lemon {
    display: none;
  }
}
</style>