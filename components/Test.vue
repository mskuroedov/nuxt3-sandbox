<script setup lang="ts">
const { count, increment } = useCounter();
</script>

<template>
  <div>count:{{ count }}</div>
  <a href="#" @click="increment">inc</a>
</template>
