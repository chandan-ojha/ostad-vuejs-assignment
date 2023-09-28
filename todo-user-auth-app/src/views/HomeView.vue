<script setup>
import { ref, reactive } from "vue";
const tasks = ref([]);

const task = reactive({
  name: "",
  status: "undone",
});

//get task
const getTask = () => {
  const taskList = JSON.parse(localStorage.getItem("task_list"));
  return taskList;
};

//add task
const addTask = () => {
  if (task.name === "") {
    alert("Please enter a task");
    return;
  }
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

//toggle task status
const changeStatus = (index) => {
  const taskList = getTask();
  taskList[index].status = "done";
  tasks.value = [...taskList];
  localStorage.setItem("task_list", JSON.stringify(taskList));
};

//incomplete task
const incompleteTask = () => {
  const taskList = getTask();
  if (!taskList) {
    return;
  }
  const incompleteTask = taskList.filter((task) => task.status === "undone");
  return incompleteTask;
};

//completed task
const completedTask = () => {
  const taskList = getTask();
  if (!taskList) {
    return;
  }
  const completedTask = taskList.filter((task) => task.status === "done");
  return completedTask;
};

//edit task
/*const editTask = (index) => {
  const taskList = getTask();
  task.name = taskList[index].name;
};*/
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
        v-for="(itask, index) in incompleteTask()"
        :key="index"
      >
        <li class="flex justify-between items-center">
          <label class="flex items-center space-x-2">
            <input
              type="checkbox"
              class="form-checkbox"
              @change="changeStatus(index)"
            />
            <span class="ml-2">{{ itask.name }}</span>
          </label>
          <!-- <button
            @click="editTask(index)"
            class="text-blue-500 hover:text-blue-600"
          >
            Edit
          </button> -->
        </li>
      </ul>
    </div>

    <!-- Completed Task List -->
    <div class="bg-green-100 rounded shadow-lg p-4 mt-4">
      <h2 class="text-xl font-semibold mb-2">Completed Tasks</h2>
      <ul
        id="completed-list"
        class="space-y-4"
        v-for="(ctask, index) in completedTask()"
        :key="index"
      >
        <li class="flex justify-between items-center">
          <label class="flex items-center space-x-2">
            <span class="line-through ml-2 text-green-700">
              {{ ctask.name }}
            </span>
          </label>
          <button class="text-red-500 hover:text-red-600">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>
