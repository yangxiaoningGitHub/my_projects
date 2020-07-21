<template>
  <div>
    <span>{{common}}</span>
    <slot></slot>
  </div>
</template>

  <script>
  export default {
    name: "common",
    data() {
      return {
        common:'这四公共组件'
      }
    }
  }
</script>

<style scoped>

</style>
