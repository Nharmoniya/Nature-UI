<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/home">
      <img src="../assets/Logo.png" class="toplogo" alt="logo" title="返回首页"/>
      </router-link>
    </div>
    <ul class="menu">
      <li>
       <router-link to="/doc">组件</router-link>
      </li>
      <li>
        <router-link to="/helper">指南</router-link>
      </li>
      <li>
        <router-link to="/theme">主题</router-link>
      </li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
  <hr/>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  background: white;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  border-bottom:2px solid #dcdfe6;
  > .toplogo{
    >span{
      font-size: 48px;
    }
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    list-style: none;
    margin-right: 30px;
    height: 100%;
    > li {
      margin: 0 1em;
      color: #52c41a;
      font-size: 16px;
      .router-link-exact-active{
        color: #237804;
        border-bottom: 3px solid green;
      }
    }
    >li:hover{
      color: #237804;
      cursor: pointer;
    }

  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    border: 1px solid red;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
a{
  text-decoration: none;
  color: #52c41a;
}

</style>