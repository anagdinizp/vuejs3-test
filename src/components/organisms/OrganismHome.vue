<template>
  <div>
    <MoleculeHomeTitle />
    <AtomTaskToDoCard
      @refreshTask="refreshTasks"
      v-for="task in tasks"
      :key="task.id"
      :id="task.id"
      :name="task.name"
      :date="task.date"
      :done="task.done"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import AtomTaskToDoCard from "../atoms/cards/AtomTaskToDoCard.vue";
import MoleculeHomeTitle from "../molecules/MoleculeHomeTitle.vue";

export default {
  name: "OrganismHome",
  components: {
    MoleculeHomeTitle,
    AtomTaskToDoCard,
  },
  setup() {
    const tasks = ref(JSON.parse(localStorage.getItem("tasks")));

    const refreshTasks = (newTasks) => {
      return (this.tasks.value = newTasks)
    }

    watch(
      tasks,
      () => {
        this.refreshTasks();
      },
      { deep: true }
    );

    return {
      tasks,
      refreshTasks,
    };
  },
  // data() {
  //   return {
  //     tasks: JSON.parse(localStorage.getItem("tasks")),
  //   };
  // },
  // watch: {
  //   tasks() {
  //     this.refreshTasks();
  //   },
  // },

  // methods: {
  //   refreshTasks() {
  //     return (this.tasks = JSON.parse(localStorage.getItem("tasks")));
  //   },
  // },
};
</script>

<style scoped>
</style>