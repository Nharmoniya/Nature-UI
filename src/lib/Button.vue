<template>
  <button class="nature-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="nature-loadingIndicator">
      <span class="box clear">
    <span class="one fl"></span>
    <span class="two fl"></span>
    <span class="three fl"></span>
    <span class="four fl"></span>
    <span class="five fl"></span>
     </span>
    </span>
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';
export default {
  //定义props接受的变量类型和默认值
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
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`nature-theme-${theme}`]: theme,
        [`nature-size-${size}`]: size,
        [`nature-level-${level}`]: level,
      };
    });
    return {
      classes
    };
  }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$green: #52c41a;
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
  //&+&的意思是两个button之间的间隙
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
  //theme为link的css
  &.nature-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $green;

    &:hover,
    &:focus {
      color: lighten($green, 10%);
    }
  }
  //theme为text的css
  &.nature-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  //size为big的css
  &.nature-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  //size为small的css
  &.nature-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  //theme为button，level为main的css
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
    //level为danger的css
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
  //theme为link，level为danger的css
  &.nature-theme-link {
    &.nature-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  //theme为text，level为main的css
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
  //theme为button，disable为true的css
  &.nature-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }
  //theme为link，disable为true的css
  &.nature-theme-link, &.nature-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  //loading为true时的css
  > .nature-loadingIndicator {
    transform: scale(0.8);
    display: inline-block;
    margin-right: 5px;
    .fl {
      float: left;
    }

    .one {
      width: 2px;
      height: 10px;
      margin-right: 3px;
      background-color: #90ee91;
      border-radius: 5px;
      animation: playing 1.5s;
      animation-iteration-count: infinite;
    }

    .two {
      width: 2px;
      height: 10px;
      margin-right: 3px;
      background-color: #90ee91;
      border-radius: 5px;
      animation: playing 1.5s;
      animation-iteration-count: infinite;
      animation-delay: 0.25s;
    }

    .three {
      width: 2px;
      height: 10px;
      margin-right: 3px;
      background-color: #90ee91;
      border-radius: 5px;
      animation: playing 1.5s;
      animation-iteration-count: infinite;
      animation-delay: 0.5s;
    }

    .four {
      width: 2px;
      height: 10px;
      margin-right: 3px;
      background-color: #90ee91;
      border-radius: 5px;
      animation: playing 1.5s;
      animation-iteration-count: infinite;
      animation-delay: 0.75s;
    }

    .five {
      width: 2px;
      height: 10px;
      background-color: #90ee91;
      border-radius: 5px;
      animation: playing 1.5s;
      animation-iteration-count: infinite;
      animation-delay: 1s;
    }
  }
}
//loading的动画
@keyframes playing {
  0% {
    width: 2px;
    height: 10px;
    background-color: #90ee91;
    transform: scale(1, 1);
  }
  50% {
    width: 2px;
    height: 10px;
    background-color: #acd8e4;
    transform: scale(1, 2);
  }
  0% {
    width: 2px;
    height: 10px;
    background-color: #90ee91;
    transform: scale(1, 1);
  }
}
</style>