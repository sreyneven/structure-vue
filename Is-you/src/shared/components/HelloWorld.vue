<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Click me !</a>
    </p>
    <dt><strong>Hey you !!</strong></dt>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>
