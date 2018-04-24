<template>
  <span class="t-menu__item-content">
    <i v-if="data.icon" :class="['t-menu__icon', data.icon]"></i>
    <template v-if="!isCollsape">
      {{ data.name }}
      <i v-if="data.subMenu" class="fa fa-caret-down"></i>
    </template>
  </span>
</template>
<script>
import Emitter from '../../mixins/emitter'
export default {
  name: 't-menu-item-drop',

  mixins: [Emitter],

  props: {
    data: {},
    isCollsape: Boolean,
    defaultItemMode: String
  }
}
</script>

<style scoped>

</style>
