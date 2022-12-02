<template>
  <div class="a-list">
    app-order-list
    <p v-for="item in list" :key="item">{{item}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3]
    }
  }
}
</script>

<style scoped>
.a-list {
  border: 1px solid blue;
  width: 200px;
}
</style>