<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            Switch 开关
            <router-link to="/doc/switch"></router-link>
          </li>
          <li>
            Button 按钮
            <router-link to="/doc/button"></router-link>
          </li>
          <li>
            Dialog 对话框
            <router-link to="/doc/dialog"></router-link>
          </li>
          <li>
            Tabs 标签
            <router-link to="/doc/tabs"></router-link>
          </li>
        </ol>
      </aside>
      <main class="content-box">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return { menuVisible };
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  margin-top: 20px;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
  }
}
aside {
  background: white;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
    margin-top: 20px;
  }
  > ol {
    list-style: none;
    > li {
      padding: 8px 0;
      color: #52c41a;
    }
    >li:hover{
      color: #237804;
      cursor: pointer;
    }
  }
}
main {
  overflow:auto;
}
a{
  text-decoration: none;
}
</style>