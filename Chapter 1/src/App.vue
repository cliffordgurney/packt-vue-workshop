<template>
  <Exercise />
</template>

<script>
import Exercise from './components/Exercise5'

export default {
  components: {
    Exercise,
  },
  data() {
    return {
      interests: [
        {
          title: 'TV',
          favorite: ['Designated Survivor', 'Spongebob'],
        },
        {
          title: 'Games',
          favorite: ['CS:GO'],
        },
        {
          title: 'Sports',
          favorite: [],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
