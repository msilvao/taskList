<template>
  <div class="task-list">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  components: {
    TaskItem,
  },
  data() {
    return {
      tasks: [
        { id: 1, title: "Tarefa 1", description: "Descrição da tarefa 1" },
        { id: 2, title: "Tarefa 2", description: "Descrição da tarefa 2" },
      ],
    };
  },
};
</script>

<style>
/* STYLES */
</style>
