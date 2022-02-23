<template>
  <h1 class="title">Vite Vue3 Starter</h1>
  <h2 @click="handleBtnClick">heora</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handleBtnClick = () => {
      window.location.href = 'https://www.yueluo.club';
    };

    return {
      handleBtnClick
    };
  }
});
</script>

<style lang="less" scoped>
h2 {
  cursor: pointer;
  color: #409eff;
}
</style>
