<template>
  <label class="nature-label-checkbox">
  <span  class="radios-border" >
  <input type="radio" :disabled="disabled" :value="label" :name="name" :checked="checked"/>{{label}}
    <span class="show-box"></span>
  </span>
  </label>
</template>

<script>
export default {
  props:{
    disabled:{
      type:Boolean,
      default:false,
    },
    label:{
      type:String,
    },
    border:{
      type:Boolean,
      default: false,
    },
    name:{
      type:String,
    },
    checked:{
      type:Boolean,
      default:false,
    }
  }
};
</script>

</style>