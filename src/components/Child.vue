<template>
  <div>
    <h1>count:{{ count }}</h1>
    <h1>bigCount:{{ bigCount }}</h1>
    <h1>largeCount:{{ largeCount }}</h1>
    <input v-model.number="num">
    <button @click="handleCommit(num)">点击commit</button>
    <button @click="handleDispatch(num)">点击dispatch</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "Child",
  data() {
    return {
      num: 1
    }
  },
  computed: {
    ...mapState('countAbout', ['count']),
    ...mapGetters('countAbout', ['bigCount', 'largeCount'])
  },
  methods: {
    ...mapMutations('countAbout',{handleCommit:'HANDLE_ADD'}),
    ...mapActions('countAbout',{handleDispatch:'handleAdd'}),

  }
}
</script>

<style scoped>

</style>