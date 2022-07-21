<template>
  <div class="nature-input-main">
    <input :type="intype"
           class="nature-input"
           :disabled="disabled"
           :placeholder="placeholder"
           :maxlength="maxlength"
           :clearable="clearable"
           v-model="form"/>
    <span v-if="shwordlimit" class="show-word-limit">{{ this.form.length }}/{{ maxlength }}</span>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    intype: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
    },
    maxlength: {
      type: String,
    },
    shwordlimit: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      form: '',
    };
  }
};
</script>

<style lang="scss">
.nature-input-main {
  position: relative;

  .nature-input {
    display: inline-block;
    height: 40px;
    width: 300px;
    position: relative;
    border: none;
    border-radius: 6px;
    box-shadow: 0 0 3px fade_out(black, 0.8);
    top: 5px;
    padding: 0 12px;
    margin: 5px;
    font-size: 18px;
    color: grey;
    &[disabled] {
      cursor: not-allowed;
      color: grey;
    }
    &:focus {
      border: none;
      outline: 1.8px solid #52c41a;
    }
  }

  .show-word-limit {
    position: absolute;
    background-color: white;
    height: 50%;
    top: 50%;
    transform: translate(-50px, -7px);
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    pointer-events: none;
  }
}


</style>