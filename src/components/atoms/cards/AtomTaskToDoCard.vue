<template>
  <div class="container">
    <div :class="[doneValue ? 'task-card-done' : 'task-card']">
      <div v-if="!doneValue">
        <input
          v-model="doneValue"
          type="checkbox"
          class="checkbox"
          @click="doneTask()"
        />
      </div>
      <AtomCheckedIcon
        v-if="doneValue"
        v-model="doneValue"
        @click="doneTask()"
      />
      <p class="task-content">{{ name }}</p>
    </div>
  </div>
</template>

<script>
import AtomCheckedIcon from "../icons/AtomCheckedIcon.vue";
import { ref } from "vue";

export default {
  name: "AtomTaskToDoCard",
  components: {
    AtomCheckedIcon,
  },
  props: {
    name: String,
    date: Number,
    done: Boolean,
    id: Number,
  },
  setup(props, { emit }) {
    const doneValue = ref(props.done);

    const doneTask = () => {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      const newTasks = tasks.map((task) => {
        if (task.id === this.id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      emit("refreshTasks", newTasks);
    };

    return {
      doneValue,
      doneTask,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 10px;
}
.task-card {
  background-color: #ffffff;
  justify-content: space-between;
  color: black;
  font-size: larger;
  width: 300px;
  max-width: 300px;
  height: 59px;
  display: flex;
  justify-content: start;
  align-items: center;
  box-shadow: 0px 4px 40px 0px #0f163a14;
  margin-bottom: 10px;
  padding-left: 15px;
}
.task-card-done {
  background-color: #ffffff;
  justify-content: space-between;
  color: black;
  font-size: larger;
  width: 300px;
  max-width: 300px;
  height: 59px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
}
.task-content {
  color: #333333;
  font-size: 16px;
  padding-left: 8px;
}
.checkbox {
  appearance: none;
  padding: 8px;
  border: 0.1rem solid #979797;
  border-radius: 100%;
  cursor: pointer;
  margin-right: 0.1rem;
  width: 18px;
  height: 18px;
  margin: 0px;
}
</style>