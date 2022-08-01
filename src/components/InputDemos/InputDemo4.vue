<demo>支持限制输入文字数量</demo>
<template>
  <Input intype="password" placeholder="请输入内容" v-model="input" maxlength="20"></Input>
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