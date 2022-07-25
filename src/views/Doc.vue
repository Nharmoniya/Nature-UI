<template>
  <div class="layout">
    <Topnav class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <ol>
          <li>
            <router-link to="/doc/introduce"><h3>简介</h3></router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/alert">Alert 消息弹窗</router-link>
          </li>
          <li>
            <router-link to="/doc/checkbox">Checkbox 多选框</router-link>
          </li>
          <li>
            <router-link to="/doc/radio">Radio 单选框</router-link>
          </li>
        </ol>
        <h2>其它原生</h2>
        <ol>
          <li>
            <router-link to="/doc/expandingcard">伸缩卡片</router-link>
          </li>
          <li>
            <router-link to="/doc/progresssteps">步骤条</router-link>
          </li>
          <li>
            <router-link to="/doc/hiddensearchwidget">隐藏式搜索框</router-link>
          </li>
        </ol>
        <h2>其它链接</h2>
        <ol class="expand-ol">
          <li>
            <router-link to="/doc/luckcatbook">幸运猫记账本</router-link>
          </li>
          <li>
            <router-link to="/doc/mapleleavesnote">枫叶笔记</router-link>
          </li>
        </ol>
      </aside>
      <main class="content-box">
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref,} from 'vue';

export default {
  components: {Topnav},
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible'); // get
    return {menuVisible};
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  position: absolute;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
    position: absolute;
  }

  > .content-box {
    overflow: auto;
  }

  > .content {
    flex-grow: 1;
    padding-left: 175px;
    padding-top: 75px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    overflow: auto;
    flex-grow: 1;
    padding: 40px 100px
  }
  @media(max-width: 500px) {
    > main {
      flex-grow: 1;
      padding: 20px 20px
    }
  }
}

aside {
  background: white;
  width: 260px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  height: 87%;
  //border-right: 2px solid #dcdfe6;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 10;
  margin-top: 90px;
  box-shadow: 0 0 10px fade_out(black, 0.8);

  > h2 {
    font-size: 20px;
    margin-bottom: 4px;
    margin-top: 8px;
    margin-left: 20px;
  }

  > ol {
    width: 100%;
    padding-right: 10px;
    margin-left: 6px;
    list-style: noen;

    > li {
      padding: 8px 0;

      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        color: #52c41a;
      }
    }

    li:hover {
      > a {
        color: #237804;
      }
    }
  }
}

.router-link-active {
  color: #237804;
  background-color: #d9f7be;
  border-right: 3px solid #73d13d;
  border-radius: 5%;
}
</style>