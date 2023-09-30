<script setup>
import { reactive } from "vue";
import { taskStore } from "../stores/taskStore";

const task = taskStore();

const taskData = reactive({
  name: "",
  status: "undone",
});
</script>

<template>
  <div class="px-96 pb-8">
    <h1 class="text-3xl font-semibold mb-4 text-center">Todo App</h1>
    <div class="mb-4 flex items-center">
      <input
        v-model="taskData.name"
        type="text"
        id="task-input"
        class="w-3/4 border p-2"
        placeholder="Add a new task..."
      />

      <button
        @click="task.addTask(taskData)"
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
        v-for="(itask, index) in task.incompleteTask"
        :key="index"
      >
        <li class="flex justify-between items-center">
          <label class="flex items-center space-x-2">
            <input
              @click="task.changeStatus(index)"
              type="checkbox"
              class="form-checkbox"
            />
            <span class="ml-2">{{ itask.name }}</span>
          </label>
        </li>
      </ul>
      <p
        v-if="task.incompleteTask.length === 0"
        class="text-center text-gray-500"
      >
        No task added yet. Please add a new task !
      </p>
    </div>

    <!-- Completed Task List -->
    <div class="bg-green-100 rounded shadow-lg p-4 mt-4">
      <h2 class="text-xl font-semibold mb-2">Completed Tasks</h2>
      <ul
        id="completed-list"
        class="space-y-4"
        v-for="(ctask, index) in task.completedTask"
        :key="index"
      >
        <li class="flex justify-between items-center">
          <label class="flex items-center space-x-2">
            <span class="line-through ml-2 text-green-700">
              {{ ctask.name }}
            </span>
          </label>
          <button
            @click="task.deleteTask(index)"
            class="text-red-500 hover:text-red-600"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
