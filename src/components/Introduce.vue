<template>
  <article class="markdown-body">
    <h1>介绍</h1>
    <p><code>Nature-UI</code>是一个以绿色为主题的UI组件库。</p>
    <p>基于<code>Vue3</code>的最新语法和<code>Typescript</code>以及<code>SCSS</code>。</p>
    <p>全程不使用任何第三方组件库，略微参考个别组件库的UI风格。</p>
    <p>这款组件库其实是我为了学习Vue3所编写的，全程亲手编写，尽量不采用第三方库，包括你现在看到的这个官网也几乎都是我本人自己写的，<strong>适配了手机端</strong>。</p>
    <h1>源码</h1>
    <p>本人并不建议你将此 UI 库用于生产环境。但如果你是抱着看源代码的目的来的，那么这个库还是值得一看的。源代码放在了 [GitHub](<a href="https://github.com/Nharmoniya/Nature-UI" target="_blank">地址</a>)。你也可以直接查看每个组件的源代码和示例，运行方法见 README.md。</p>
    <h1>安装</h1>
    <p>打开终端运行下面的命令</p>
    <pre><code>npm install nature-ui</code></pre>
    <p>或</p>
    <pre><code>yarn add nature-ui</code></pre>
    <p>下一节：<router-link to="/doc/switch">开始使用</router-link></p>
  </article>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
article{
  padding: 24px;
  background-color: white;
  color: #1d2c40;
  >pre{
    background-color:rgb(245,247,249);
  }
  >p{
    >code{
      background-color:rgb(243,244,244);
    }
    >a{
      text-decoration: none;
      color: #52c41a;
    };
  }
}
</style>