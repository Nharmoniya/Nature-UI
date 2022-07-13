<template>
  <button class="nature-button" :class="classes" :disabled="disable">
    <span v-if="loading" class="nature-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script lang="ts" setup="props">
import {computed} from 'vue';
//声明props
declare const props: {
  theme?: 'button' | 'text' | 'link',
  size?: 'normal' | 'big' | 'small',
  level?: 'normal' | 'main' | 'danger',
  disable: boolean,
  loading: boolean,
};
export default {
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
    level: {
      type: String,
      default: 'normal',
    },
    disable: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    }
  }
};
const {theme, size, level} = props;
export const classes = computed(() => {
  return {
    [`nature-theme-${theme}`]: theme,
    [`nature-size-${size}`]: size,
    [`nature-level-${level}`]: level,
  };
});
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$green:#52c41a;
$radius: 8px;
$red: red;
$grey: grey;
.nature-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
& + & {
    margin-left: 8px;
  }
&:hover,
&:focus {
   color: $green;
   border-color: $green;
 }
&:focus {
   outline: none;
 }
&::-moz-focus-inner {
   border: 0;
 }
&.nature-theme-link {
   border-color: transparent;
   box-shadow: none;
   color: $green;
&:hover,
&:focus {
   color: lighten($green, 10%);
 }
}
&.nature-theme-text {
   border-color: transparent;
   box-shadow: none;
   color: inherit;
&:hover,
&:focus {
   background: darken(white, 5%);
 }
}
&.nature-size-big {
   font-size: 24px;
   height: 48px;
   padding: 0 16px;
 }
&.nature-size-small {
   font-size: 12px;
   height: 20px;
   padding: 0 4px;
 }
&.nature-theme-button {
&.nature-level-main {
   background: $green;
   color: white;
   border-color: $green;
&:hover,
&:focus {
   background: darken($green, 10%);
   border-color: darken($green, 10%);
 }
}
&.nature-level-danger {
   background: $red;
   border-color: $red;
   color: white;
&:hover,
&:focus {
   background: darken($red, 10%);
   border-color: darken($red, 10%);
 }
}
}
&.nature-theme-link {
&.nature-level-danger {
   color: $red;
&:hover,
&:focus {
   color: darken($red, 10%);
 }
}
}
&.nature-theme-text {
&.nature-level-main {
   color: $green;
&:hover,
&:focus {
   color: darken($green, 10%);
 }
}
&.nature-level-danger {
   color: $red;
&:hover,
&:focus {
   color: darken($red, 10%);
 }
}
}
&.nature-theme-button {
&[disabled] {
   cursor: not-allowed;
   color: $grey;
&:hover {
   border-color: $grey;
 }
}
}
&.nature-theme-link, &.nature-theme-text {
&[disabled] {
   cursor: not-allowed;
   color: $grey;
 }
}
> .nature-loadingIndicator{
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 4px;
  border-radius: 8px;
  border-color: $green $green $green transparent;
  border-style: solid;
  border-width: 2px;
  animation: nature-spin 1s infinite linear;
}
}
@keyframes nature-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>