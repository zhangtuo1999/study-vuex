<template>
  <div>
    <h1>count:{{ count }}</h1>
    <h1>bigCount:{{ bigCount }}</h1>
    <h1>largeCount:{{ largeCount }}</h1>
    <input v-model.number="num">
    <button @click="handleClick">点击count++</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: "Child",
  data() {
    return {
      num: 1
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['bigCount','largeCount'])
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