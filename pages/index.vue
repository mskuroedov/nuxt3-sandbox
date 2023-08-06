<script setup lang="ts">
const { count } = useCounter();
</script>
<script lang="ts">
import RadialProgressBar from 'vue3-radial-progress';
export default {
  components: {
    RadialProgressBar,
  },
};
</script>

<template>
  <Deadline
    title="Exelo xSocks"
    :startDate="'2023-07-24'"
    :endDate="'2023-08-13'"
    :done="10"
    :total="20"
  />
</template>
