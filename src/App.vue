<template>
  <div class="root">
    <div class="toolbar">
      <router-link :to="{name: 'home'}">Contacts</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
  @import './style.scss';
</style>
