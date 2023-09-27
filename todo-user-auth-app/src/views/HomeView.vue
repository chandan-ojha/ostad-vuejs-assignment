<script setup>
import { ref, reactive } from "vue";
const tasks = ref([]);

const task = reactive({
  name: "",
});

const getTask = () => {
  const taskList = JSON.parse(localStorage.getItem("task_list"));
  return taskList;
};

const addTask = () => {
  const taskList = getTask();
  if (taskList) {
    tasks.value = [...taskList, task];
    localStorage.setItem("task_list", JSON.stringify(tasks.value));
  } else {
    tasks.value = [task];
    localStorage.setItem("task_list", JSON.stringify(tasks.value));
  }
  task.name = "";
};
</script>

<template>
  <div class="px-96 pb-8">
    <p>{{ getTask() }}</p>
    <h1 class="text-3xl font-semibold mb-4 text-center">Todo App</h1>
    <div class="mb-4 flex items-center">
      <input
        v-model="task.name"
        type="text"
        id="task-input"
        class="w-3/4 border p-2"
        placeholder="Add a new task..."
      />

      <button
        @click="addTask"
        type="button"
        id="add-task"
        class="w-1/4 ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </div>

    <!-- Incomplete Task List -->
    <div class="bg-white rounded shadow-lg p-4">
      <h2 class="text-xl font-semibold mb-2">Incomplete Tasks</h2>
      <ul
        id="todo-list"
        class="space-y-4"
        v-for="(taskitem, index) in getTask()"
        :key="index"
      >
        <li class="flex justify-between items-center">
          <label class="flex items-center space-x-2">
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-2">{{ taskitem.name }}</span>
          </label>
          <button class="text-blue-500 hover:text-blue-600">Edit</button>
        </li>
      </ul>
    </div>

    <!-- Completed Task List -->
    <div class="bg-green-100 rounded shadow-lg p-4 mt-4">
      <h2 class="text-xl font-semibold mb-2">Completed Tasks</h2>
      <ul id="completed-list" class="space-y-4">
        <li class="flex justify-between items-center">
          <label class="flex items-center space-x-2">
            <span class="line-through ml-2 text-green-700">
              Completed Task 1
            </span>
          </label>
          <button class="text-red-500 hover:text-red-600">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>
