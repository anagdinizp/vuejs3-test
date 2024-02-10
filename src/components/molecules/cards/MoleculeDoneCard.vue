<template>
  <div class="container" v-if="doneTaskFromDay">
    <div class="container-card-header">
      <h3 class="card-header-title">{{ month }}.{{ day }} {{ weekDay }}</h3>
      <h3 class="card-header-title">{{ tasksList.length }} task</h3>
    </div>
    <div class="card-content" v-for="task in tasksList" :key="task.id">
      <AtomTaskToDoCard
        :name="task.day"
        :date="task.data"
        :done="task.done"
        :id="task.id"
      />
    </div>
  </div>
</template>


<script>
import AtomTaskToDoCard from "@/components/atoms/cards/AtomTaskToDoCard.vue";
import dayjs from "dayjs";
import { ref } from "vue";

export default {
  name: "MoleculeDoneCard",
  components: {
    AtomTaskToDoCard,
  },
  props: {
    doneTaskFromDay: Object,
  },
  setup(props) {
    const month = ref(dayjs(props.doneTaskFromDay.day).format("M"));
    const day = ref(dayjs(props.doneTaskFromDay.day).format("D"));
    const weekDay = ref(dayjs(props.doneTaskFromDay.day).format("ddd"));
    const tasksList = ref(props.doneTaskFromDay.tasks);

    return {
      month,
      day,
      weekDay,
      tasksList
    }
  }
  // },
  // data() {
  //   return {
  //     month: dayjs(this.doneTaskFromDay.day).format("M"),
  //     day: dayjs(this.doneTaskFromDay.day).format("D"),
  //     weekDay: dayjs(this.doneTaskFromDay.day).format("ddd"),
  //     tasksList: this.doneTaskFromDay.tasks,
  //   };
  // },
  // created() {
  //   console.log(this.doneTaskFromDay);
  //   console.log("taskList:", this.tasksList[0]);
  // },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 340px;
  margin-bottom: 15px;
}
.container-card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 36px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: #24a19c;
  padding-top: 2px;
  padding-bottom: 2px;
}
.card-header-title {
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  padding-inline: 15px;
}
.card-content {
  background: #ffffff;
  box-shadow: 0px 4px 40px 0px #0f163a14;
  height: fit-content;
  justify-content: flex-start;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.content {
  text-align: justify;
  margin-left: 15px;
}
</style>