<template>
  <span class="t-breadcrumb-item">
    <span class="t-breadcrumb-item__router" v-if="to">
      <router-link
        :to="to"
        :replace="replace"
        :append="append"
      >
        <slot/>
      </router-link>
    </span>
    <span v-else><slot/></span>
    <span class="t-breadcrumb-item__separator" v-if="separator && !separatorIcon">{{ separator }}</span>
    <span class="t-breadcrumb-item__separator" v-if="separatorIcon"><i :class="separatorIcon"></i></span>
  </span>
</template>

<script>
export default {
  name: "t-breadcrumb-item",

  props: {
    separator: String,
    separatorIcon: String,
    //  router link props
    to: String,
    replace: Boolean,
    append: Boolean
  }
}
</script>

<style scoped>

</style>
