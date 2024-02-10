<template>
  <button class="button" @click="previous()">
    <AtomPreviousIcon />
  </button>
</template>

<script>
import AtomPreviousIcon from "../icons/AtomPreviousIcon.vue";
import { useRouter } from "vue-router";

export default {
  name: "AtomPreviousButton",
  components: {
    AtomPreviousIcon,
  },
  setup(emit) {
    const router = useRouter();

    const previous = () => {
      emit("previous");
      router.push("/");
    };

    return {
      previous,
    };
  },
};
</script>

<style scoped>
.button {
  background-color: transparent;
  color: #1b1c1f;
  font-size: larger;
  border: 0;
  cursor: pointer;
}
</style>