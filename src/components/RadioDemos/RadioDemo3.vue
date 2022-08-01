<demo>支持disabled禁用</demo>
<template>
  <Radio name="sex" label="男" v-model="value" disabled></Radio>
  <Radio name="sex" label="女" v-model="value" disabled></Radio>
</template>

<script>
import Radio from '../../lib/Radio.vue';
export default {
  data(){
    return{
      value:[]
    }
  },
  components: {Radio},
  setup(){

  },
};
</script>

<style scoped>

</style>