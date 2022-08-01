<template>
  <label class="nature-label-checkbox" >
    <input type="checkbox"  :checked="checked" :disabled="disabled" @click="toggle"/>
    <span class="show-box"></span>
  </label>
  <span v-if="label" class="label-content">{{label}}</span>
</template>

<script lang="ts">

export default {
  props:{
    border:{
      type:Boolean,
      default:false,
    },
    disabled:{
      type:Boolean,
      default:false,
    },
    checked:{
      type:Boolean,
      default: false,
    },
    label:{
      type:String
    },
    value:{
      type:String
    }
  },
  setup(props,context){
    const toggle = () =>{
      context.emit('update:value',props.value)
      console.log(props.value)
    }
    return{
      toggle
    }
  }
};
</script>

<style lang="scss">
label.nature-label-checkbox {
  position: relative;
  margin-top: 5px;
  padding-left: 10px;
}

label.nature-label-checkbox input {
  visibility: hidden;

}
input:checked+.show-box {/*+:表示元素的下一个元素*/
  background: #52c41a;
  border: 1px solid #52c41a;
  transition: all .25s;
}
input:checked:hover+.show-box {/*+:表示元素的下一个元素*/
  background: #52c41a;
  border: 1px solid #52c41a;
  transition: all .25s;
}
input:hover+.show-box {/*+:表示元素的下一个元素*/
  background: #fff;
  border: 1px solid #52c41a;
  transition: all .25s;

}

.show-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 1px;
  border: 1px solid #d8d8d8;
  background: white;
  border-radius: 2px;
  padding-left: 10px;

}

.show-box:before {
  content: '';
  position: absolute;
  top: 1px;
  left: 4px;
  width: 6px;
  height: 9px;
  border: 1px solid white;
  border-width: 0px 2px 2px 0;
  transform: rotate(45deg);
  border-radius: 2px;

}

</style>