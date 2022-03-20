<template>
  <div>
    <h1>count:{{ count }}</h1>
    <input v-model.number="num"> //每次加到count中的数
    <button @click="handleClick">点击count++</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
      num: 1
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    handleClick() {
      this.$store.commit('HANDLE_ADD', this.num)
    }
  }
}
</script>

<style scoped>

</style>