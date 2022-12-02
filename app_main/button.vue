<template>
  <div class="a-button">
    app-main-button, {{name}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'YES'
    }
  }
}
</script>

<style scoped>
.a-button {
  border: 1px solid red;
  width: 200px;
  height: 50px;
}
</style>