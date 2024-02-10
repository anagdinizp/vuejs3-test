<template>
  <div class="date-container">
    <h1 class="day">{{ day }}</h1>
    <div class="day-month-year-container">
      <h3 class="month-year">{{ year }}-{{ month }}</h3>
      <h3 class="day-name">{{ dayWeek }}</h3>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { ref } from "vue";

export default {
  name: "AtomDate",
  setup() {
    const date = ref(Date.now());
    const year = ref(dayjs(date.value).format("YYYY"));
    const month = ref(dayjs(date.value).format("M"));
    const day = ref(dayjs(date.value).format("D"));
    const dayWeek = ref(dayjs(date.value).format("ddd"));

    return {
      date,
      year,
      month,
      day,
      dayWeek,
    };
  },
};
</script>

<style scoped>
.date-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}
.day {
  font-weight: 700;
  color: #1b1c1f;
  font-size: 44px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.day-month-year-container {
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  justify-content: space-around;
}
.month-year {
  font-size: 13px;
  font-weight: 100;
  margin: 0px;
}
.day-name {
  font-size: 13px;
  font-weight: 100;
  margin: 0px;
}
</style>