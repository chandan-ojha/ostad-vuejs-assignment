import { ref, computed } from "vue";
import { defineStore } from "pinia";

const taskStore = defineStore("task", () => {
  const taskList = ref(JSON.parse(localStorage.getItem("task_list")) || []);

  //add task
  function addTask(taskData) {
    if (taskData.name === "") {
      alert("Please enter a task");
      return;
    }
    taskList.value.push({
      name: taskData.name,
      status: "undone",
    });

    localStorage.setItem("task_list", JSON.stringify(taskList.value));
    taskData.name = "";
  }

  //incomplete task
  const incompleteTask = computed(() => {
    return taskList.value.filter((task) => task.status === "undone");
  });

  //change task status
  function changeStatus(index) {
    taskList.value[index].status = "done";
    localStorage.setItem("task_list", JSON.stringify(taskList.value));
  }

  //completed task
  const completedTask = computed(() => {
    return taskList.value.filter((task) => task.status === "done");
  });

  //delete task
  function deleteTask(index) {
    taskList.value.splice(index, 1);
    localStorage.setItem("task_list", JSON.stringify(taskList.value));
  }
  return {
    taskList,
    addTask,
    incompleteTask,
    changeStatus,
    completedTask,
    deleteTask,
  };
});

export { taskStore };
