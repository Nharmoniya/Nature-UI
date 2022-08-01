<demo>支持check默认已选择</demo>
<template>
  <div>
    <CheckBox checked label="option1"></CheckBox>
  </div>

</template>

<script lang="ts">
import CheckBox from '../../lib/Checkbox.vue';

export default {
  data(){
    return{
      value:[],
    }
  },
  components: {
    CheckBox
  },
  setup() {

  }
};
</script>

<style scoped>

</style>