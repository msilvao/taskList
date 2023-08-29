<template>
  <div class="task-form">
    <input
      v-model="newTaskTitle"
      type="text"
      placeholder="Type the title of the new task here.."
    />

    <input
      v-model="newTaskdescription"
      type="text"
      placeholder="Type the task description here.."
    />

    <button @click="addTask">ADD TASK</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
      newTaskdescription: "",
    };
  },
  methods: {
    addTask() {
      const newTask = {
        title: this.newTaskTitle,
        description: this.newTaskdescription,
      };
      this.task.push(newTask);

      this.newTaskTitle = "";
      this.newTaskdescription = "";
    },
  },
};
</script>

<style>
/*STYLE HERE */
</style>
