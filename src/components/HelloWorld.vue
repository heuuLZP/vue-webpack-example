<template>
  <div class="content">
    <p class="greeting">{{ msg }}</p>
    <img :src="require('assets/img/jump.jpg')" class="person-img" alt="jump">
    <p>star：{{count}}</p>
  </div>
</template>

<script>
import { add } from 'utils/math';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hello World',
      count: 0
    }
  },
  mounted() {
    this.count = add(2, 10);
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
