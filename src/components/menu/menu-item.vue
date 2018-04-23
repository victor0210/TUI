<!--<template>-->
  <!--<li-->
    <!--class="t-menu__item"-->
    <!--:class="[-->
      <!--isActive ? 'is-active' : ''-->
    <!--]"-->
    <!--:style="{-->
      <!--height: itemHeight-->
    <!--}"-->
  <!--&gt;-->
    <!--<div class="t-menu__item-wrapper" ref="wrapper">-->
      <!--<span-->
        <!--class="t-menu__item-content"-->
        <!--@click="checkout"-->
      <!--&gt;-->
        <!--<i-->
          <!--v-if="data.icon"-->
          <!--:class="[-->
            <!--'t-menu__icon',-->
            <!--data.icon-->
        <!--]"></i>{{ data.name }}-->
        <!--<i class="t-menu__drop-icon fa fa-caret-right" v-if="data.subMenu"></i>-->
      <!--</span>-->
      <!--<ul v-if="data.subMenu" class="t-menu__submenu">-->
        <!--<t-menu-item v-for="(i, idx) in data.subMenu" :key="idx" :data="i" :active-index="activeIndex" :$idx="getIndex(idx)"/>-->
      <!--</ul>-->
    <!--</div>-->
  <!--</li>-->
<!--</template>-->

<!--<script>-->
<!--import Emitter from '../../mixins/emitter'-->
<!--export default {-->
  <!--name: 't-menu-item',-->

  <!--mixins: [Emitter],-->

  <!--data () {-->
    <!--return {-->
      <!--itemHeight: 56,-->
      <!--heightCache: ''-->
    <!--}-->
  <!--},-->
  <!--props: {-->
    <!--data: {},-->
    <!--activeIndex: '',-->
    <!--$idx: '',-->
  <!--},-->

  <!--methods: {-->
    <!--checkout () {-->
      <!--this.dispatch('t-menu', 'item-checkout', this.$idx)-->
    <!--},-->
    <!--getIndex (idx) {-->
      <!--return `${this.$idx}-${idx}`-->
    <!--},-->
  <!--},-->

  <!--computed: {-->
    <!--isOpen () {-->
      <!--return this.activeIndex.toString().indexOf(this.$idx.toString()) === 0-->
    <!--},-->
    <!--isActive () {-->
    <!--}-->
  <!--},-->

  <!--watch: {-->
    <!--activeIndex () {-->
      <!--this.itemHeight = this.heightCache-->
      <!--this.itemHeight = this.isActive ? `${this.$refs.wrapper.offsetHeight}px`: '56px'-->
      <!--this.heightCache = this.itemHeight-->
      <!--this.isActive && setTimeout(() => {-->
        <!--this.itemHeight = 'auto'-->
      <!--}, 200)-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
