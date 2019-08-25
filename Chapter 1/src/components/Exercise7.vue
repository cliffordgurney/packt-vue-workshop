<template>
  <div>
    <ul>
      <li v-for="(item, n) in interests" :key="n">
        <h1 class="h1" v-if="item.title === 'TV'">{{ item.title }}</h1>
        <h3 v-else-if="item.favorite.length > 0">{{ item.title }}</h3>
        <h4 v-else>{{ item.title }}</h4>

        <ol v-if="item.favorite.length > 0">
          <li v-for="(fav, m) in item.favorite" :key="m">{{ fav }}</li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
li {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 10px;
}
.h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
