<template>
  <div class="container">
    <AtomDate />
    <AtomAddButton @click="onClick()" />
  </div>
</template>

<script>
import AtomDate from "../atoms/AtomDate.vue";
import AtomAddButton from "../atoms/buttons/AtomAddButtom.vue";
import { useRouter } from "vue-router";

export default {
  name: "MoleculeHomeTitle",
  components: {
    AtomDate,
    AtomAddButton,
  },
  setup() {
    const router = useRouter();

    const onClick = () => {
      router.push("/new");
    };

    return {
      onClick,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 20px;
  align-items: center;
}
</style>