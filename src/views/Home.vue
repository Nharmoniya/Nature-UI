<template>
  <div>
    <div class="topnavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>Nature UI</h1>
      <h2>一个以绿色为主题，基于Vue3.0的桌面组件库</h2>
      <h3>源代码采用 TypeScript 书写,CSS预处理器为SCSS</h3>
      <p class="actions">
        <a href="https://github.com" title="获取源码" >GitHub</a>
        <router-link to="/doc" title="开始教程">开始</router-link>
      </p>
    </div>
    </div>
    <footer><span>作者:JasonTu | 微信：Cropsrain874572491 | <a href="https://www.zhihu.com/people/naturl-63/posts">博客：https://www.zhihu.com/people/naturl-63/posts</a></span></footer>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
.topnavAndBanner{
  background: linear-gradient(0deg, rgba(183,235,143,1) 0%, rgba(149,222,100,1) 49%, rgba(82,196,26,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  padding: 180px  0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >h1{
    margin-bottom: 20px;
  }
  >h2{
    margin-bottom: 15px;
  }
  > .actions{
    padding: 8px 0;
    margin-top: 60px;

    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 38px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
      text-decoration: none;
    }
    a:hover{
      transform: scale(1.2);
      //动画，0.08秒内，浅入
      -webkit-transition: all 80ms ease-in;
      color: #237804;
    }
  }
}
footer{
  transform: translateY(50%);
  color: #237804;
}
a{
  text-decoration: none;
  color: #237804;
}
</style>