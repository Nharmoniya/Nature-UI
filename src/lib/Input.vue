<template>
  <input :type="intype" class="nature-input" :disabled="disabled" :placeholder="placeholder"/>
</template>

<script>
export default {
  props: {
    intype: {
      type: String,
      default: 'text',
    },
    input: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
    }
  }
};
</script>

<style lang="scss">
.nature-input {
  width: 200px;
  height: 40px;
  position: relative;
  border: none;
  border-radius: 6px;
  box-shadow: 0 0 3px fade_out(black, 0.8);
  top: 5px;
  padding: 0 12px;
  margin: 5px;

  &[disabled] {
    cursor: not-allowed;
    color: grey;

  }
  &:focus {
    border: none;
    outline: 1.8px solid #52c41a;
  }

}

</style>