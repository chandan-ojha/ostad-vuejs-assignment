<script setup></script>

<template>
  <div class="px-96">
    <h1 class="text-3xl font-semibold mb-4 text-center">Todo App</h1>
    <div class="mb-4 flex items-center">
      <input
        type="text"
        id="task-input"
        class="w-3/4 border p-2"
        placeholder="Add a new task..."
      />
      <button
        id="add-task"
        class="w-1/4 ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </div>

    <!-- Active Task List -->
    <div class="bg-white rounded shadow-lg p-4">
      <h2 class="text-xl font-semibold mb-2">Active Tasks</h2>
      <ul id="todo-list" class="space-y-4">
        <li class="flex justify-between items-center">
          <label class="flex items-center space-x-2">
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-2">Sample Task 1</span>
          </label>
          <button class="text-red-500 hover:text-red-600">Delete</button>
        </li>
        <li class="flex justify-between items-center">
          <label class="flex items-center space-x-2">
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-2">Sample Task 2</span>
          </label>
          <button class="text-red-500 hover:text-red-600">Delete</button>
        </li>
      </ul>
    </div>

    <!-- Completed Task List -->
    <div class="bg-green-100 rounded shadow-lg p-4 mt-4">
      <h2 class="text-xl font-semibold mb-2">Completed Tasks</h2>
      <ul id="completed-list" class="space-y-4">
        <li class="flex justify-between items-center">
          <label class="flex items-center space-x-2">
            <input type="checkbox" class="form-checkbox" checked />
            <span class="line-through ml-2 text-green-700"
              >Completed Task 1</span
            >
          </label>
          <button class="text-red-500 hover:text-red-600">Delete</button>
        </li>
        <li class="flex justify-between items-center">
          <label class="flex items-center space-x-2">
            <input type="checkbox" class="form-checkbox" checked />
            <span class="line-through ml-2 text-green-700"
              >Completed Task 2</span
            >
          </label>
          <button class="text-red-500 hover:text-red-600">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>
