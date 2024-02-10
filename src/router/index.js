import { createRouter, createWebHistory } from "vue-router";
import TodayView from "../views/TodayView.vue";
import DoneView from "../views/DoneView.vue";
import NewView from "../views/NewView.vue";

const routes = [
  {
    path: "/",
    name: "today",
    component: TodayView,
  },
  {
    path: "/new",
    name: "new",
    component: NewView,
  },
  {
    path: "/done",
    name: "done",
    component: DoneView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
