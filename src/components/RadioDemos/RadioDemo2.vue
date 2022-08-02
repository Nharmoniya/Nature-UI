<demo>支持checked已选中</demo>
<template>
  <Radio name="sex1" label="男" v-model="value" checked></Radio>
  <Radio name="sex1" label="女" v-model="value"></Radio>
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