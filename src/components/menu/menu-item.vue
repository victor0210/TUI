<template>
  <li
    class="t-menu__item"
    :class="[
      isActive ? 'is-active' : '',
      isOpen ? 'is-open' : ''
    ]"
    :style="{
      height: itemHeight
    }"
  >
    <div class="t-menu__item-wrapper" ref="wrapper">
      <span
        class="t-menu__item-content"
        @click="checkout"
      >
        <i
          v-if="data.icon"
          :class="[
            't-menu__icon',
            data.icon
        ]"></i>{{ data.name }}
        <i class="t-menu__drop-icon fa fa-chevron-right" v-if="data.subMenu"></i>
      </span>
      <ul v-if="data.subMenu" class="t-menu__submenu">
        <t-menu-item v-for="(i, idx) in data.subMenu" :key="idx" :data="i" :active-index="activeIndex" :$idx="getIndex(idx)"/>
      </ul>
    </div>
  </li>
</template>

<script>
import Emitter from '../../mixins/emitter'
export default {
  name: 't-menu-item',

  mixins: [Emitter],

  provide: {
    TMenuItem: this
  },

  inject: {
    TMenuItem: {
      default: ''
    }
  },

  data () {
    return {
      itemHeight: 56,
      heightCache: '',
      isOpen: false,
      collsapeTimeout: null,
      heightMutation: false
    }
  },
  props: {
    data: {},
    activeIndex: '',
    $idx: '',
  },

  created () {
    this.$on('sub-open', this.handleSubOpen)
  },

  mounted () {
    this.isOpen = this.activeIndex === this.$idx
  },

  methods: {
    handleSubOpen () {
      this.isOpen = true
    },
    checkout () {
      if (this.activeIndex === this.$idx) {
        this.isOpen = !this.isOpen
      } else {
        this.dispatch('t-menu', 'item-checkout', this.$idx)
      }
    },
    getIndex (idx) {
      return `${this.$idx}-${idx}`
    }
  },

  computed: {
    isActive () {
      return this.activeIndex === this.$idx
    }
  },

  watch: {
    activeIndex (val) {
      if (val === this.$idx) {
        this.isOpen = !this.isOpen
      }
    },
    isOpen (val) {
      let needMutation = val && this.TMenuItem && !this.$parent.isOpen

      clearTimeout(this.collsapeTimeout)
      if (!val) {
        this.itemHeight = `${this.$refs.wrapper.offsetHeight}px`
      }
      if (needMutation) {
        this.itemHeight = 'auto'
      } else {
        setTimeout(() => {
          this.itemHeight = val ? `${this.$refs.wrapper.offsetHeight}px` : '56px'
          val && (this.collsapeTimeout = setTimeout(() => {
            this.itemHeight = 'auto'
          }, 300))
        })
      }
      needMutation && this.dispatch('t-menu-item', 'sub-open')
    }
  }
}
</script>

<style scoped>

</style>
