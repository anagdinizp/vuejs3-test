<template>
  <div class="container-create-button">
    <button class="button" @click="createTask()">Create</button>
  </div>
</template>

<script>
export default {
  name: "AtomCreateButton",
  setup(emit) {
    const createTask = () => {
      emit("createTask");
    };

    return {
      createTask,
    };
  },
};
</script>

<style scoped>
.container-create-button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.button {
  background: #24a19c;
  color: #ffffff;
  width: 327px;
  height: 56px;
  padding: 20px;
  border: 0;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
}
</style>