<template></template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/shared/axios';

export default defineComponent({
  setup() {
    axios.get('/users/XPoet')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
})
</script>
