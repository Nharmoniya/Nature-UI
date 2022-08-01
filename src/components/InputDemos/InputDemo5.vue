<demo>显示输入文字数量</demo>
<template>
  <Input intype="password" placeholder="请输入内容" v-model="input" maxlength="20" shwordlimit></Input>
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