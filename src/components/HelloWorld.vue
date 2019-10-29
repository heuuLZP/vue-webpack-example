<template>
  <div>
    <p class="greeting">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hello World'
    }
  }
}
</script>

<style scoped>
.greeting {
  text-align: center;
  color: #009966;
  font-size: 32px;
  font-weight: bold;
}
</style>
