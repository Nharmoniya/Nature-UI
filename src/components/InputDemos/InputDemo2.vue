<demo>密文的密码输入框</demo>
<template>
  <Input intype="password" placeholder="请输入内容" v-model="input"></Input>
</template>

<script lang="ts">
import Input from '../../lib/Input.vue';
export default {
  components: {
    Input,
  },
  data(){
    return{
      input:''
    }
  },

};
</script>

<style scoped>

</style>