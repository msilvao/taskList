<template>
  <div class="task-item">
    <p>{{ task.title }}</p>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
};
</script>

<style scoped>
/* STYLES */
</style>
