<template>
  <div class="nature-tabs">
    <div class="nature-tabs-nav" ref="container">
      <div class="nature-tabs-nav-item" v-for="(t,index) in titles" :ref="el => { if (t===selected) selectedItem = el }"
           @click="select(t)" :class="{selected: t=== selected}" :key="index">{{ t }}
      </div>
      <div class="nature-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="nature-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts" >
import Tab from './Tab.vue';
import {
  onMounted,
  ref,
  watchEffect,
  computed} from 'vue';
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props,context){
    //使用ref获取selected的元素
    const selectedItem = ref< HTMLDivElement >(null);
    const indicator = ref< HTMLDivElement >(null);
    const container = ref< HTMLDivElement >(null);
    //onmouted中的watcheffect（即在构建中的更新，钩子嵌套)
    onMounted(() => {
      watchEffect(() => {
        const {
          width
        } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {
          left: left1
        } = container.value.getBoundingClientRect();
        const {
          left: left2
        } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + 'px';
      })
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected);
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return{
      current,
      titles,
      select,
      defaults,
      selectedItem,
      indicator,
      container,
    }
  }
};
</script>

<style lang="scss">
$green: #52c41a;
$color: #333;
$border-color: #d9d9d9;

.nature-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $green;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $green;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>