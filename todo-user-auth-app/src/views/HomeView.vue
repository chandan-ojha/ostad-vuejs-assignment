<script setup>
import { ref, reactive, computed } from "vue";

const taskList = JSON.parse(localStorage.getItem("task_list")) || [];

const task = reactive({
  name: "",
  status: "undone",
});

//add task
const addTask = () => {
  if (task.name === "") {
    alert("Please enter a task");
    return;
  }
  taskList.push({
    name: task.name,
    status: task.status,
  });
  localStorage.setItem("task_list", JSON.stringify(taskList));
  task.name = "";
};

//incomplete task
const incompleteTask = computed(() => {
  return taskList.filter((task) => task.status === "undone");
});

//change task status
const changeStatus = (index) => {
  taskList[index].status = "done";
  localStorage.setItem("task_list", JSON.stringify(taskList));
  const listItem = document.getElementById("in-task");
  listItem.parentNode.removeChild(listItem);
};

//completed task
const completedTask = computed(() => {
  return taskList.filter((task) => task.status === "done");
});

//delete task
const deleteTask = (index) => {
  taskList.splice(index, 1);
  localStorage.setItem("task_list", JSON.stringify(taskList));
  const listItem = document.getElementById("co-task");
  listItem.parentNode.removeChild(listItem);
};
</script>

<template>
  <div class="px-96 pb-8">
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
        v-for="(itask, index) in incompleteTask"
        :key="index"
      >
        <li class="flex justify-between items-center" id="in-task">
          <label class="flex items-center space-x-2">
            <input
              @click="changeStatus(index)"
              type="checkbox"
              class="form-checkbox"
            />
            <span class="ml-2">{{ itask.name }}</span>
          </label>
        </li>
      </ul>
    </div>

    <!-- Completed Task List -->
    <div class="bg-green-100 rounded shadow-lg p-4 mt-4">
      <h2 class="text-xl font-semibold mb-2">Completed Tasks</h2>
      <ul
        id="completed-list"
        class="space-y-4"
        v-for="(ctask, index) in completedTask"
        :key="index"
      >
        <li class="flex justify-between items-center" id="co-task">
          <label class="flex items-center space-x-2">
            <span class="line-through ml-2 text-green-700">
              {{ ctask.name }}
            </span>
          </label>
          <button
            @click="deleteTask(index)"
            class="text-red-500 hover:text-red-600"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
