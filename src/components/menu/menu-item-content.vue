<template>
  <span class="t-menu__item-content">
    <i v-if="data.icon" :class="['t-menu__icon', data.icon]"></i>
    <template v-if="!isCollsape">
      <template v-if="data.link">
        <a :href="data.link" :target="data.target" class="t-menu__link">{{ data.name }}</a>
      </template>
      <template v-else>
        {{ data.name }}
      </template>
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
    isCollsape: Boolean
  }
}
</script>

<style scoped>

</style>
