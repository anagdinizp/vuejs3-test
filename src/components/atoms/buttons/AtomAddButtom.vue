<template>
  <button class="add-button">
    <AtomAddIcon />
  </button>
</template>

<script>
import AtomAddIcon from "../icons/AtomAddIcon.vue";

export default {
  name: "AtomAddButton",
  components: { AtomAddIcon },
};
</script>

<style scoped>
.add-button {
  background: #24a19c;
  width: 48px;
  height: 48px;
  border: #24a19c;
  border-radius: 100%;
}
.add {
  font-size: 36px;
  color: white;
  font-weight: 200;
  font-family: "Courier New", Courier, monospace;
}
</style>