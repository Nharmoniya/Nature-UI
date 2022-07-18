<template>
  <Tabs>
    <Tab></Tab>
    <Tab></Tab>
  </Tabs>
</template>

<script>
import {Tabs} from '../lib/Tabs.vue'
import {ref} from 'vue'
export default {
  components:{
    Tabs,
  },
  setup(){
   const a = ref('导航1')
    return{
     a
    }
  }
};
</script>

<style scoped>

</style>