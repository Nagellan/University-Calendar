<template>
  <aside>
    <div class="item days">Days</div>
    <Days />
  </aside>
</template>

<script>
import Days from "./additional components/Days";
export default {
  data() {
    return {};
  },
  components: {
    Days
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/toolbar-style.css";
</style>