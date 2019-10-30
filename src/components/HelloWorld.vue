<template>
  <div class="content">
    <p class="greeting">{{ msg }}</p>
    <img :src="require('assets/img/jump.jpg')" class="person-img" alt="jump">
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

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.greeting {
  color: $green;
  font-size: 32px;
  font-weight: bold;
}
.person-img {
  width: 320px;
  height: 400px;
  border: 1px solid #000;
}
</style>
