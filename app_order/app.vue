<template>
  <div id="app-container">
    <h1>app order</h1>
    <a-list />
    <hr>
    <app-button></app-button>
  </div>
</template>

<script>
import AList from './list.vue'
import appButton from '@appCommon/button';
// const appButton = import('@appCommon/button')
export default {
  components: {
    AList,
    appButton
  }
}
</script>

<style>
</style>