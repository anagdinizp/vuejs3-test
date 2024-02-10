<template>
  <div>
    <div
      class="done-card-container"
      v-for="doneTaskFromDay in doneTasksFromDay"
      :key="doneTaskFromDay.day"
    >
      <MoleculeDoneCard :doneTaskFromDay="doneTaskFromDay" />
    </div>
  </div>
</template>

<script>
import MoleculeDoneCard from "../molecules/cards/MoleculeDoneCard.vue";
import dayjs from "dayjs";
import { ref } from "vue";

export default {
  name: "OrganismDoneTasks",
  setup() {
    const doneTasksFromDay = ref(
      Object.entries(
        (JSON.parse(localStorage.getItem("tasks")) ?? [])
          .filter((task) => task.done)
          .reverse()
          .reduce((acc, task, days) => {
            const today = dayjs(task.date).format("MM/DD/YYYY");
            const hasTodayInObject = Boolean(days[today]);
            if (hasTodayInObject) {
              return {
                ...acc,
                [today]: [...days[today], task],
              };
            }
            return {
              ...acc,
              [today]: [task],
            };
          }, {})
      ).map((day) => ({
        day: day[0],
        tasks: day[1],
      }))
    );

    return {
      doneTasksFromDay,
    };
  },
  // data() {
  //   return {
  //     doneTasksFromDay: Object.entries(
  //       (JSON.parse(localStorage.getItem("tasks")) ?? [])
  //         .filter((task) => task.done)
  //         .reverse()
  //         .reduce((acc, task, days) => {
  //           const today = dayjs(task.date).format("MM/DD/YYYY");
  //           const hasTodayInObject = Boolean(days[today]);
  //           if (hasTodayInObject) {
  //             return {
  //               ...acc,
  //               [today]: [...days[today], task],
  //             };
  //           }
  //           return {
  //             ...acc,
  //             [today]: [task],
  //           };
  //         }, {})
  //     ).map((day) => ({
  //       day: day[0],
  //       tasks: day[1],
  //     })),
  //   };
  // },
  // created() {
  //   console.log(
  //     Object.entries(
  //       (JSON.parse(localStorage.getItem("tasks")) ?? [])
  //         .filter((task) => task.done)
  //         .reverse()
  //         .reduce((acc, task, days) => {
  //           const today = dayjs(task.date).format("MM/DD/YYYY");
  //           const hasTodayInObject = Boolean(days[today]);
  //           if (hasTodayInObject) {
  //             return {
  //               ...acc,
  //               [today]: [...days[today], task],
  //             };
  //           }
  //           return {
  //             ...acc,
  //             [today]: [task],
  //           };
  //         }, {})
  //     ).map((day) => ({
  //       day: day[0], // String day
  //       tasks: day[1], // String day
  //     }))
  //   );
  // },
  components: {
    MoleculeDoneCard,
  },
};
</script>

<style scoped>
.done-card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>