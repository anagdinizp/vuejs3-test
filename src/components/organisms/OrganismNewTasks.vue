<template>
  <div>
    <MoleculeNewTitle />
    <div class="content-container">
      <div class="label-container">
        <label class="create-task-label">task</label>
      </div>
      <input v-model="taskName" type="text" class="create-task-input" />
      <AtomCreateButton @click="createTask()" />
    </div>
  </div>
</template>

<script>
import MoleculeNewTitle from "../molecules/MoleculeNewTitle.vue";
import AtomCreateButton from "../atoms/buttons/AtomCreateButton.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "OrganismNewTasks",
  components: {
    MoleculeNewTitle,
    AtomCreateButton,
  },
  setup() {
    const router = useRouter();

    const taskName = ref("");

    const createTask = () => {
      const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

      const newTask = {
        id: tasks.length === 0 ? 1 : tasks.length + 1,
        date: Date.now(),
        name: this.taskName.value,
        done: false,
      };

      const newTasks = [...tasks, newTask];

      localStorage.setItem("tasks", JSON.stringify(newTasks));

      router.push("/");
    };
    return {
      taskName,
      createTask,
    };
    // data() {
    //   return {
    //     taskName: "",
    //   };
    // },
    // methods: {
    //   createTask() {
    //     const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    //     const newTask = {
    //       id: tasks.length === 0 ? 1 : tasks.length + 1,
    //       date: Date.now(),
    //       name: this.taskName,
    //       done: false,
    //     };
    //     const newTasks = [...tasks, newTask];
    //     localStorage.setItem("tasks", JSON.stringify(newTasks));
    //     this.$router.push("/");
    //   },
  },
};
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
}

.create-task-input {
  width: 320px;
  height: 56px;
  margin-inline: 10px;
  border-radius: 6px;
  border: 1px solid #e0e5ed;
  margin-bottom: 40px;
  padding-inline: 10px;
}
.label-container {
  display: flex;
  justify-items: flex-start;
  padding-left: 10px;
  align-items: flex-start;
  margin-top: 20px;
}
.create-task-label {
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: start;
  color: #1b1c1f;
  margin-bottom: 10px;
}
</style>