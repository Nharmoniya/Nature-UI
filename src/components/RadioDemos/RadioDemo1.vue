<demo>常规用法</demo>
<template>
  <Radio name="sex" label="男" v-model="value" ></Radio>
  <Radio name="sex" label="女" v-model="value"></Radio>
</template>

<script>
import Radio from '../../lib/Radio.vue';
export default {
  data(){
    return{
      value:null,
    }
  },
  components: {Radio},
  setup(){

  },
};
</script>

<style scoped>

</style>