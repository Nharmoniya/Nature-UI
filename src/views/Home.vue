<template>
  <div >
    <div class="topnavAndBanner">
    <Topnav/>
    <main class="banner">
      <h1>Nature UI</h1>
      <h2>一个以绿色为主题，基于Vue3.0的桌面组件库</h2>
      <h3>源代码采用 TypeScript 书写,CSS预处理器为SCSS</h3>
      <p class="actions">
        <a href="https://github.com" title="获取源码" >GitHub</a>
        <router-link to="/doc/introduce" title="开始教程">开始</router-link>
      </p>
    </main>
    </div>
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
  background-image: url('../assets/background.png');
  min-height: 100vh
}
.banner {
  padding: 220px 0px;
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
  display: flex;
  color: #237804;
  justify-content: center;

  .foot-content{
   margin-top: 30px;
  }
}
a{
  text-decoration: none;
  color: #237804;
}
</style>