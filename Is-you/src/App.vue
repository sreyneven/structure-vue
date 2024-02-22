<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="I am me"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './shared/components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

