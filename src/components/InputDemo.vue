<template>
  <div>Input实例</div>
  <Input intype="text" placeholder="请输入内容" v-model="input"></Input>
  <Input intype="password" ></Input>
  <Input intype="password" disabled ></Input>
  <Input intype="text" maxlength="40" shwordlimit></Input>
</template>

<script lang="ts">
import Input from '../lib/Input.vue';
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