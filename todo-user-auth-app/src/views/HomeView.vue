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

    <!-- Task List -->
    <div class="bg-white rounded shadow-lg p-4">
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
  </div>
</template>
