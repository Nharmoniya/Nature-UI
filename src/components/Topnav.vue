<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/home">
        <img src="../assets/Logo.png" class="toplogo" alt="logo" title="返回首页"/>
      </router-link>
      <span>Nature-UI</span>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc/introduce" >组件</router-link>
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
import {inject, Ref} from 'vue';

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible'); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  },
  // data() {
  //   return {
  //     r: '',
  //   };
  // },
  // methods: {
  //   selectType(r) {
  //     if (r !== '1' && r !== '2' && r !== '3') {
  //       throw new Error('type is unknown');
  //     }
  //     this.r = r;
  //     console.log(this.r);
  //   },
  // },
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
  border-bottom: 2px solid #dcdfe6;

  > .version-number {
    color: #237804;
  }

  > .toplogo {
    > span {
      font-size: 48px;
    }
  }

  > .logo {
    max-width: 12em;
    margin-right: auto;

    > span {
      color: #237804;
      font-size: 20px;
      font-family: "Arial";
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    list-style: none;
    margin-right: 30px;
    height: 100%;

    li {
      margin: 0 1em;
      color: #52c41a;
      font-size: 16px;
      z-index: 99;
      //动画，0.08秒内，浅入
      //-webkit-transition: all 50ms ease-in;
    }

    > li:hover {
      cursor: pointer;
      a {
        color: #237804;
      }
    }
  }

  > .toggleAside {
    width: 24px;
    height: 24px;
    background: green;
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

a {
  text-decoration: none;
  color: #52c41a;
}

//logo动画
.toplogo:hover {
  transform-origin: center bottom;
  animation: wave 1500ms infinite linear;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(15deg);
  }
  66% {
    transform: rotate(-15deg);
  }
  0% {
    transform: rotate(0deg);
  }
}
</style>