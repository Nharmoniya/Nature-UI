<demo>支持disabled</demo>
<template>
  <Input placeholder="请输入内容" v-model="input" disabled></Input>
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